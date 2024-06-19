import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { LIST_PAYMENT_METHODS, ListPaymentMethodsRequestBody, ListPaymentMethodsResponse, UPDATE_PAYMENT_METHOD, UpdatePaymentMethodRequestBody, UpdatePaymentMethodResponse, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodRequestBody, CreateStripeSessionToAddPaymentMethodResponse, DELETE_PAYMENT_METHOD, DeletePaymentMethodRequestBody, DeletePaymentMethodResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class ListPaymentMethodsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_PAYMENT_METHODS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentMethodsRequestBody,
    auth: ClientSession,
  ): Promise<ListPaymentMethodsResponse>;
}

export abstract class UpdatePaymentMethodHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: UpdatePaymentMethodRequestBody,
    auth: ClientSession,
  ): Promise<UpdatePaymentMethodResponse>;
}

export abstract class CreateStripeSessionToAddPaymentMethodHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: CreateStripeSessionToAddPaymentMethodRequestBody,
    auth: ClientSession,
  ): Promise<CreateStripeSessionToAddPaymentMethodResponse>;
}

export abstract class DeletePaymentMethodHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: DeletePaymentMethodRequestBody,
    auth: ClientSession,
  ): Promise<DeletePaymentMethodResponse>;
}
