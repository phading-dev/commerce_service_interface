import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum PaymentState {
  PROCESSING = 1,
  PAID = 2,
  FAILED = 3,
}

export let PAYMENT_STATE: EnumDescriptor<PaymentState> = {
  name: 'PaymentState',
  values: [{
    name: 'PROCESSING',
    value: 1,
  }, {
    name: 'PAID',
    value: 2,
  }, {
    name: 'FAILED',
    value: 3,
  }]
}

export interface Payment {
  month?: string,
  amount?: number,
  currency?: string,
  state?: PaymentState,
  updatedTimeMs?: number,
}

export let PAYMENT: MessageDescriptor<Payment> = {
  name: 'Payment',
  fields: [{
    name: 'paymentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'amount',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'currency',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'state',
    index: 5,
    enumType: PAYMENT_STATE,
  }, {
    name: 'updatedTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
