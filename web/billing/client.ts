import { CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, ReplacePrimaryPaymentMethodRequestBody, ReplacePrimaryPaymentMethodResponse, REPLACE_PRIMARY_PAYMENT_METHOD, GetPrimaryPaymentMethodRequestBody, GetPrimaryPaymentMethodResponse, GET_PRIMARY_PAYMENT_METHOD, ListBillingsRequestBody, ListBillingsResponse, LIST_BILLINGS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function createStripeSessionToAddPaymentMethod(
  client: WebClientInterface,
  body: CreateStripeSessionToAddPaymentMethodRequestBody,
  options?: WebClientOptions,
): Promise<CreateStripeSessionToAddPaymentMethodResponse> {
  return client.send(
    {
      descriptor: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD,
      body,
    },
    options,
  );
}

export function replacePrimaryPaymentMethod(
  client: WebClientInterface,
  body: ReplacePrimaryPaymentMethodRequestBody,
  options?: WebClientOptions,
): Promise<ReplacePrimaryPaymentMethodResponse> {
  return client.send(
    {
      descriptor: REPLACE_PRIMARY_PAYMENT_METHOD,
      body,
    },
    options,
  );
}

export function getPrimaryPaymentMethod(
  client: WebClientInterface,
  body: GetPrimaryPaymentMethodRequestBody,
  options?: WebClientOptions,
): Promise<GetPrimaryPaymentMethodResponse> {
  return client.send(
    {
      descriptor: GET_PRIMARY_PAYMENT_METHOD,
      body,
    },
    options,
  );
}

export function listBillings(
  client: WebClientInterface,
  body: ListBillingsRequestBody,
  options?: WebClientOptions,
): Promise<ListBillingsResponse> {
  return client.send(
    {
      descriptor: LIST_BILLINGS,
      body,
    },
    options,
  );
}
