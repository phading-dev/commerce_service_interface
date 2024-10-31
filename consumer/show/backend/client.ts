import { GenerateBillingStatementRequestBody, GenerateBillingStatementResponse, GENERATE_BILLING_STATEMENT } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function generateBillingStatement(
  client: NodeClientInterface,
  body: GenerateBillingStatementRequestBody,
  options?: NodeClientOptions,
): Promise<GenerateBillingStatementResponse> {
  return client.send(
    {
      descriptor: GENERATE_BILLING_STATEMENT,
      body,
    },
    options,
  );
}
