[use-lilius](../README.md) / Options

# Interface: Options<EventMetaData\>

## Type parameters

Name | Default |
:------ | :------ |
`EventMetaData` | { [key: string]: *any*;  } |

## Table of contents

### Properties

- [events](options.md#events)
- [selected](options.md#selected)
- [viewing](options.md#viewing)
- [weekStartsOn](options.md#weekstartson)

## Properties

### events

• `Optional` **events**: [*Event*](event.md)<EventMetaData\>[]

The initial event(s) selection.

**`default`** []

Defined in: [use-lilius.ts:80](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L80)

___

### selected

• `Optional` **selected**: Date[]

The initial date(s) selection.

**`default`** []

Defined in: [use-lilius.ts:73](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L73)

___

### viewing

• `Optional` **viewing**: Date

The initial viewing date.

**`default`** new Date()

Defined in: [use-lilius.ts:66](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L66)

___

### weekStartsOn

• `Optional` **weekStartsOn**: [*Day*](../enums/day.md)

What day a week starts on within the calendar matrix.

**`default`** Day.SUNDAY

Defined in: [use-lilius.ts:59](https://github.com/dannytatom/use-lilius/blob/4427247/src/use-lilius.ts#L59)
