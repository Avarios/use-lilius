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
  startOfToday,
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
   * What day a week starts on within the calendar matrix.
   *
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

export interface Returns {
  /**
   * Returns a copy of the given date with the time set to 00:00:00:00.
   */
  clearTime: (date: Date) => Date;

  /**
   * Returns whether or not a date is between 2 other dates (inclusive).
   */
  inRange: (date: Date, min: Date, max: Date) => boolean;

  /**
   * The date represented in the calendar matrix. Note that
   * the month and year are the only parts used.
   */
  viewing: Date;

  /**
   * Set the date represented in the calendar matrix. Note that
   * the month and year are the only parts used.
   */
  setViewing: React.Dispatch<React.SetStateAction<Date>>;

  /**
   * Set the viewing date to today.
   */
  viewToday: () => void;

  /**
   * Set the viewing date to the given month.
   */
  viewMonth: (month: Month) => void;

  /**
   * Set the viewing date to the month before the current.
   */
  viewPreviousMonth: () => void;

  /**
   * Set the viewing date to the month after the current.
   */
  viewNextMonth: () => void;

  /**
   * Set the viewing date to the given year.
   */
  viewYear: (year: number) => void;

  /**
   * Set the viewing date to the year before the current.
   */
  viewPreviousYear: () => void;

  /**
   * Set the viewing date to the year after the current.
   */
  viewNextYear: () => void;

  /**
   * The dates currently selected.
   */
  selected: Date[];

  /**
   * Override the currently selected dates.
   */
  setSelected: React.Dispatch<React.SetStateAction<Date[]>>;

  /**
   * Reset the selected dates to [].
   */
  clearSelected: () => void;

  /**
   * Determine whether or not a date has been selected.
   */
  isSelected: (date: Date) => boolean;

  /**
   * Select one or more dates.
   */
  select: (date: Date | Date[], replaceExisting?: boolean) => void;

  /**
   * Deselect one or more dates.
   */
  deselect: (date: Date | Date[]) => void;

  /**
   * Toggle the selection of a date.
   */
  toggle: (date: Date, replaceExisting?: boolean) => void;

  /**
   * Select a range of dates (inclusive).
   */
  selectRange: (start: Date, end: Date, replaceExisting?: boolean) => void;

  /**
   * Deselect a range of dates (inclusive).
   */
  deselectRange: (start: Date, end: Date) => void;

  /**
   * A matrix of days based on the current viewing date.
   */
  calendar: Date[][];
}

export const useLilius = ({
  weekStartsOn = Day.SUNDAY,
  viewing: initialViewing = new Date(),
  selected: initialSelected = [],
}: Options = {}): Returns => {
  const clearTime = (date: Date) => set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

  const inRange = (date: Date, min: Date, max: Date) =>
    (isEqual(date, min) || isAfter(date, min)) && (isEqual(date, max) || isBefore(date, max));

  const [viewing, setViewing] = useState<Date>(initialViewing);

  const viewToday = () => setViewing(startOfToday());

  const viewMonth = (month: Month) => setViewing(setMonth(viewing, month));

  const viewPreviousMonth = () => setViewing(subMonths(viewing, 1));

  const viewNextMonth = () => setViewing(addMonths(viewing, 1));

  const viewYear = (year: number) => setViewing(setYear(viewing, year));

  const viewPreviousYear = () => setViewing(subYears(viewing, 1));

  const viewNextYear = () => setViewing(addYears(viewing, 1));

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

  const [calendar, setCalendar] = useState<Date[][]>([]);

  useEffect(() => {
    const matrix = eachWeekOfInterval(
      { start: startOfMonth(viewing), end: endOfMonth(viewing) },
      { weekStartsOn },
    ).map((week) => eachDayOfInterval({ start: startOfWeek(week), end: endOfWeek(week) }));

    setCalendar(matrix);
  }, [viewing]);

  return {
    clearTime,
    inRange,
    viewing,
    setViewing,
    viewToday,
    viewMonth,
    viewPreviousMonth,
    viewNextMonth,
    viewYear,
    viewPreviousYear,
    viewNextYear,
    selected,
    setSelected,
    clearSelected,
    isSelected,
    select,
    deselect,
    toggle,
    selectRange,
    deselectRange,
    calendar,
  };
};
