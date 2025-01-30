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

export interface Billing {
  billingId?: string,
  state?: PaymentState,
  month?: string,
  currency?: string,
  totalAmount?: number,
  items?: Array<LineItem>,
  stripeInvoiceUrl?: string,
}

export let BILLING: MessageDescriptor<Billing> = {
  name: 'Billing',
  fields: [{
    name: 'billingId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'state',
    index: 2,
    enumType: PAYMENT_STATE,
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
  }, {
    name: 'stripeInvoiceUrl',
    index: 7,
    primitiveType: PrimitiveType.STRING,
  }],
};
