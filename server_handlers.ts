import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { LIST_PAYMENT_METHODS, ListPaymentMethodsRequestBody, ListPaymentMethodsResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class ListPaymentMethodsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_PAYMENT_METHODS;
  public abstract handle(
    requestId: string,
    body: ListPaymentMethodsRequestBody,
    auth: WebClientSession,
  ): Promise<ListPaymentMethodsResponse>;
}

export abstract class CreateStripeSessionToAddPaymentMethodHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD;
  public abstract handle(
    requestId: string,
    body: CreateStripeSessionToAddPaymentMethodRequestBody,
    auth: WebClientSession,
  ): Promise<CreateStripeSessionToAddPaymentMethodResponse>;
}
