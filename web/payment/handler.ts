import { CreateStripeSessionToAddPaymentMethodRequestBody, CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD, CreateStripeSessionToAddPaymentMethodResponse, ReplacePrimaryPaymentMethodRequestBody, REPLACE_PRIMARY_PAYMENT_METHOD, ReplacePrimaryPaymentMethodResponse, RetryFailedPaymentsRequsetBody, RETRY_FAILED_PAYMENTS, RetryFailedPaymentsResponse, ReactivatePaymentProfileRequestBody, REACTIVATE_PAYMENT_PROFILE, ReactivatePaymentProfileResponse, GetPaymentProfileInfoRequestBody, GET_PAYMENT_PROFILE_INFO, GetPaymentProfileInfoResponse, ListPaymentsRequestBody, LIST_PAYMENTS, ListPaymentsResponse } from './interface';
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

export abstract class ReactivatePaymentProfileHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = REACTIVATE_PAYMENT_PROFILE;
  public abstract handle(
    loggingPrefix: string,
    body: ReactivatePaymentProfileRequestBody,
    authStr: string,
  ): Promise<ReactivatePaymentProfileResponse>;
}

export abstract class GetPaymentProfileInfoHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_PAYMENT_PROFILE_INFO;
  public abstract handle(
    loggingPrefix: string,
    body: GetPaymentProfileInfoRequestBody,
    authStr: string,
  ): Promise<GetPaymentProfileInfoResponse>;
}

export abstract class ListPaymentsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentsRequestBody,
    authStr: string,
  ): Promise<ListPaymentsResponse>;
}
