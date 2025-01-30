import { CreateStripeSessionToAddPaymentMethodRequestBody, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodResponse, ReplacePrimaryPaymentMethodRequestBody, REPLACE_PRIMARY_PAYMENT_METHOD, ReplacePrimaryPaymentMethodResponse, GetPrimaryPaymentMethodRequestBody, GET_PRIMARY_PAYMENT_METHOD, GetPrimaryPaymentMethodResponse, ListBillingsRequestBody, LIST_BILLINGS, ListBillingsResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class CreateStripeSessionToAddPaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: CreateStripeSessionToAddPaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<CreateStripeSessionToAddPaymentMethodResponse>;
}

export abstract class ReplacePrimaryPaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = REPLACE_PRIMARY_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: ReplacePrimaryPaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<ReplacePrimaryPaymentMethodResponse>;
}

export abstract class GetPrimaryPaymentMethodHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_PRIMARY_PAYMENT_METHOD;
  public abstract handle(
    loggingPrefix: string,
    body: GetPrimaryPaymentMethodRequestBody,
    sessionStr: string,
  ): Promise<GetPrimaryPaymentMethodResponse>;
}

export abstract class ListBillingsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_BILLINGS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingsRequestBody,
    sessionStr: string,
  ): Promise<ListBillingsResponse>;
}
