import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Money {
/* Integer portion. */
  integer?: number,
/* Fractional portion in nano. */
  nano?: number,
}

export let MONEY: MessageDescriptor<Money> = {
  name: 'Money',
  fields: [
    {
      name: 'integer',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'nano',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
