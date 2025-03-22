import { CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, ReplacePrimaryPaymentMethodRequestBody, ReplacePrimaryPaymentMethodResponse, REPLACE_PRIMARY_PAYMENT_METHOD, GetPrimaryPaymentMethodRequestBody, GetPrimaryPaymentMethodResponse, GET_PRIMARY_PAYMENT_METHOD } from './interface';
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

export function newGetPrimaryPaymentMethodRequest(
  body: GetPrimaryPaymentMethodRequestBody,
): ClientRequestInterface<GetPrimaryPaymentMethodResponse> {
  return {
    descriptor: GET_PRIMARY_PAYMENT_METHOD,
    body,
  };
}
