[use-lilius](../README.md) / Returns

# Interface: Returns

## Table of contents

### Properties

- [calendar](Returns.md#calendar)
- [selected](Returns.md#selected)
- [setSelected](Returns.md#setselected)
- [setViewing](Returns.md#setviewing)
- [viewing](Returns.md#viewing)

### Methods

- [clearSelected](Returns.md#clearselected)
- [clearTime](Returns.md#cleartime)
- [deselect](Returns.md#deselect)
- [deselectRange](Returns.md#deselectrange)
- [inRange](Returns.md#inrange)
- [isSelected](Returns.md#isselected)
- [select](Returns.md#select)
- [selectRange](Returns.md#selectrange)
- [toggle](Returns.md#toggle)
- [viewMonth](Returns.md#viewmonth)
- [viewNextMonth](Returns.md#viewnextmonth)
- [viewNextYear](Returns.md#viewnextyear)
- [viewPreviousMonth](Returns.md#viewpreviousmonth)
- [viewPreviousYear](Returns.md#viewpreviousyear)
- [viewToday](Returns.md#viewtoday)
- [viewYear](Returns.md#viewyear)

## Properties

### calendar

• **calendar**: `Date`[][]

A matrix of days based on the current viewing date.

#### Defined in

[use-lilius.ts:176](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L176)

___

### selected

• **selected**: `Date`[]

The dates currently selected.

#### Defined in

[use-lilius.ts:131](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L131)

___

### setSelected

• **setSelected**: `Dispatch`<`SetStateAction`<`Date`[]\>\>

Override the currently selected dates.

#### Defined in

[use-lilius.ts:136](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L136)

___

### setViewing

• **setViewing**: `Dispatch`<`SetStateAction`<`Date`\>\>

Set the date represented in the calendar matrix. Note that
the month and year are the only parts used.

#### Defined in

[use-lilius.ts:91](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L91)

___

### viewing

• **viewing**: `Date`

The date represented in the calendar matrix. Note that
the month and year are the only parts used.

#### Defined in

[use-lilius.ts:85](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L85)

## Methods

### clearSelected

▸ **clearSelected**(): `void`

Reset the selected dates to [].

#### Returns

`void`

#### Defined in

[use-lilius.ts:141](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L141)

___

### clearTime

▸ **clearTime**(`date`): `Date`

Returns a copy of the given date with the time set to 00:00:00:00.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Date`

#### Defined in

[use-lilius.ts:74](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L74)

___

### deselect

▸ **deselect**(`date`): `void`

Deselect one or more dates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` \| `Date`[] |

#### Returns

`void`

#### Defined in

[use-lilius.ts:156](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L156)

___

### deselectRange

▸ **deselectRange**(`start`, `end`): `void`

Deselect a range of dates (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `Date` |
| `end` | `Date` |

#### Returns

`void`

#### Defined in

[use-lilius.ts:171](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L171)

___

### inRange

▸ **inRange**(`date`, `min`, `max`): `boolean`

Returns whether or not a date is between 2 other dates (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `min` | `Date` |
| `max` | `Date` |

#### Returns

`boolean`

#### Defined in

[use-lilius.ts:79](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L79)

___

### isSelected

▸ **isSelected**(`date`): `boolean`

Determine whether or not a date has been selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[use-lilius.ts:146](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L146)

___

### select

▸ **select**(`date`, `replaceExisting?`): `void`

Select one or more dates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` \| `Date`[] |
| `replaceExisting?` | `boolean` |

#### Returns

`void`

#### Defined in

[use-lilius.ts:151](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L151)

___

### selectRange

▸ **selectRange**(`start`, `end`, `replaceExisting?`): `void`

Select a range of dates (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `Date` |
| `end` | `Date` |
| `replaceExisting?` | `boolean` |

#### Returns

`void`

#### Defined in

[use-lilius.ts:166](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L166)

___

### toggle

▸ **toggle**(`date`, `replaceExisting?`): `void`

Toggle the selection of a date.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `replaceExisting?` | `boolean` |

#### Returns

`void`

#### Defined in

[use-lilius.ts:161](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L161)

___

### viewMonth

▸ **viewMonth**(`month`): `void`

Set the viewing date to the given month.

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | [`Month`](../enums/Month.md) |

#### Returns

`void`

#### Defined in

[use-lilius.ts:101](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L101)

___

### viewNextMonth

▸ **viewNextMonth**(): `void`

Set the viewing date to the month after the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:111](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L111)

___

### viewNextYear

▸ **viewNextYear**(): `void`

Set the viewing date to the year after the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:126](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L126)

___

### viewPreviousMonth

▸ **viewPreviousMonth**(): `void`

Set the viewing date to the month before the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:106](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L106)

___

### viewPreviousYear

▸ **viewPreviousYear**(): `void`

Set the viewing date to the year before the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:121](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L121)

___

### viewToday

▸ **viewToday**(): `void`

Set the viewing date to today.

#### Returns

`void`

#### Defined in

[use-lilius.ts:96](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L96)

___

### viewYear

▸ **viewYear**(`year`): `void`

Set the viewing date to the given year.

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`void`

#### Defined in

[use-lilius.ts:116](https://github.com/its-danny/use-lilius/blob/dd11a85/src/use-lilius.ts#L116)
