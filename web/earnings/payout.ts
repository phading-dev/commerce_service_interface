import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum PayoutState {
  PROCESSING = 1,
  PAID = 2,
  DISABLED = 3,
}

export let PAYOUT_STATE: EnumDescriptor<PayoutState> = {
  name: 'PayoutState',
  values: [{
    name: 'PROCESSING',
    value: 1,
  }, {
    name: 'PAID',
    value: 2,
  }, {
    name: 'DISABLED',
    value: 3,
  }]
}

export interface Payout {
  month?: string,
  amount?: number,
  currency?: string,
  state?: PayoutState,
  updatedTimeMs?: number,
}

export let PAYOUT: MessageDescriptor<Payout> = {
  name: 'Payout',
  fields: [{
    name: 'payoutId',
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
    enumType: PAYOUT_STATE,
  }, {
    name: 'updatedTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
