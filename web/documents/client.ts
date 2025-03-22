import { ListTransactionStatementsRequestBody, ListTransactionStatementsResponse, LIST_TRANSACTION_STATEMENTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newListTransactionStatementsRequest(
  body: ListTransactionStatementsRequestBody,
): ClientRequestInterface<ListTransactionStatementsResponse> {
  return {
    descriptor: LIST_TRANSACTION_STATEMENTS,
    body,
  };
}
