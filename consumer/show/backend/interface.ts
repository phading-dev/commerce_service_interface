import { Price, PRICE } from '@phading/price/price';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from '@phading/price/money';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface StatementItem {
  price?: Price,
  quantity?: number,
  money?: Money,
}

export let STATEMENT_ITEM: MessageDescriptor<StatementItem> = {
  name: 'StatementItem',
  fields: [{
    name: 'price',
    index: 1,
    messageType: PRICE,
  }, {
    name: 'quantity',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'money',
    index: 3,
    messageType: MONEY,
  }],
};

export interface GenerateBillingStatementRequestBody {
  accountId?: string,
  month?: string,
  items?: Array<StatementItem>,
  total?: Money,
}

export let GENERATE_BILLING_STATEMENT_REQUEST_BODY: MessageDescriptor<GenerateBillingStatementRequestBody> = {
  name: 'GenerateBillingStatementRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'items',
    index: 3,
    messageType: STATEMENT_ITEM,
    isArray: true,
  }, {
    name: 'total',
    index: 4,
    messageType: MONEY,
  }],
};

export interface GenerateBillingStatementResponse {
}

export let GENERATE_BILLING_STATEMENT_RESPONSE: MessageDescriptor<GenerateBillingStatementResponse> = {
  name: 'GenerateBillingStatementResponse',
  fields: [],
};

export let GENERATE_BILLING_STATEMENT: NodeRemoteCallDescriptor = {
  name: "GenerateBillingStatement",
  path: "/GenerateBillingStatement",
  body: {
    messageType: GENERATE_BILLING_STATEMENT_REQUEST_BODY,
  },
  response: {
    messageType: GENERATE_BILLING_STATEMENT_RESPONSE,
  },
}
