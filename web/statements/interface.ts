import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { TransactionStatement, TRANSACTION_STATEMENT } from './transaction_statement';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ListTransactionStatementsRequestBody {
  startMonth?: string,
  endMonth?: string,
}

export let LIST_TRANSACTION_STATEMENTS_REQUEST_BODY: MessageDescriptor<ListTransactionStatementsRequestBody> = {
  name: 'ListTransactionStatementsRequestBody',
  fields: [{
    name: 'startMonth',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListTransactionStatementsResponse {
  statements?: Array<TransactionStatement>,
}

export let LIST_TRANSACTION_STATEMENTS_RESPONSE: MessageDescriptor<ListTransactionStatementsResponse> = {
  name: 'ListTransactionStatementsResponse',
  fields: [{
    name: 'statements',
    index: 1,
    messageType: TRANSACTION_STATEMENT,
    isArray: true,
  }],
};

export let LIST_TRANSACTION_STATEMENTS: RemoteCallDescriptor = {
  name: "ListTransactionStatements",
  service: COMMERCE_WEB_SERVICE,
  path: "/ListTransactionStatements",
  body: {
    messageType: LIST_TRANSACTION_STATEMENTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_TRANSACTION_STATEMENTS_RESPONSE,
  },
}
