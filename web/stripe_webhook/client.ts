import { Empty, GRANT_INIT_PAYMENT_CREDIT, MARK_PAYMENT_DONE, MARK_PAYMENT_FAILED } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGrantInitPaymentCreditRequest(
  body: Blob,
): ClientRequestInterface<Empty> {
  return {
    descriptor: GRANT_INIT_PAYMENT_CREDIT,
    body,
  };
}

export function newMarkPaymentDoneRequest(
  body: Blob,
): ClientRequestInterface<Empty> {
  return {
    descriptor: MARK_PAYMENT_DONE,
    body,
  };
}

export function newMarkPaymentFailedRequest(
  body: Blob,
): ClientRequestInterface<Empty> {
  return {
    descriptor: MARK_PAYMENT_FAILED,
    body,
  };
}
