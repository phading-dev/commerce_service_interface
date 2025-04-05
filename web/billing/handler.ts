import { CreateStripeSessionToAddPaymentMethodRequestBody, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodResponse, ReplacePrimaryPaymentMethodRequestBody, REPLACE_PRIMARY_PAYMENT_METHOD, ReplacePrimaryPaymentMethodResponse, RetryFailedPaymentsRequsetBody, RETRY_FAILED_PAYMENTS, RetryFailedPaymentsResponse, GetBillingProfileInfoRequestBody, GET_BILLING_PROFILE_INFO, GetBillingProfileInfoResponse, ListPaymentsRequestBody, LIST_PAYMENTS, ListPaymentsResponse } from './interface';
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

export abstract class RetryFailedPaymentsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = RETRY_FAILED_PAYMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: RetryFailedPaymentsRequsetBody,
    authStr: string,
  ): Promise<RetryFailedPaymentsResponse>;
}

export abstract class GetBillingProfileInfoHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_BILLING_PROFILE_INFO;
  public abstract handle(
    loggingPrefix: string,
    body: GetBillingProfileInfoRequestBody,
    authStr: string,
  ): Promise<GetBillingProfileInfoResponse>;
}

export abstract class ListPaymentsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentsRequestBody,
    authStr: string,
  ): Promise<ListPaymentsResponse>;
}
