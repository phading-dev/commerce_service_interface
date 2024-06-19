import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentMethodPriority, PAYMENT_METHOD_PRIORITY } from './payment_method_priority';

export interface CardUpdates {
  expMonth?: number,
  expYear?: number,
}

export let CARD_UPDATES: MessageDescriptor<CardUpdates> = {
  name: 'CardUpdates',
  fields: [
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

export interface PaymentMethodUpdates {
  paymentMethodId?: string,
  priority?: PaymentMethodPriority,
  card?: CardUpdates,
}

export let PAYMENT_METHOD_UPDATES: MessageDescriptor<PaymentMethodUpdates> = {
  name: 'PaymentMethodUpdates',
  fields: [
    {
      name: 'paymentMethodId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'priority',
      enumType: PAYMENT_METHOD_PRIORITY,
    },
    {
      name: 'card',
      messageType: CARD_UPDATES,
    },
  ]
};
