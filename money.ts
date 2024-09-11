import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Money {
  /* Integer portion. */
  integer?: number,
  /* Fractional portion in nano. */
  nano?: number,
}

export let MONEY: MessageDescriptor<Money> = {
  name: 'Money',
  fields: [{
    name: 'integer',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nano',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
