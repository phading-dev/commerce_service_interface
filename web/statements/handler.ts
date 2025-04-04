import { ListTransactionStatementsRequestBody, LIST_TRANSACTION_STATEMENTS, ListTransactionStatementsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class ListTransactionStatementsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_TRANSACTION_STATEMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListTransactionStatementsRequestBody,
    authStr: string,
  ): Promise<ListTransactionStatementsResponse>;
}
