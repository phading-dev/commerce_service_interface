import { ProductID, PRODUCT_I_D } from '@phading/price/price';
import { AmountType, AMOUNT_TYPE } from '@phading/price/amount_type';
import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';

export interface LineItem {
  productID?: ProductID,
  amountType?: AmountType,
  unit?: string,
  quantity?: number,
  amount?: number,
}

export let LINE_ITEM: MessageDescriptor<LineItem> = {
  name: 'LineItem',
  fields: [{
    name: 'productID',
    index: 1,
    enumType: PRODUCT_I_D,
  }, {
    name: 'amountType',
    index: 2,
    enumType: AMOUNT_TYPE,
  }, {
    name: 'unit',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'quantity',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'amount',
    index: 5,
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

export interface Payment {
  state?: PaymentState,
  stripeInvoiceUrl?: string,
}

export let PAYMENT: MessageDescriptor<Payment> = {
  name: 'Payment',
  fields: [{
    name: 'state',
    index: 1,
    enumType: PAYMENT_STATE,
  }, {
    name: 'stripeInvoiceUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
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

export interface Payout {
  state?: PayoutState,
}

export let PAYOUT: MessageDescriptor<Payout> = {
  name: 'Payout',
  fields: [{
    name: 'state',
    index: 1,
    enumType: PAYOUT_STATE,
  }],
};

export interface TransactionStatement {
  statementId?: string,
  month?: string,
  currency?: string,
  totalAmount?: number,
  totalAmountType?: AmountType,
  positiveAmountType?: AmountType,
  items?: Array<LineItem>,
  payment?: Payment,
  payout?: Payout,
}

export let TRANSACTION_STATEMENT: MessageDescriptor<TransactionStatement> = {
  name: 'TransactionStatement',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'currency',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalAmount',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'totalAmountType',
    index: 5,
    enumType: AMOUNT_TYPE,
  }, {
    name: 'positiveAmountType',
    index: 6,
    enumType: AMOUNT_TYPE,
  }, {
    name: 'items',
    index: 7,
    messageType: LINE_ITEM,
    isArray: true,
  }, {
    name: 'payment',
    index: 8,
    messageType: PAYMENT,
  }, {
    name: 'payout',
    index: 9,
    messageType: PAYOUT,
  }],
};
