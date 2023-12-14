import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { ListPaymentMethodsRequestBody, ListPaymentMethodsResponse, LIST_PAYMENT_METHODS, UpdatePaymentMethodRequestBody, UpdatePaymentMethodResponse, UPDATE_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, DeletePaymentMethodRequestBody, DeletePaymentMethodResponse, DELETE_PAYMENT_METHOD } from './interface';

export function listPaymentMethods(
  client: WebServiceClientInterface,
  body: ListPaymentMethodsRequestBody,
): Promise<ListPaymentMethodsResponse> {
  return client.send({
    descriptor: LIST_PAYMENT_METHODS,
    body,
  });
}

export function updatePaymentMethod(
  client: WebServiceClientInterface,
  body: UpdatePaymentMethodRequestBody,
): Promise<UpdatePaymentMethodResponse> {
  return client.send({
    descriptor: UPDATE_PAYMENT_METHOD,
    body,
  });
}

export function createStripeSessionToAddPaymentMethod(
  client: WebServiceClientInterface,
  body: CreateStripeSessionToAddPaymentMethodRequestBody,
): Promise<CreateStripeSessionToAddPaymentMethodResponse> {
  return client.send({
    descriptor: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD,
    body,
  });
}

export function deletePaymentMethod(
  client: WebServiceClientInterface,
  body: DeletePaymentMethodRequestBody,
): Promise<DeletePaymentMethodResponse> {
  return client.send({
    descriptor: DELETE_PAYMENT_METHOD,
    body,
  });
}
