import { ProductType, PRODUCT_TYPE } from '@phading/price/price';
import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';

export interface LineItem {
  productType?: ProductType,
  quantity?: number,
  amount?: number,
}

export let LINE_ITEM: MessageDescriptor<LineItem> = {
  name: 'LineItem',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
  }, {
    name: 'quantity',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'amount',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export enum PayoutState {
  PROCESSING = 1,
  PAID = 2,
  FAILED = 3,
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
    name: 'FAILED',
    value: 3,
  }]
}

export interface Earnings {
  earningsId?: string,
  state?: PayoutState,
  month?: string,
  currency?: string,
  totalAmount?: number,
  items?: Array<LineItem>,
}

export let EARNINGS: MessageDescriptor<Earnings> = {
  name: 'Earnings',
  fields: [{
    name: 'earningsId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'state',
    index: 2,
    enumType: PAYOUT_STATE,
  }, {
    name: 'month',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'currency',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalAmount',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'items',
    index: 6,
    messageType: LINE_ITEM,
    isArray: true,
  }],
};
