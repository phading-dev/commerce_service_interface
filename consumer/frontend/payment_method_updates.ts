import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PaymentMethodPriority, PAYMENT_METHOD_PRIORITY } from './payment_method_priority';

export interface CardUpdates {
  expMonth?: number,
  expYear?: number,
}

export let CARD_UPDATES: MessageDescriptor<CardUpdates> = {
  name: 'CardUpdates',
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

export interface PaymentMethodUpdates {
  paymentMethodId?: string,
  priority?: PaymentMethodPriority,
  card?: CardUpdates,
}

export let PAYMENT_METHOD_UPDATES: MessageDescriptor<PaymentMethodUpdates> = {
  name: 'PaymentMethodUpdates',
  fields: [{
    name: 'paymentMethodId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'priority',
    index: 2,
    enumType: PAYMENT_METHOD_PRIORITY,
  }, {
    name: 'card',
    index: 3,
    messageType: CARD_UPDATES,
  }],
};
