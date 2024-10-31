import { ListPaymentMethodsRequestBody, ListPaymentMethodsResponse, LIST_PAYMENT_METHODS, UpdatePaymentMethodRequestBody, UpdatePaymentMethodResponse, UPDATE_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, DeletePaymentMethodRequestBody, DeletePaymentMethodResponse, DELETE_PAYMENT_METHOD } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function listPaymentMethods(
  client: WebClientInterface,
  body: ListPaymentMethodsRequestBody,
  options?: WebClientOptions,
): Promise<ListPaymentMethodsResponse> {
  return client.send(
    {
      descriptor: LIST_PAYMENT_METHODS,
      body,
    },
    options,
  );
}

export function updatePaymentMethod(
  client: WebClientInterface,
  body: UpdatePaymentMethodRequestBody,
  options?: WebClientOptions,
): Promise<UpdatePaymentMethodResponse> {
  return client.send(
    {
      descriptor: UPDATE_PAYMENT_METHOD,
      body,
    },
    options,
  );
}

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

export function deletePaymentMethod(
  client: WebClientInterface,
  body: DeletePaymentMethodRequestBody,
  options?: WebClientOptions,
): Promise<DeletePaymentMethodResponse> {
  return client.send(
    {
      descriptor: DELETE_PAYMENT_METHOD,
      body,
    },
    options,
  );
}
