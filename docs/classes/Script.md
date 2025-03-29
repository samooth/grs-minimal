[grs-minimal](../README.md) / Script

# Class: Script

## Table of contents

### Constructors

- [constructor](Script.md#constructor)

### Properties

- [buffer](Script.md#buffer)
- [chunks](Script.md#chunks)

### Methods

- [getBitcoms](Script.md#getbitcoms)
- [getOpReturn](Script.md#getopreturn)
- [parseBitcoms](Script.md#parsebitcoms)
- [toAddress](Script.md#toaddress)
- [toAddressBuf](Script.md#toaddressbuf)
- [toBuffer](Script.md#tobuffer)
- [toHex](Script.md#tohex)
- [fromBuffer](Script.md#frombuffer)
- [fromBufferReader](Script.md#frombufferreader)
- [fromHex](Script.md#fromhex)

## Constructors

### constructor

• **new Script**(`br`, `chunks`): [`Script`](Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `br` | [`BufferReader`](utils.BufferReader.md) |
| `chunks` | [`ScriptChunk`](../interfaces/ScriptChunk.md)[] |

#### Returns

[`Script`](Script.md)

#### Defined in

[script.ts:41](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L41)

## Properties

### buffer

• **buffer**: `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[script.ts:39](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L39)

___

### chunks

• **chunks**: [`ScriptChunk`](../interfaces/ScriptChunk.md)[]

#### Defined in

[script.ts:38](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L38)

## Methods

### getBitcoms

▸ **getBitcoms**(`options?`): `Set`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ScriptGetBitcoms`](../interfaces/ScriptGetBitcoms.md) |

#### Returns

`Set`\<`string`\>

#### Defined in

[script.ts:183](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L183)

___

### getOpReturn

▸ **getOpReturn**(): `Buffer`\<`ArrayBufferLike`\>[][]

#### Returns

`Buffer`\<`ArrayBufferLike`\>[][]

#### Defined in

[script.ts:126](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L126)

___

### parseBitcoms

▸ **parseBitcoms**(): [`ScriptBitcom`](../README.md#scriptbitcom)[]

#### Returns

[`ScriptBitcom`](../README.md#scriptbitcom)[]

#### Defined in

[script.ts:154](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L154)

___

### toAddress

▸ **toAddress**(`network?`): `undefined` \| `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | ``"testnet"`` \| ``"mainnet"`` | `"mainnet"` |

#### Returns

`undefined` \| `string`

#### Defined in

[script.ts:230](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L230)

___

### toAddressBuf

▸ **toAddressBuf**(): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

#### Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>

#### Defined in

[script.ts:206](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L206)

___

### toBuffer

▸ **toBuffer**(): `Buffer`\<`ArrayBufferLike`\>

#### Returns

`Buffer`\<`ArrayBufferLike`\>

#### Defined in

[script.ts:198](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L198)

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

[script.ts:202](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L202)

___

### fromBuffer

▸ **fromBuffer**(`buf`, `options?`): [`Script`](Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer`\<`ArrayBufferLike`\> |
| `options` | [`ScriptInitOptions`](../interfaces/ScriptInitOptions.md) |

#### Returns

[`Script`](Script.md)

#### Defined in

[script.ts:95](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L95)

___

### fromBufferReader

▸ **fromBufferReader**(`br`, `options?`): [`Script`](Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `br` | [`BufferReader`](utils.BufferReader.md) |
| `options` | [`ScriptInitOptions`](../interfaces/ScriptInitOptions.md) |

#### Returns

[`Script`](Script.md)

#### Defined in

[script.ts:100](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L100)

___

### fromHex

▸ **fromHex**(`hex`): [`Script`](Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Script`](Script.md)

#### Defined in

[script.ts:121](https://github.com/samooth/grs-minimal/blob/master/src/script.ts#L121)
