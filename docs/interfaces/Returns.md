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

• **calendar**: `Date`[][][]

A matrix of days based on the current viewing date.

#### Defined in

[use-lilius.ts:184](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L184)

___

### selected

• **selected**: `Date`[]

The dates currently selected.

#### Defined in

[use-lilius.ts:139](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L139)

___

### setSelected

• **setSelected**: `Dispatch`<`SetStateAction`<`Date`[]\>\>

Override the currently selected dates.

#### Defined in

[use-lilius.ts:144](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L144)

___

### setViewing

• **setViewing**: `Dispatch`<`SetStateAction`<`Date`\>\>

Set the date represented in the calendar matrix. Note that
the month and year are the only parts used.

#### Defined in

[use-lilius.ts:99](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L99)

___

### viewing

• **viewing**: `Date`

The date represented in the calendar matrix. Note that
the month and year are the only parts used.

#### Defined in

[use-lilius.ts:93](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L93)

## Methods

### clearSelected

▸ **clearSelected**(): `void`

Reset the selected dates to [].

#### Returns

`void`

#### Defined in

[use-lilius.ts:149](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L149)

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

[use-lilius.ts:82](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L82)

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

[use-lilius.ts:164](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L164)

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

[use-lilius.ts:179](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L179)

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

[use-lilius.ts:87](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L87)

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

[use-lilius.ts:154](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L154)

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

[use-lilius.ts:159](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L159)

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

[use-lilius.ts:174](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L174)

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

[use-lilius.ts:169](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L169)

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

[use-lilius.ts:109](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L109)

___

### viewNextMonth

▸ **viewNextMonth**(): `void`

Set the viewing date to the month after the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:119](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L119)

___

### viewNextYear

▸ **viewNextYear**(): `void`

Set the viewing date to the year after the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:134](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L134)

___

### viewPreviousMonth

▸ **viewPreviousMonth**(): `void`

Set the viewing date to the month before the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:114](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L114)

___

### viewPreviousYear

▸ **viewPreviousYear**(): `void`

Set the viewing date to the year before the current.

#### Returns

`void`

#### Defined in

[use-lilius.ts:129](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L129)

___

### viewToday

▸ **viewToday**(): `void`

Set the viewing date to today.

#### Returns

`void`

#### Defined in

[use-lilius.ts:104](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L104)

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

[use-lilius.ts:124](https://github.com/its-danny/use-lilius/blob/c622a6d/src/use-lilius.ts#L124)
