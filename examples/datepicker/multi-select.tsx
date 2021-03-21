import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useMultiStyleConfig,
  usePrevious,
} from "@chakra-ui/react";
import { endOfMonth, format, getDay, isToday, startOfMonth } from "date-fns";
import React, { useLayoutEffect, useRef, useState } from "react";
import { IoCalendarClearSharp, IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import { useLilius } from "../../src/use-lilius";

export const MultiSelect: React.FC = () => {
  const {
    calendar,
    inRange,
    isSelected,
    selected,
    toggle,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
    viewToday,
  } = useLilius();

  const styles = useMultiStyleConfig("Datepicker", {});
  const listRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const previouslySelected = usePrevious(selected);
  const [visibleTagCount, setVisibleTagCount] = useState(0);

  // We only want to show as many selected dates as will fit
  // within the pseudo input field. We track how many that is so
  // that we can render a +{leftover} tag at the end of the list
  // if we need to.
  useLayoutEffect(() => {
    if (previouslySelected?.length || selected.length > visibleTagCount) {
      const COUNT_TAG_WIDTH = 50;

      let newVisibleTagCount = selected.length;

      if (listRef.current) {
        const tags = listRef.current.querySelectorAll("[data-tag]");
        const containerBounds = listRef.current.getBoundingClientRect();

        for (let i = 0; i < tags.length; i += 1) {
          const tag = tags[i];
          const tagBounds = tag.getBoundingClientRect();

          if (tagBounds.right > containerBounds.right) {
            const previousTag = tags[i - 1];
            const previousTagBounds = previousTag.getBoundingClientRect();

            if (previousTagBounds.right > containerBounds.right - COUNT_TAG_WIDTH) {
              newVisibleTagCount = i - 1;
            } else {
              newVisibleTagCount = i;
            }

            break;
          }
        }
      }

      setVisibleTagCount(newVisibleTagCount);
    }
  }, [selected, previouslySelected]);

  return (
    <Box width={500}>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <Box
            alignItems="center"
            borderColor="gray.200"
            borderRadius={4}
            borderWidth={1}
            display="flex"
            justifyContent="space-between"
            padding={2}
            width="100%"
          >
            <Box overflow="hidden" ref={listRef} width="100%">
              {selected.length === 0 && (
                <Text color="gray.300" paddingLeft={2}>
                  Select Dates
                </Text>
              )}

              <HStack spacing={2}>
                {selected.map((date, index) => {
                  if (index < visibleTagCount) {
                    return (
                      <Tag
                        borderRadius={2}
                        colorScheme="blue"
                        data-tag="true"
                        flexShrink={0}
                        key={`${date}`}
                        variant="solid"
                      >
                        <TagLabel>{format(date, "MM/dd/yyyy")}</TagLabel>
                        <TagCloseButton onClick={() => toggle(date)} />
                      </Tag>
                    );
                  }

                  return null;
                })}

                {visibleTagCount < selected.length && (
                  <Tag borderRadius={2} colorScheme="blue" flexShrink={0} key="overflow">
                    <TagLabel>+{selected.length - visibleTagCount}</TagLabel>
                  </Tag>
                )}
              </HStack>
            </Box>

            <IconButton
              aria-label="Open Calendar"
              colorScheme={isOpen ? "blue" : "gray"}
              icon={<IoCalendarClearSharp />}
              minWidth="auto"
              onClick={() => setIsOpen(!isOpen)}
              variant="link"
              _focus={{
                outline: "none",
              }}
            />
          </Box>
        </PopoverTrigger>

        <PopoverContent sx={styles.popContent}>
          <PopoverBody sx={styles.popBody}>
            <Box sx={styles.navigationContainer}>
              <IconButton
                aria-label="Previous Month"
                icon={<IoChevronBackSharp />}
                onClick={viewPreviousMonth}
                size="sm"
                sx={styles.navigationButton}
              />

              <Text sx={styles.navigationLabel}>{format(viewing, "MMMM yyyy")}</Text>

              <IconButton
                aria-label="Next Month"
                icon={<IoChevronForwardSharp />}
                onClick={viewNextMonth}
                size="sm"
                sx={styles.navigationButton}
              />
            </Box>

            <Box sx={styles.calendarContainer}>
              <Box sx={styles.dayLabelContainer}>
                {calendar.length > 0 &&
                  calendar[0].map((day) => (
                    <Box key={`${day}`} sx={styles.dayLabel}>
                      {["Sun", "Mon", "Tue", "Wed", "Tue", "Thu", "Fri", "Sat"][getDay(day)]}
                    </Box>
                  ))}
              </Box>

              {calendar.map((week) => (
                <Box key={`week-${week[0]}`} sx={styles.calendarMatrixContainer}>
                  {week.map((day) => (
                    <Box
                      data-in-range={inRange(day, startOfMonth(viewing), endOfMonth(viewing))}
                      data-selected={isSelected(day)}
                      data-today={isToday(day)}
                      key={`${day}`}
                      onClick={() => toggle(day)}
                      sx={styles.calendarMatrixDay}
                    >
                      <Text>{format(day, "dd")}</Text>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

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
