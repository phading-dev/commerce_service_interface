import { ProductType, PRODUCT_TYPE } from '@phading/price/price';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface LineItem {
  productType?: ProductType,
  quantity?: number,
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
  }],
};

export interface GenerateBillingStatementRequestBody {
  accountId?: string,
  month?: string,
  items?: Array<LineItem>,
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
    messageType: LINE_ITEM,
    isArray: true,
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
