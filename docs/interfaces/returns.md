[use-lilius](../README.md) / Returns

# Interface: Returns

## Table of contents

### Properties

- [calendar](returns.md#calendar)
- [clearSelected](returns.md#clearselected)
- [clearTime](returns.md#cleartime)
- [deselect](returns.md#deselect)
- [deselectRange](returns.md#deselectrange)
- [inRange](returns.md#inrange)
- [isSelected](returns.md#isselected)
- [select](returns.md#select)
- [selectRange](returns.md#selectrange)
- [selected](returns.md#selected)
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

### calendar

• **calendar**: Date[][]

A matrix of days based on the current viewing date.

Defined in: [use-lilius.ts:176](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L176)

___

### clearSelected

• **clearSelected**: () => *void*

Reset the selected dates to [].

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:141](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L141)

Defined in: [use-lilius.ts:141](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L141)

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

Defined in: [use-lilius.ts:74](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L74)

Defined in: [use-lilius.ts:74](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L74)

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

Defined in: [use-lilius.ts:156](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L156)

Defined in: [use-lilius.ts:156](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L156)

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

Defined in: [use-lilius.ts:171](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L171)

Defined in: [use-lilius.ts:171](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L171)

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

Defined in: [use-lilius.ts:79](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L79)

Defined in: [use-lilius.ts:79](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L79)

___

### isSelected

• **isSelected**: (`date`: Date) => *boolean*

Determine whether or not a date has been selected.

#### Type declaration:

▸ (`date`: Date): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** *boolean*

Defined in: [use-lilius.ts:146](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L146)

Defined in: [use-lilius.ts:146](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L146)

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

Defined in: [use-lilius.ts:151](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L151)

Defined in: [use-lilius.ts:151](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L151)

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

Defined in: [use-lilius.ts:166](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L166)

Defined in: [use-lilius.ts:166](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L166)

___

### selected

• **selected**: Date[]

The dates currently selected.

Defined in: [use-lilius.ts:131](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L131)

___

### setSelected

• **setSelected**: *Dispatch*<SetStateAction<Date[]\>\>

Override the currently selected dates.

Defined in: [use-lilius.ts:136](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L136)

___

### setViewing

• **setViewing**: *Dispatch*<SetStateAction<Date\>\>

Set the date represented in the calendar matrix. Note that
the month and year are the only parts used.

Defined in: [use-lilius.ts:91](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L91)

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

Defined in: [use-lilius.ts:161](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L161)

Defined in: [use-lilius.ts:161](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L161)

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

Defined in: [use-lilius.ts:101](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L101)

Defined in: [use-lilius.ts:101](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L101)

___

### viewNextMonth

• **viewNextMonth**: () => *void*

Set the viewing date to the month after the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:111](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L111)

Defined in: [use-lilius.ts:111](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L111)

___

### viewNextYear

• **viewNextYear**: () => *void*

Set the viewing date to the year after the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:126](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L126)

Defined in: [use-lilius.ts:126](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L126)

___

### viewPreviousMonth

• **viewPreviousMonth**: () => *void*

Set the viewing date to the month before the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:106](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L106)

Defined in: [use-lilius.ts:106](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L106)

___

### viewPreviousYear

• **viewPreviousYear**: () => *void*

Set the viewing date to the year before the current.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:121](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L121)

Defined in: [use-lilius.ts:121](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L121)

___

### viewToday

• **viewToday**: () => *void*

Set the viewing date to today.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [use-lilius.ts:96](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L96)

Defined in: [use-lilius.ts:96](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L96)

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

Defined in: [use-lilius.ts:116](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L116)

Defined in: [use-lilius.ts:116](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L116)

___

### viewing

• **viewing**: Date

The date represented in the calendar matrix. Note that
the month and year are the only parts used.

Defined in: [use-lilius.ts:85](https://github.com/its-danny/use-lilius/blob/8e16338/src/use-lilius.ts#L85)
