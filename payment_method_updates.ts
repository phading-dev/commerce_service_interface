import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

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
  id?: string,
  isPrimary?: boolean,
  isBackup?: boolean,
  card?: CardUpdates,
}

export let PAYMENT_METHOD_UPDATES: MessageDescriptor<PaymentMethodUpdates> = {
  name: 'PaymentMethodUpdates',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'isPrimary',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'isBackup',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'card',
      messageType: CARD_UPDATES,
    },
  ]
};
