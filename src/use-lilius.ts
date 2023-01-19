import {
  addMonths,
  addSeconds,
  addYears,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  set,
  setMonth,
  setYear,
  startOfMonth,
  startOfToday,
  startOfWeek,
  subMinutes,
  subMonths,
  subYears,
} from "date-fns";
import { useCallback, useMemo, useState } from "react";

export type Schedule = { id: number; start: Date; end: Date };

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

  /**
   * The number of months in the calendar.
   *
   * @default 1
   */
  numberOfMonths?: number;

  /**
   * the minimal intervall selected.
   *
   * @default 1
   */
  numberOfIntervall?: number;
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
   * Determine wheter a valid range has been selected.
   */
  israngeSelected: () => boolean;

  /**
   * Determine wheter a date is on the beginning of a range.
   */
  isStart: (date: Date) => boolean;

  /**
   * Determine wheter a date is on the end of a range.
   */
  isEnd: (date: Date) => boolean;

  /**
   * Determine if the start and the end of a range fall on the same day.
   */
  isOriginDay: () => boolean;

  /**
   * Determine if a date is at a pole of a range.
   */
  isAtPole: (date: Date) => boolean;

  /**
   * Determine wheter a date at the beginning is at the floor of a range.
   */
  isFloorBoundStart: (date: Date) => boolean;

  /**
   * Determine wheter a date at the beginning is at the ceil of a range.
   */
  isCeilBoundStart: (date: Date) => boolean;

  /**
   * Determine wheter a date at the end is at the floor of a range.
   */
  isFloorBoundEnd: (date: Date) => boolean;

  /**
   * Determine wheter a date at the end is at the ceil of a range.
   */
  isCeilBoundEnd: (date: Date) => boolean;

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
   * An array of scheduled events
   */
  schedule: Schedule[];

  setSchedule: React.Dispatch<React.SetStateAction<Schedule[]>>;

  /**
   * Determine the earliest date the schedule holds.
   */
  minSchedule: (date: Date) => boolean;

  /**
   * Determine the latest date the schedule holds.
   */
  maxSchedule: (date: Date) => boolean;

  /**
   * A matrix of days based on the current viewing date.
   */
  calendar: [Date, Map<Date, Schedule[]>?][][];
}

const inRange = (date: Date, min: Date, max: Date) =>
  (isEqual(date, min) || isAfter(date, min)) && (isEqual(date, max) || isBefore(date, max));

const clearTime = (date: Date) => set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

const setEndOfDayIntervall = (date: Date, numberOfIntervall: number) =>
  addSeconds(subMinutes(endOfDay(date), numberOfIntervall), 1);

const eachdayofIntervall = (start: Date, end: Date, numberOfIntervall: number) => {
  if (start === end) {
    const endDay = setEndOfDayIntervall(end, numberOfIntervall);
    return [start, endDay];
  }

  if (start < end) {
    const eachDay = eachDayOfInterval({ start, end });
    const endDay = setEndOfDayIntervall(end, numberOfIntervall);
    eachDay.splice(eachDay.length - 1, 1, endDay);
    return eachDay;
  }

  const eachDay = eachDayOfInterval({ start: end, end: start }).reverse();
  const endDay = setEndOfDayIntervall(end, numberOfIntervall);
  eachDay.splice(eachDay.length - 1, 1, endDay);
  return eachDay;
};

