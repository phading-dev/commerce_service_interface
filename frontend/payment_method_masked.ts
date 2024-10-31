import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum CardBrand {
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
  values: [{
    name: 'AMEX',
    value: 1,
  }, {
    name: 'DINERS',
    value: 2,
  }, {
    name: 'DISCOVER',
    value: 3,
  }, {
    name: 'JCB',
    value: 4,
  }, {
    name: 'MASTERCARD',
    value: 5,
  }, {
    name: 'UNIONPAY',
    value: 6,
  }, {
    name: 'VISA',
    value: 7,
  }]
}

export interface CardMasked {
  brand?: CardBrand,
  lastFourDigits?: string,
  expMonth?: number,
  expYear?: number,
}

export let CARD_MASKED: MessageDescriptor<CardMasked> = {
  name: 'CardMasked',
  fields: [{
    name: 'brand',
    index: 1,
    enumType: CARD_BRAND,
  }, {
    name: 'lastFourDigits',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'expMonth',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'expYear',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PaymentMethodMasked {
  paymentMethodId?: string,
  isPrimary?: boolean,
  card?: CardMasked,
}

export let PAYMENT_METHOD_MASKED: MessageDescriptor<PaymentMethodMasked> = {
  name: 'PaymentMethodMasked',
  fields: [{
    name: 'paymentMethodId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isPrimary',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'card',
    index: 3,
    messageType: CARD_MASKED,
  }],
};
