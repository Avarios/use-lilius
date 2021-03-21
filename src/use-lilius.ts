import {
  addMonths,
  addYears,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  isAfter,
  isBefore,
  isEqual,
  set,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
} from "date-fns";
import { useEffect, useState } from "react";

export enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

export enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export interface Options {
  /**
   * @default Day.SUNDAY
   */
  weekStartsOn?: Day;
  /**
   * The initial viewing date.
   *
   * @default new Date()
   */
  viewing?: Date;
  /**
   * The initial date(s) selection.
   *
   * @default []
   */
  selected?: Date[];
}

export const useLilius = ({
  weekStartsOn = Day.SUNDAY,
  viewing: initialViewing = new Date(),
  selected: initialSelected = [],
}: Options = {}) => {
  // Helpers

  const clearTime = (date: Date) => set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

  const inRange = (date: Date, min: Date, max: Date) =>
    (isEqual(date, min) || isAfter(date, min)) && (isEqual(date, max) || isBefore(date, max));

  // Viewing

  const [viewing, setViewing] = useState<Date>(initialViewing);

  const viewMonth = (month: Month) => setViewing(setMonth(viewing, month));

  const viewPreviousMonth = () => setViewing(subMonths(viewing, 1));

  const viewNextMonth = () => setViewing(addMonths(viewing, 1));

  const viewYear = (year: number) => setViewing(setYear(viewing, year));

  const viewPreviousYear = () => setViewing(subYears(viewing, 1));

  const viewNextYear = () => setViewing(addYears(viewing, 1));

  // Date Selection

  const [selected, setSelected] = useState<Date[]>(initialSelected);

  const clearSelected = () => setSelected([]);

  const isSelected = (date: Date) => selected.findIndex((s) => isEqual(s, date)) > -1;

  const select = (date: Date | Date[], replaceExisting?: boolean) => {
    if (replaceExisting) {
      setSelected(Array.isArray(date) ? date : [date]);
    } else {
      setSelected(selected.concat(Array.isArray(date) ? date : [date]));
    }
  };

  const deselect = (date: Date | Date[]) =>
    setSelected(
      Array.isArray(date)
        ? selected.filter((s) => !date.map((d) => d.getTime()).includes(s.getTime()))
        : selected.filter((s) => !isEqual(s, date)),
    );

  const toggle = (date: Date, replaceExisting?: boolean) =>
    isSelected(date) ? deselect(date) : select(date, replaceExisting);

  const selectRange = (start: Date, end: Date, replaceExisting?: boolean) => {
    if (replaceExisting) {
      setSelected(eachDayOfInterval({ start, end }));
    } else {
      setSelected(selected.concat(eachDayOfInterval({ start, end })));
    }
  };

  const deselectRange = (start: Date, end: Date) => {
    setSelected(
      selected.filter(
        (s) =>
          !eachDayOfInterval({ start, end })
            .map((d) => d.getTime())
            .includes(s.getTime()),
      ),
    );
  };

  // Calendar Matrix

  const [calendar, setCalendar] = useState<Date[][]>([]);

  // Update the calendar matrix when the date viewed changes.

  useEffect(() => {
    const matrix = eachWeekOfInterval(
      { start: startOfMonth(viewing), end: endOfMonth(viewing) },
      { weekStartsOn },
    ).map((week) => eachDayOfInterval({ start: startOfWeek(week), end: endOfWeek(week) }));

    setCalendar(matrix);
  }, [viewing]);

  // Return all the things!

  return {
    /**
     * Returns a copy of the given date with the time set to 00:00:00:00.
     */
    clearTime,

    /**
     * Returns whether or not a date is between 2 other dates (inclusive).
     */
    inRange,

    /**
     * The date represented in the calendar matrix. Note that
     * the month and year are the only parts used.
     */
    viewing,

    /**
     * Set the date represented in the calendar matrix. Note that
     * the month and year are the only parts used.
     */
    setViewing,

    /**
     * Set the viewing date to the given month.
     */
    viewMonth,

    /**
     * Set the viewing date to the month before the current.
     */
    viewPreviousMonth,

    /**
     * Set the viewing date to the month after the current.
     */
    viewNextMonth,

    /**
     * Set the viewing date to the given year.
     */
    viewYear,

    /**
     * Set the viewing date to the year before the current.
     */
    viewPreviousYear,

    /**
     * Set the viewing date to the year after the current.
     */
    viewNextYear,

    /**
     * The dates currently selected.
     */
    selected,

    /**
     * Override the currently selected dates.
     */
    setSelected,

    /**
     * Reset the selected dates to [].
     */
    clearSelected,

    /**
     * Determine whether or not a date has been selected.
     */
    isSelected,

    /**
     * Select one or more dates.
     */
    select,

    /**
     * Deselect one or more dates.
     */
    deselect,

    /**
     * Toggle the selection of a date.
     */
    toggle,

    /**
     * Select a range of dates (inclusive).
     */
    selectRange,

    /**
     * Deselect a range of dates (inclusive).
     */
    deselectRange,

    /**
     * A matrix of days based on the current viewing date.
     */
    calendar,
  };
};
