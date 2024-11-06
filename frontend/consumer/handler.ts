import { ListPaymentMethodsRequestBody, LIST_PAYMENT_METHODS, ListPaymentMethodsResponse, UpdatePaymentMethodRequestBody, UPDATE_PAYMENT_METHOD, UpdatePaymentMethodResponse, CreateStripeSessionToAddPaymentMethodRequestBody, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodResponse, DeletePaymentMethodRequestBody, DELETE_PAYMENT_METHOD, DeletePaymentMethodResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class ListPaymentMethodsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_PAYMENT_METHODS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentMethodsRequestBody,
    sessionStr: string,
  ): Promise<ListPaymentMethodsResponse>;
}

export abstract class UpdatePaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: UpdatePaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<UpdatePaymentMethodResponse>;
}

export abstract class CreateStripeSessionToAddPaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: CreateStripeSessionToAddPaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<CreateStripeSessionToAddPaymentMethodResponse>;
}

export abstract class DeletePaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = DELETE_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: DeletePaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<DeletePaymentMethodResponse>;
}
