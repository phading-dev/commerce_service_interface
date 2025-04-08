import { CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, ReplacePrimaryPaymentMethodRequestBody, ReplacePrimaryPaymentMethodResponse, REPLACE_PRIMARY_PAYMENT_METHOD, RetryFailedPaymentsRequsetBody, RetryFailedPaymentsResponse, RETRY_FAILED_PAYMENTS, GetPaymentProfileInfoRequestBody, GetPaymentProfileInfoResponse, GET_PAYMENT_PROFILE_INFO, ListPaymentsRequestBody, ListPaymentsResponse, LIST_PAYMENTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newCreateStripeSessionToAddPaymentMethodRequest(
  body: CreateStripeSessionToAddPaymentMethodRequestBody,
): ClientRequestInterface<CreateStripeSessionToAddPaymentMethodResponse> {
  return {
    descriptor: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD,
    body,
  };
}

export function newReplacePrimaryPaymentMethodRequest(
  body: ReplacePrimaryPaymentMethodRequestBody,
): ClientRequestInterface<ReplacePrimaryPaymentMethodResponse> {
  return {
    descriptor: REPLACE_PRIMARY_PAYMENT_METHOD,
    body,
  };
}

export function newRetryFailedPaymentsRequest(
  body: RetryFailedPaymentsRequsetBody,
): ClientRequestInterface<RetryFailedPaymentsResponse> {
  return {
    descriptor: RETRY_FAILED_PAYMENTS,
    body,
  };
}

export function newGetPaymentProfileInfoRequest(
  body: GetPaymentProfileInfoRequestBody,
): ClientRequestInterface<GetPaymentProfileInfoResponse> {
  return {
    descriptor: GET_PAYMENT_PROFILE_INFO,
    body,
  };
}

export function newListPaymentsRequest(
  body: ListPaymentsRequestBody,
): ClientRequestInterface<ListPaymentsResponse> {
  return {
    descriptor: LIST_PAYMENTS,
    body,
  };
}
