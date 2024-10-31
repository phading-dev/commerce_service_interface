import { GenerateBillingStatementRequestBody, GENERATE_BILLING_STATEMENT, GenerateBillingStatementResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GenerateBillingStatementHandlerInterface implements NodeHandlerInterface {
  public descriptor = GENERATE_BILLING_STATEMENT;
  public abstract handle(
    loggingPrefix: string,
    body: GenerateBillingStatementRequestBody,
  ): Promise<GenerateBillingStatementResponse>;
}
