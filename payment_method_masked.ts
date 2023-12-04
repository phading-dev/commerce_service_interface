import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export enum CardBrand {
  UNKNOWN = 0,
  AMEX = 1,
  DINERS = 2,
  DISCOVER = 3,
  JCB = 4,
  MASTERCARD = 5,
  UNIONPAY = 6,
  VISA = 7,
}

export let CARD_BRAND: EnumDescriptor<CardBrand> = {
  name: 'CardBrand',
  values: [
    {
      name: 'UNKNOWN',
      value: 0,
    },
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
      name: 'JCB',
      value: 4,
    },
    {
      name: 'MASTERCARD',
      value: 5,
    },
    {
      name: 'UNIONPAY',
      value: 6,
    },
    {
      name: 'VISA',
      value: 7,
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
