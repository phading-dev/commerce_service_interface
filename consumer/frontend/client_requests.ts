import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { ListPaymentMethodsRequestBody, ListPaymentMethodsResponse, LIST_PAYMENT_METHODS, UpdatePaymentMethodRequestBody, UpdatePaymentMethodResponse, UPDATE_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, DeletePaymentMethodRequestBody, DeletePaymentMethodResponse, DELETE_PAYMENT_METHOD } from './interface';

export function listPaymentMethods(
  client: WebServiceClientInterface,
  body: ListPaymentMethodsRequestBody,
  options?: WebServiceClientOptions,
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
  client: WebServiceClientInterface,
  body: UpdatePaymentMethodRequestBody,
  options?: WebServiceClientOptions,
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
  client: WebServiceClientInterface,
  body: CreateStripeSessionToAddPaymentMethodRequestBody,
  options?: WebServiceClientOptions,
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
  client: WebServiceClientInterface,
  body: DeletePaymentMethodRequestBody,
  options?: WebServiceClientOptions,
): Promise<DeletePaymentMethodResponse> {
  return client.send(
    {
      descriptor: DELETE_PAYMENT_METHOD,
      body,
    },
    options,
  );
}
