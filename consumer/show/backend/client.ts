import { GenerateEarningsStatementRequestBody, GenerateEarningsStatementResponse, GENERATE_EARNINGS_STATEMENT } from '../../../publisher/show/backend/interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function generateEarningsStatement(
  client: NodeClientInterface,
  body: GenerateEarningsStatementRequestBody,
  options?: NodeClientOptions,
): Promise<GenerateEarningsStatementResponse> {
  return client.send(
    {
      descriptor: GENERATE_EARNINGS_STATEMENT,
      body,
    },
    options,
  );
}
