import { CreateStripeSessionToAddPaymentMethodRequestBody, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodResponse, ReplacePrimaryPaymentMethodRequestBody, REPLACE_PRIMARY_PAYMENT_METHOD, ReplacePrimaryPaymentMethodResponse, GetPrimaryPaymentMethodRequestBody, GET_PRIMARY_PAYMENT_METHOD, GetPrimaryPaymentMethodResponse, ListBillingsRequestBody, LIST_BILLINGS, ListBillingsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class CreateStripeSessionToAddPaymentMethodHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: CreateStripeSessionToAddPaymentMethodRequestBody,
    authStr: string,
  ): Promise<CreateStripeSessionToAddPaymentMethodResponse>;
}

export abstract class ReplacePrimaryPaymentMethodHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = REPLACE_PRIMARY_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: ReplacePrimaryPaymentMethodRequestBody,
    authStr: string,
  ): Promise<ReplacePrimaryPaymentMethodResponse>;
}

export abstract class GetPrimaryPaymentMethodHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_PRIMARY_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: GetPrimaryPaymentMethodRequestBody,
    authStr: string,
  ): Promise<GetPrimaryPaymentMethodResponse>;
}

export abstract class ListBillingsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLINGS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingsRequestBody,
    authStr: string,
  ): Promise<ListBillingsResponse>;
}
