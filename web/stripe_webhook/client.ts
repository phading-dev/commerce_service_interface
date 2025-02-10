import { EventReceivedResponse, MARK_PAYMENT_DONE, MARK_PAYMENT_FAILED } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newMarkPaymentDoneRequest(
  body: Blob,
): ClientRequestInterface<EventReceivedResponse> {
  return {
    descriptor: MARK_PAYMENT_DONE,
    body,
  };
}

export function newMarkPaymentFailedRequest(
  body: Blob,
): ClientRequestInterface<EventReceivedResponse> {
  return {
    descriptor: MARK_PAYMENT_FAILED,
    body,
  };
}
