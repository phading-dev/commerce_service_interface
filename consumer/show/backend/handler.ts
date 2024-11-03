import { GenerateEarningsStatementRequestBody, GENERATE_EARNINGS_STATEMENT, GenerateEarningsStatementResponse } from '../../../publisher/show/backend/interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GenerateEarningsStatementHandlerInterface implements NodeHandlerInterface {
  public descriptor = GENERATE_EARNINGS_STATEMENT;
  public abstract handle(
    loggingPrefix: string,
    body: GenerateEarningsStatementRequestBody,
  ): Promise<GenerateEarningsStatementResponse>;
}
