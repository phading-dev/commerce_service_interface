import { EventReceivedResponse, MARK_PAYMENT_DONE, MARK_PAYMENT_FAILED } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function markPaymentDone(
  client: WebClientInterface,
  body: Blob,
  options?: WebClientOptions,
): Promise<EventReceivedResponse> {
  return client.send(
    {
      descriptor: MARK_PAYMENT_DONE,
      body,
    },
    options,
  );
}

export function markPaymentFailed(
  client: WebClientInterface,
  body: Blob,
  options?: WebClientOptions,
): Promise<EventReceivedResponse> {
  return client.send(
    {
      descriptor: MARK_PAYMENT_FAILED,
      body,
    },
    options,
  );
}
