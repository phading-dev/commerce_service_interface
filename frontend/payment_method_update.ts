import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface CardUpdate {
  expMonth?: number,
  expYear?: number,
}

export let CARD_UPDATE: MessageDescriptor<CardUpdate> = {
  name: 'CardUpdate',
  fields: [{
    name: 'expMonth',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'expYear',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PaymentMethodUpdate {
  paymentMethodId?: string,
  isPrimary?: boolean,
  card?: CardUpdate,
}

export let PAYMENT_METHOD_UPDATE: MessageDescriptor<PaymentMethodUpdate> = {
  name: 'PaymentMethodUpdate',
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
    messageType: CARD_UPDATE,
  }],
};
