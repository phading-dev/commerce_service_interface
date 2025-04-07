import { ProductID, PRODUCT_I_D } from '@phading/price/price';
import { AmountType, AMOUNT_TYPE } from '@phading/price/amount_type';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

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

export interface TransactionStatement {
  statementId?: string,
  month?: string,
  currency?: string,
  totalAmount?: number,
  totalAmountType?: AmountType,
  items?: Array<LineItem>,
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
    name: 'items',
    index: 6,
    messageType: LINE_ITEM,
    isArray: true,
  }],
};
