[use-lilius](../README.md) / Returns

# Interface: Returns<EventMetaData\>

## Type parameters

Name | Default |
:------ | :------ |
`EventMetaData` | { [key: string]: *any*;  } |

## Table of contents

### Properties

- [addEvent](returns.md#addevent)
- [calendar](returns.md#calendar)
- [clearEvents](returns.md#clearevents)
- [clearSelected](returns.md#clearselected)
- [clearTime](returns.md#cleartime)
- [deselect](returns.md#deselect)
- [deselectRange](returns.md#deselectrange)
- [events](returns.md#events)
- [eventsFor](returns.md#eventsfor)
- [hasEvents](returns.md#hasevents)
- [inRange](returns.md#inrange)
- [isSelected](returns.md#isselected)
- [removeEvent](returns.md#removeevent)
- [select](returns.md#select)
- [selectRange](returns.md#selectrange)
- [selected](returns.md#selected)
- [setEvents](returns.md#setevents)
- [setSelected](returns.md#setselected)
- [setViewing](returns.md#setviewing)
- [toggle](returns.md#toggle)
- [viewMonth](returns.md#viewmonth)
- [viewNextMonth](returns.md#viewnextmonth)
- [viewNextYear](returns.md#viewnextyear)
- [viewPreviousMonth](returns.md#viewpreviousmonth)
- [viewPreviousYear](returns.md#viewpreviousyear)
- [viewToday](returns.md#viewtoday)
- [viewYear](returns.md#viewyear)
- [viewing](returns.md#viewing)

## Properties

### addEvent

• **addEvent**: (`event`: [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[]) => *void*

Add one or more events.

#### Type declaration:

▸ (`event`: [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[] |

**Returns:** *void*

Defined in: [use-lilius.ts:209](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L209)

Defined in: [use-lilius.ts:209](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L209)

___

### calendar

• **calendar**: Date[][]

A matrix of days based on the current viewing date.

Defined in: [use-lilius.ts:224](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L224)

___

### clearEvents

• **clearEvents**: () => *void*

Reset events to [].

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:199](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L199)

Defined in: [use-lilius.ts:199](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L199)

___

### clearSelected

• **clearSelected**: () => *void*

Reset the selected dates to [].

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:154](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L154)

Defined in: [use-lilius.ts:154](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L154)

___

### clearTime

• **clearTime**: (`date`: Date) => Date

Returns a copy of the given date with the time set to 00:00:00:00.

#### Type declaration:

▸ (`date`: Date): Date

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** Date

Defined in: [use-lilius.ts:87](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L87)

Defined in: [use-lilius.ts:87](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L87)

___

### deselect

• **deselect**: (`date`: Date \| Date[]) => *void*

Deselect one or more dates.

#### Type declaration:

▸ (`date`: Date \| Date[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date \| Date[] |

**Returns:** *void*

Defined in: [use-lilius.ts:169](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L169)

Defined in: [use-lilius.ts:169](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L169)

___

### deselectRange

• **deselectRange**: (`start`: Date, `end`: Date) => *void*

Deselect a range of dates (inclusive).

#### Type declaration:

▸ (`start`: Date, `end`: Date): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`start` | Date |
`end` | Date |

**Returns:** *void*

Defined in: [use-lilius.ts:184](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L184)

Defined in: [use-lilius.ts:184](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L184)

___

### events

• **events**: [*Event*](event.md)<EventMetaData\>[]

The current events.

Defined in: [use-lilius.ts:189](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L189)

___

### eventsFor

• **eventsFor**: (`date`: Date) => [*Event*](event.md)<EventMetaData\>[]

Return events for the given date.

#### Type declaration:

▸ (`date`: Date): [*Event*](event.md)<EventMetaData\>[]

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** [*Event*](event.md)<EventMetaData\>[]

Defined in: [use-lilius.ts:219](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L219)

Defined in: [use-lilius.ts:219](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L219)

___

### hasEvents

• **hasEvents**: (`date`: Date) => *boolean*

Return whether or not a date has events.

#### Type declaration:

▸ (`date`: Date): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** *boolean*

Defined in: [use-lilius.ts:204](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L204)

Defined in: [use-lilius.ts:204](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L204)

___

### inRange

• **inRange**: (`date`: Date, `min`: Date, `max`: Date) => *boolean*

Returns whether or not a date is between 2 other dates (inclusive).

#### Type declaration:

▸ (`date`: Date, `min`: Date, `max`: Date): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |
`min` | Date |
`max` | Date |

**Returns:** *boolean*

Defined in: [use-lilius.ts:92](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L92)

Defined in: [use-lilius.ts:92](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L92)

___

### isSelected

• **isSelected**: (`date`: Date) => *boolean*

Return whether or not a date has been selected.

#### Type declaration:

▸ (`date`: Date): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** *boolean*

Defined in: [use-lilius.ts:159](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L159)

Defined in: [use-lilius.ts:159](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L159)

___

### removeEvent

• **removeEvent**: (`event`: [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[]) => *void*

Remove one or more events.

#### Type declaration:

▸ (`event`: [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*Event*](event.md)<EventMetaData\> \| [*Event*](event.md)<EventMetaData\>[] |

**Returns:** *void*

Defined in: [use-lilius.ts:214](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L214)

Defined in: [use-lilius.ts:214](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L214)

___

### select

• **select**: (`date`: Date \| Date[], `replaceExisting?`: *boolean*) => *void*

Select one or more dates.

#### Type declaration:

▸ (`date`: Date \| Date[], `replaceExisting?`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date \| Date[] |
`replaceExisting?` | *boolean* |

**Returns:** *void*

Defined in: [use-lilius.ts:164](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L164)

Defined in: [use-lilius.ts:164](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L164)

___

### selectRange

• **selectRange**: (`start`: Date, `end`: Date, `replaceExisting?`: *boolean*) => *void*

Select a range of dates (inclusive).

#### Type declaration:

▸ (`start`: Date, `end`: Date, `replaceExisting?`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`start` | Date |
`end` | Date |
`replaceExisting?` | *boolean* |

**Returns:** *void*

Defined in: [use-lilius.ts:179](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L179)

Defined in: [use-lilius.ts:179](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L179)

___

### selected

• **selected**: Date[]

The dates currently selected.

Defined in: [use-lilius.ts:144](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L144)

___

### setEvents

• **setEvents**: *Dispatch*<SetStateAction<[*Event*](event.md)<EventMetaData\>[]\>\>

Override the current events.

Defined in: [use-lilius.ts:194](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L194)

___

### setSelected

• **setSelected**: *Dispatch*<SetStateAction<Date[]\>\>

Override the currently selected dates.

Defined in: [use-lilius.ts:149](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L149)

___

### setViewing

• **setViewing**: *Dispatch*<SetStateAction<Date\>\>

Set the date represented in the calendar matrix. Note that
the month and year are the only parts used.

Defined in: [use-lilius.ts:104](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L104)

___

### toggle

• **toggle**: (`date`: Date, `replaceExisting?`: *boolean*) => *void*

Toggle the selection of a date.

#### Type declaration:

▸ (`date`: Date, `replaceExisting?`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |
`replaceExisting?` | *boolean* |

**Returns:** *void*

Defined in: [use-lilius.ts:174](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L174)

Defined in: [use-lilius.ts:174](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L174)

___

### viewMonth

• **viewMonth**: (`month`: [*Month*](../enums/month.md)) => *void*

Set the viewing date to the given month.

#### Type declaration:

▸ (`month`: [*Month*](../enums/month.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`month` | [*Month*](../enums/month.md) |

**Returns:** *void*

Defined in: [use-lilius.ts:114](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L114)

Defined in: [use-lilius.ts:114](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L114)

___

### viewNextMonth

• **viewNextMonth**: () => *void*

Set the viewing date to the month after the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:124](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L124)

Defined in: [use-lilius.ts:124](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L124)

___

### viewNextYear

• **viewNextYear**: () => *void*

Set the viewing date to the year after the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:139](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L139)

Defined in: [use-lilius.ts:139](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L139)

___

### viewPreviousMonth

• **viewPreviousMonth**: () => *void*

Set the viewing date to the month before the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:119](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L119)

Defined in: [use-lilius.ts:119](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L119)

___

### viewPreviousYear

• **viewPreviousYear**: () => *void*

Set the viewing date to the year before the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:134](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L134)

Defined in: [use-lilius.ts:134](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L134)

___

### viewToday

• **viewToday**: () => *void*

Set the viewing date to today.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:109](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L109)

Defined in: [use-lilius.ts:109](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L109)

___

### viewYear

• **viewYear**: (`year`: *number*) => *void*

Set the viewing date to the given year.

#### Type declaration:

▸ (`year`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`year` | *number* |

**Returns:** *void*

Defined in: [use-lilius.ts:129](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L129)

Defined in: [use-lilius.ts:129](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L129)

___

### viewing

• **viewing**: Date

The date represented in the calendar matrix. Note that
the month and year are the only parts used.

Defined in: [use-lilius.ts:98](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L98)