export const useLilius = ({
  weekStartsOn = Day.SUNDAY,
  viewing: initialViewing = new Date(),
  selected: initialSelected = [],
  numberOfMonths = 1,
  numberOfIntervall = 1,
}: Options = {}): Returns => {
  const [viewing, setViewing] = useState<Date>(initialViewing);

  const [schedule, setSchedule] = useState<Schedule[]>([]);

  const viewToday = useCallback(() => setViewing(startOfToday()), [setViewing]);

  const viewMonth = useCallback((month: Month) => setViewing((v) => setMonth(v, month)), []);

  const viewPreviousMonth = useCallback(() => setViewing((v) => subMonths(v, 1)), []);

  const viewNextMonth = useCallback(() => setViewing((v) => addMonths(v, 1)), []);

  const viewYear = useCallback((year: number) => setViewing((v) => setYear(v, year)), []);

  const viewPreviousYear = useCallback(() => setViewing((v) => subYears(v, 1)), []);

  const viewNextYear = useCallback(() => setViewing((v) => addYears(v, 1)), []);

  const [selected, setSelected] = useState<Date[]>(initialSelected.map(clearTime));

  const clearSelected = () => setSelected([]);

  const isSelected = useCallback((date: Date) => selected.findIndex((s) => isEqual(s, date)) > -1, [selected]);

  const israngeSelected = () => selected.length > 1;

  const isStart = (date: Date) => isSameDay(date, selected[0]);

  const isEnd = (date: Date) => isSameDay(date, selected[selected.length - 1]);

  const isOriginDay = () => selected.length > 1 && isSameDay(selected[0], selected[selected.length - 1]);

  const isAtPole = (date: Date) => isSameDay(date, selected[0]) || isSameDay(date, selected[selected.length - 1]);

  const isFloorBoundStart = (date: Date) => isStart(date) && selected[0] > selected[selected.length - 1];

  const isCeilBoundStart = (date: Date) => isStart(date) && selected[0] < selected[selected.length - 1];

  const isFloorBoundEnd = (date: Date) => isEnd(date) && selected[0] < selected[selected.length - 1];

  const isCeilBoundEnd = (date: Date) => isEnd(date) && selected[0] > selected[selected.length - 1];

  const select = useCallback((date: Date | Date[], replaceExisting?: boolean) => {
    if (replaceExisting) {
      setSelected(Array.isArray(date) ? date : [date]);
    } else {
      setSelected((selectedItems) => selectedItems.concat(Array.isArray(date) ? date : [date]));
    }
  }, []);

  const deselect = useCallback(
    (date: Date | Date[]) =>
      setSelected((selectedItems) =>
        Array.isArray(date)
          ? selectedItems.filter((s) => !date.map((d) => d.getTime()).includes(s.getTime()))
          : selectedItems.filter((s) => !isEqual(s, date)),
      ),
    [],
  );

  const toggle = useCallback(
    (date: Date, replaceExisting?: boolean) => (isSelected(date) ? deselect(date) : select(date, replaceExisting)),
    [deselect, isSelected, select],
  );

  const selectRange = useCallback(
    (start: Date, end: Date, replaceExisting?: boolean) => {
      if (replaceExisting) {
        setSelected(eachdayofIntervall(start, end, numberOfIntervall));
      } else {
        if (start < end) {
          setSelected((selectedItems) => selectedItems.concat(eachDayOfInterval({ start, end })));
          return;
        }
        setSelected((selectedItems) => selectedItems.concat(eachDayOfInterval({ end, start })));
      }
    },
    [numberOfIntervall],
  );

  const deselectRange = useCallback((start: Date, end: Date) => {
    setSelected((selectedItems) =>
      selectedItems.filter(
        (s) =>
          !eachDayOfInterval({ start, end })
            .map((d) => d.getTime())
            .includes(s.getTime()),
      ),
    );
  }, []);

  const minSchedule = (date: Date) => schedule.length > 0 && schedule[0].start <= date;

  const maxSchedule = (date: Date) => schedule.length > 0 && schedule[schedule.length - 1].end >= date;

  const isOnSameDay = (start: Date, end: Date, date: Date) => {
    const startofDay = date;
    const endofDay = endOfDay(date);

    return (startofDay < start || isEqual(startofDay, start)) && (endofDay > end || isEqual(endofDay, end));
  };

  const isAfterStartAndBeforeEndPolar = (start: Date, end: Date, date: Date) => {
    const startofDay = date;
    const endofDay = endOfDay(date);
    return (startofDay < start || isEqual(startofDay, start)) && endofDay < end && endofDay > start;
  };

  const isBeforeEndAndAfterStartPolar = (start: Date, end: Date, date: Date) => {
    const startofDay = date;
    const endofDay = endOfDay(date);
    return startofDay > start && startofDay < end && (endofDay > end || isEqual(endofDay, end));
  };

  const isAfterStartBeforeEndInbetween = (start: Date, end: Date, date: Date) => {
    const startofDay = date;
    const endofDay = endOfDay(date);
    return startofDay > start && endofDay < end && endofDay > start && startofDay < end;
  };

  const calendar = useMemo<[Date, Map<Date, Schedule[]>?][][]>(
    () =>
      eachMonthOfInterval({
        start: startOfMonth(viewing),
        end: endOfMonth(addMonths(viewing, numberOfMonths - 1)),
      }).map((month) =>
        eachWeekOfInterval(
          {
            start: startOfMonth(month),
            end: endOfMonth(month),
          },
          { weekStartsOn },
        ).map((week) => {
          const map = new Map<Date, Schedule[]>();
          const dayInWeekArray = eachDayOfInterval({
            start: startOfWeek(week, { weekStartsOn }),
            end: endOfWeek(week, { weekStartsOn }),
          });

          for (let i = 0; i < dayInWeekArray.length; i += 1) {
            const day = dayInWeekArray[i];

            const scheduleArray = schedule.filter(
              (event) =>
                isOnSameDay(event.start, event.end, day) ||
                isAfterStartAndBeforeEndPolar(event.start, event.end, day) ||
                isBeforeEndAndAfterStartPolar(event.start, event.end, day) ||
                isAfterStartBeforeEndInbetween(event.start, event.end, day),
            );

            map.set(day, scheduleArray);
          }

          const tuple: [Date, Map<Date, Schedule[]>] = [week, map];
          return tuple;
        }),
      ),
    [viewing, weekStartsOn, numberOfMonths, schedule],
  );

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
    isAtPole,
    isSelected,
    israngeSelected,
    isStart,
    isEnd,
    isOriginDay,
    isFloorBoundStart,
    isCeilBoundStart,
    isFloorBoundEnd,
    isCeilBoundEnd,
    select,
    deselect,
    toggle,
    selectRange,
    deselectRange,
    schedule,
    setSchedule,
    minSchedule,
    maxSchedule,
    calendar,
  };
};
