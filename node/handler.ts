import { GenerateTransactionStatementRequestBody, GENERATE_TRANSACTION_STATEMENT, GenerateTransactionStatementResponse, CreateBillingProfileRequestBody, CREATE_BILLING_PROFILE, CreateBillingProfileResponse, CreateEarningsProfileRequestBody, CREATE_EARNINGS_PROFILE, CreateEarningsProfileResponse, ProcessStripePaymentCustomerCreatingTaskRequestBody, PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK, ProcessStripePaymentCustomerCreatingTaskResponse, ListStripePaymentCustomerCreatingTasksRequestBody, LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS, ListStripePaymentCustomerCreatingTasksResponse, ProcessStripeConnectedAccountCreatingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ProcessStripeConnectedAccountCreatingTaskResponse, ListStripeConnectedAccountCreatingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ListStripeConnectedAccountCreatingTasksResponse, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, ProcessPaymentTaskRequestBody, PROCESS_PAYMENT_TASK, ProcessPaymentTaskResponse, ListPaymentTasksRequestBody, LIST_PAYMENT_TASKS, ListPaymentTasksResponse, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody, PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ProcessBillingProfileSuspendingDueToPastDueTaskResponse, ListBillingProfileSuspendingDueToPastDueTasksRequestBody, LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ListBillingProfileSuspendingDueToPastDueTasksResponse, ProcessBillingProfileSuspensionNotifyingTaskRequestBody, PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK, ProcessBillingProfileSuspensionNotifyingTaskResponse, ListBillingProfileSuspensionNotifyingTasksRequestBody, LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS, ListBillingProfileSuspensionNotifyingTasksResponse, ProcessBillingProfileStateSyncingTaskRequestBody, PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK, ProcessBillingProfileStateSyncingTaskResponse, ListBillingProfileStateSyncingTasksRequestBody, LIST_BILLING_PROFILE_STATE_SYNCING_TASKS, ListBillingProfileStateSyncingTasksResponse, ProcessPayoutTaskRequestBody, PROCESS_PAYOUT_TASK, ProcessPayoutTaskResponse, ListPayoutTasksRequestBody, LIST_PAYOUT_TASKS, ListPayoutTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GenerateTransactionStatementHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GENERATE_TRANSACTION_STATEMENT;
  public abstract handle(
    loggingPrefix: string,
    body: GenerateTransactionStatementRequestBody,
  ): Promise<GenerateTransactionStatementResponse>;
}

export abstract class CreateBillingProfileHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_BILLING_PROFILE;
  public abstract handle(
    loggingPrefix: string,
    body: CreateBillingProfileRequestBody,
  ): Promise<CreateBillingProfileResponse>;
}

export abstract class CreateEarningsProfileHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_EARNINGS_PROFILE;
  public abstract handle(
    loggingPrefix: string,
    body: CreateEarningsProfileRequestBody,
  ): Promise<CreateEarningsProfileResponse>;
}

export abstract class ProcessStripePaymentCustomerCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripePaymentCustomerCreatingTaskRequestBody,
  ): Promise<ProcessStripePaymentCustomerCreatingTaskResponse>;
}

export abstract class ListStripePaymentCustomerCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripePaymentCustomerCreatingTasksRequestBody,
  ): Promise<ListStripePaymentCustomerCreatingTasksResponse>;
}

export abstract class ProcessStripeConnectedAccountCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeConnectedAccountCreatingTaskRequestBody,
  ): Promise<ProcessStripeConnectedAccountCreatingTaskResponse>;
}

export abstract class ListStripeConnectedAccountCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeConnectedAccountCreatingTasksRequestBody,
  ): Promise<ListStripeConnectedAccountCreatingTasksResponse>;
}

export abstract class ProcessStripeConnectedAccountNeedsSetupNotifyingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody,
  ): Promise<ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse>;
}

export abstract class ListStripeConnectedAccountNeedsSetupNotifyingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody,
  ): Promise<ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse>;
}

export abstract class ProcessPaymentTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentTaskRequestBody,
  ): Promise<ProcessPaymentTaskResponse>;
}

export abstract class ListPaymentTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentTasksRequestBody,
  ): Promise<ListPaymentTasksResponse>;
}

export abstract class ProcessPaymentMethodNeedsUpdateNotifyingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody,
  ): Promise<ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse>;
}

export abstract class ListPaymentMethodNeedsUpdateNotifyingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody,
  ): Promise<ListPaymentMethodNeedsUpdateNotifyingTasksResponse>;
}

export abstract class ProcessBillingProfileSuspendingDueToPastDueTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody,
  ): Promise<ProcessBillingProfileSuspendingDueToPastDueTaskResponse>;
}

export abstract class ListBillingProfileSuspendingDueToPastDueTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingProfileSuspendingDueToPastDueTasksRequestBody,
  ): Promise<ListBillingProfileSuspendingDueToPastDueTasksResponse>;
}

export abstract class ProcessBillingProfileSuspensionNotifyingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingProfileSuspensionNotifyingTaskRequestBody,
  ): Promise<ProcessBillingProfileSuspensionNotifyingTaskResponse>;
}

export abstract class ListBillingProfileSuspensionNotifyingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingProfileSuspensionNotifyingTasksRequestBody,
  ): Promise<ListBillingProfileSuspensionNotifyingTasksResponse>;
}

export abstract class ProcessBillingProfileStateSyncingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingProfileStateSyncingTaskRequestBody,
  ): Promise<ProcessBillingProfileStateSyncingTaskResponse>;
}

export abstract class ListBillingProfileStateSyncingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLING_PROFILE_STATE_SYNCING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingProfileStateSyncingTasksRequestBody,
  ): Promise<ListBillingProfileStateSyncingTasksResponse>;
}

export abstract class ProcessPayoutTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYOUT_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPayoutTaskRequestBody,
  ): Promise<ProcessPayoutTaskResponse>;
}

export abstract class ListPayoutTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYOUT_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPayoutTasksRequestBody,
  ): Promise<ListPayoutTasksResponse>;
}
