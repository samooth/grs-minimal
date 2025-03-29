[grs-minimal](../README.md) / Header

# Class: Header

## Table of contents

### Constructors

- [constructor](Header.md#constructor)

### Properties

- [bits](Header.md#bits)
- [buffer](Header.md#buffer)
- [hash](Header.md#hash)
- [merkleRoot](Header.md#merkleroot)
- [nonce](Header.md#nonce)
- [prevHash](Header.md#prevhash)
- [time](Header.md#time)
- [version](Header.md#version)

### Methods

- [getHash](Header.md#gethash)
- [toBuffer](Header.md#tobuffer)
- [toHex](Header.md#tohex)
- [fromBuffer](Header.md#frombuffer)
- [fromBufferReader](Header.md#frombufferreader)
- [fromHex](Header.md#fromhex)

## Constructors

### constructor

• **new Header**(`br`): [`Header`](Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `br` | [`BufferReader`](utils.BufferReader.md) \| [`BufferChunksReader`](utils.BufferChunksReader.md) |

#### Returns

[`Header`](Header.md)

#### Defined in

[header.ts:14](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L14)

## Properties

### bits

• **bits**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:9](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L9)

___

### buffer

• **buffer**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:11](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L11)

___

### hash

• `Optional` **hash**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:12](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L12)

___

### merkleRoot

• **merkleRoot**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:7](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L7)

___

### nonce

• **nonce**: `number`

#### Defined in

[header.ts:10](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L10)

___

### prevHash

• **prevHash**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:6](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L6)

___

### time

• **time**: `number`

#### Defined in

[header.ts:8](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L8)

___

### version

• **version**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:5](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L5)

## Methods

### getHash

▸ **getHash**(): `Buffer`\<`ArrayBufferLike`\>

#### Returns

`Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:48](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L48)

▸ **getHash**\<`T`\>(`hexStr`): `T` extends ``true`` ? `string` : `Buffer`\<`ArrayBufferLike`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexStr` | `T` |

#### Returns

`T` extends ``true`` ? `string` : `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:49](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L49)

___

### toBuffer

▸ **toBuffer**(): `Buffer`\<`ArrayBufferLike`\>

#### Returns

`Buffer`\<`ArrayBufferLike`\>

#### Defined in

[header.ts:40](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L40)

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

[header.ts:44](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L44)

___

### fromBuffer

▸ **fromBuffer**(`buf`): [`Header`](Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer`\<`ArrayBufferLike`\> |

#### Returns

[`Header`](Header.md)

#### Defined in

[header.ts:25](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L25)

___

### fromBufferReader

▸ **fromBufferReader**(`br`): [`Header`](Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `br` | [`BufferReader`](utils.BufferReader.md) \| [`BufferChunksReader`](utils.BufferChunksReader.md) |

#### Returns

[`Header`](Header.md)

#### Defined in

[header.ts:30](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L30)

___

### fromHex

▸ **fromHex**(`hex`): [`Header`](Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Header`](Header.md)

#### Defined in

[header.ts:35](https://github.com/samooth/grs-minimal/blob/master/src/header.ts#L35)
