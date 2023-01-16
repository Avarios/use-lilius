import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Icon,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  addWeeks,
  compareAsc,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { useState } from "react";
import { IoArrowForwardSharp, IoCalendarClearSharp, IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import { useLilius } from "../../src/use-lilius";

export const RangeSelect: React.FC = () => {
  const {
    calendar,
    deselect,
    inRange,
    isSelected,
    select,
    selected,
    selectRange,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
    viewToday,
  } = useLilius({ numberOfMonths: 2 });

  const styles = useMultiStyleConfig("Datepicker", {});

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box width={300}>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <Box
            alignItems="center"
            borderRadius={4}
            borderWidth={1}
            display="flex"
            justifyContent="space-between"
            padding={2}
            sx={styles.input}
            width="100%"
          >
            <Box alignItems="inherit" display="flex">
              {selected.length === 0 && (
                <Text paddingLeft={2} sx={styles.placeholder}>
                  Select a Date Range
                </Text>
              )}

              {selected.length > 0 && (
                <>
                  <Text>{format(selected[0], "MM/dd/yyyy")}</Text>
                  <Icon as={IoArrowForwardSharp} color="blue.400" marginX={2} />
                </>
              )}

              {selected.length > 1 && <Text>{format(selected[selected.length - 1], "MM/dd/yyyy")}</Text>}
            </Box>

            <IconButton
              aria-label="Open Calendar"
              icon={<IoCalendarClearSharp />}
              minWidth="auto"
              onClick={() => setIsOpen(!isOpen)}
              sx={styles.icon}
              variant="link"
              _focus={{
                outline: "none",
              }}
            />
          </Box>
        </PopoverTrigger>

        <PopoverContent sx={styles.popContent} w="600px">
          <PopoverBody sx={styles.popBody}>
            <ButtonGroup sx={styles.shortcutButtonGroup}>
              <Button
                onClick={() => selectRange(startOfWeek(new Date()), endOfWeek(new Date()), true)}
                size="sm"
                sx={styles.shortcutButton}
              >
                This Week
              </Button>

              <Button
                onClick={() =>
                  selectRange(startOfWeek(addWeeks(new Date(), 1)), endOfWeek(addWeeks(new Date(), 1)), true)
                }
                size="sm"
                sx={styles.shortcutButton}
              >
                Next Week
              </Button>
            </ButtonGroup>

            <Divider sx={styles.divider} />

            <Box sx={styles.navigationContainer}>
              <IconButton
                aria-label="Previous Month"
                icon={<IoChevronBackSharp />}
                onClick={viewPreviousMonth}
                size="sm"
                sx={styles.navigationButton}
              />

              {calendar.map(([[firstDay]]) => (
                <Text key={firstDay.toDateString()} sx={styles.navigationLabel}>
                  {format(firstDay, "MMMM yyyy")}
                </Text>
              ))}

              <IconButton
                aria-label="Next Month"
                icon={<IoChevronForwardSharp />}
                onClick={viewNextMonth}
                size="sm"
                sx={styles.navigationButton}
              />
            </Box>

            <Stack direction="row">
              {calendar.map((month) => (
                <Box w="50%" key={month[0][0].toDateString()}>
                  <Box sx={styles.calendarContainer}>
                    <Box sx={styles.dayLabelContainer}>
                      {month[0].map((day) => (
                        <Box key={`${day}`} sx={styles.dayLabel}>
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][getDay(day)]}
                        </Box>
                      ))}
                    </Box>

                    {month.map((week) => (
                      <Box
                        key={`month-${month[0][0].toDateString()}-week-${week[0]}`}
                        sx={styles.calendarMatrixContainer}
                      >
                        {week.map((day) => {

                          const start = selected[0]
                          const end = selected[selected.length - 1]
                          const isStart = isEqual(day, start)
                          const isEnd = isEqual(day, end)
                          const isFloorBoundStart = (isStart && start > end)
                          const isFloorBoundEnd = (isEnd && start < end)
                          const isCeilBoundStart = (isStart && start < end)
                          const isCeilBoundEnd = (isEnd && start > end)

                          return (
                          <Box
                            data-in-range={inRange(day, startOfMonth(viewing), endOfMonth(viewing))}
                            data-selected={isSelected(day)}
                            data-today={isToday(day)}
                            data-is-origin={isEqual(selected[0], day)}
                            data-dont-round={
                              isSelected(day) &&
                              !isEqual(day, selected[0]) &&
                              !isEqual(day, selected[selected.length - 1])
                            }
                            data-dont-round-left={isSelected(day) && isFloorBoundStart || isFloorBoundEnd }
                            data-dont-round-right={isSelected(day) && isCeilBoundStart || isCeilBoundEnd }
                            key={`${day}`}
                            onClick={() => {

                              if (selected.length === 0) {
                                select(day);
                              } else if (isSelected(day)) {
                                if (selected.length === 1) {
                                  deselect(day);
                                } else {

                                  const start = selected[0]
                                  const end = day
                                  let range: Date[] = []
                                  if(start > end) {
                                    range = eachDayOfInterval({ start: end, end: start }).reverse()
                                  } else {
                                    range = eachDayOfInterval({ start: start, end: end })
                                  }

                                  const diff = selected.filter((d) =>
                                    range.map((a) => a.getTime()).includes(d.getTime()),
                                  );

                                  selectRange(diff[0], diff[diff.length - 1], true);
                                }
                              } else {
                                selectRange(selected[0], day, true);
                              }
                            }}
                            sx={styles.calendarMatrixDay}
                          >
                            <Text>{format(day, "dd")}</Text>
                          </Box>
                          )
                        })}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>

            <Divider sx={styles.divider} />

            <ButtonGroup sx={styles.todayButtonGroup}>
              <Button onClick={viewToday} size="sm" sx={styles.todayButton}>
                Today
              </Button>
            </ButtonGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
