import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  addDays,
  endOfMonth,
  format,
  getDate,
  getDay,
  getMonth,
  getYear,
  isToday,
  isValid,
  lastDayOfMonth,
  nextMonday,
  parse,
  startOfMonth,
} from "date-fns";
import React, { useEffect, useState } from "react";
import { IoCalendarClearSharp, IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import { useLilius } from "../../src/use-lilius";

export const SingleSelect: React.FC = () => {
  const {
    calendar,
    clearSelected,
    clearTime,
    inRange,
    isSelected,
    select,
    selected,
    setViewing,
    toggle,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
    viewToday,
  } = useLilius();

  const styles = useMultiStyleConfig("Datepicker", {});

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Only accept digits and forward slash as input.
  const onInputChange = (input: string) => {
    setInputValue(input.trim().replace(/[^\d/]+/g, ""));
  };

  // When the input field loses focus, we need to parse
  // the input to set the date. While doing this, we also do some
  // assumptions for the user and fix mistakes.
  const onInputBlur = () => {
    // If the input is empty, we should just go ahead and
    // clear the current selection.
    if (inputValue === "") {
      clearSelected();
      return;
    }

    const parts = inputValue.split("/");
    const partsAsNumber = parts.map((p) => parseInt(p, 10));

    // Make sure the month is within the valid range
    // of months (1 - 12). If no month is given, default
    // to the one we're looking at.
    if (parts.length < 1) {
      parts[0] = `${getMonth(viewing)}`;
    } else if (partsAsNumber[0] < 1) {
      parts[0] = "1";
    } else if (partsAsNumber[0] > 12) {
      parts[0] = "12";
    }

    // Make sure the day is within the valid range
    // of days (1 - last day of the given month). If no
    // day is given, default to the first day.
    if (parts.length < 2) {
      parts[1] = "1";
    } else if (partsAsNumber[1] < 1) {
      parts[1] = "1";
    } else if (partsAsNumber[1] > getDate(lastDayOfMonth(viewing))) {
      parts[1] = `${getDate(lastDayOfMonth(viewing))}`;
    }

    // If no year is given, default to the one we're looking at.
    // If the user passes in 2 digits, append them to the first 2 digits
    // of the year we're looking at. Example: `12` becomes `2012` if we're
    // looking at any year between 2000 and 2999.
    if (parts.length < 3) {
      parts[2] = `${getYear(viewing)}`;
    } else if (partsAsNumber[2] > 9 && partsAsNumber[2] < 100) {
      parts[2] = `${Math.round(getYear(viewing) / 1000) * 1000 + partsAsNumber[2]}`;
    }

    const parsed = parse(parts.join("/"), "MM/dd/yyyy", new Date());

    if (isValid(parsed)) {
      select(parsed, true);
    } else if (selected.length > 0) {
      setInputValue(format(selected[0], "MM/dd/yyyy"));
    } else {
      setInputValue("");
    }
  };

  // When the selection is changed, we want to update the input field
  // and the currently viewed month to match.
  useEffect(() => {
    setInputValue(selected.length > 0 ? format(selected[0], "MM/dd/yyyy") : "");
    setViewing(selected.length > 0 ? selected[0] : new Date());
  }, [selected, setViewing]);

  return (
    <Box width={300}>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <InputGroup>
            <Input
              onBlur={() => onInputBlur()}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Select a Date"
              value={inputValue}
            />

            <InputRightElement>
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
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>

        <PopoverContent sx={styles.popContent}>
          <PopoverBody sx={styles.popBody}>
            <ButtonGroup sx={styles.shortcutButtonGroup}>
              <Button onClick={() => select(clearTime(new Date()), true)} size="sm" sx={styles.shortcutButton}>
                Today
              </Button>

              <Button
                onClick={() => select(addDays(clearTime(new Date()), 1), true)}
                size="sm"
                sx={styles.shortcutButton}
              >
                Tomorrow
              </Button>

              <Button
                onClick={() => select(nextMonday(clearTime(new Date())), true)}
                size="sm"
                sx={styles.shortcutButton}
              >
                Next Monday
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
                {calendar[0][0].map((day) => (
                  <Box key={`${day}`} sx={styles.dayLabel}>
                    {["Sun", "Mon", "Tue", "Wed", "Tue", "Thu", "Fri", "Sat"][getDay(day)]}
                  </Box>
                ))}
              </Box>

              {calendar[0].map((week) => (
                <Box key={`week-${week[0]}`} sx={styles.calendarMatrixContainer}>
                  {week.map((day) => (
                    <Box
                      data-in-range={inRange(day, startOfMonth(viewing), endOfMonth(viewing))}
                      data-selected={isSelected(day)}
                      data-today={isToday(day)}
                      key={`${day}`}
                      onClick={() => toggle(day, true)}
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
