import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface CardMasked {
  brand?: string,
  lastFourDigits?: string,
  expMonth?: number,
  expYear?: number,
}

export let CARD_MASKED: MessageDescriptor<CardMasked> = {
  name: 'CardMasked',
  fields: [
    {
      name: 'brand',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'lastFourDigits',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'expMonth',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'expYear',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface PaymentMethodMasked {
  id?: string,
  card?: CardMasked,
}

export let PAYMENT_METHOD_MASKED: MessageDescriptor<PaymentMethodMasked> = {
  name: 'PaymentMethodMasked',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'card',
      messageType: CARD_MASKED,
    },
  ]
};
