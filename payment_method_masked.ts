import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export enum CardBrand {
  AMEX = 1,
  DINERS = 2,
  DISCOVER = 3,
  EFTPOS_AU = 4,
  JCB = 5,
  MASTERCARD = 6,
  UNIONPAY = 7,
  VISA = 8,
}

export let CARD_BRAND: EnumDescriptor<CardBrand> = {
  name: 'CardBrand',
  values: [
    {
      name: 'AMEX',
      value: 1,
    },
    {
      name: 'DINERS',
      value: 2,
    },
    {
      name: 'DISCOVER',
      value: 3,
    },
    {
      name: 'EFTPOS_AU',
      value: 4,
    },
    {
      name: 'JCB',
      value: 5,
    },
    {
      name: 'MASTERCARD',
      value: 6,
    },
    {
      name: 'UNIONPAY',
      value: 7,
    },
    {
      name: 'VISA',
      value: 8,
    },
  ]
}

export interface CardMasked {
  brand?: CardBrand,
  lastFourDigits?: string,
  expMonth?: number,
  expYear?: number,
}

export let CARD_MASKED: MessageDescriptor<CardMasked> = {
  name: 'CardMasked',
  fields: [
    {
      name: 'brand',
      enumType: CARD_BRAND,
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
