import { GenerateTransactionStatementRequestBody, GENERATE_TRANSACTION_STATEMENT, GenerateTransactionStatementResponse, CreatePaymentProfileRequestBody, CREATE_PAYMENT_PROFILE, CreatePaymentProfileResponse, CreatePayoutProfileRequestBody, CREATE_PAYOUT_PROFILE, CreatePayoutProfileResponse, ProcessStripePaymentCustomerCreatingTaskRequestBody, PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK, ProcessStripePaymentCustomerCreatingTaskResponse, ListStripePaymentCustomerCreatingTasksRequestBody, LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS, ListStripePaymentCustomerCreatingTasksResponse, ProcessInitPaymentCreditGrantingTaskRequestBody, PROCESS_INIT_PAYMENT_CREDIT_GRANTING_TASK, ProcessInitPaymentCreditGrantingTaskResponse, ListInitPaymentCreditGrantingTasksRequestBody, LIST_INIT_PAYMENT_CREDIT_GRANTING_TASKS, ListInitPaymentCreditGrantingTasksResponse, ProcessStripeConnectedAccountCreatingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ProcessStripeConnectedAccountCreatingTaskResponse, ListStripeConnectedAccountCreatingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ListStripeConnectedAccountCreatingTasksResponse, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, ProcessPaymentTaskRequestBody, PROCESS_PAYMENT_TASK, ProcessPaymentTaskResponse, ListPaymentTasksRequestBody, LIST_PAYMENT_TASKS, ListPaymentTasksResponse, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody, PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ProcessPaymentProfileSuspendingDueToPastDueTaskResponse, ListPaymentProfileSuspendingDueToPastDueTasksRequestBody, LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ListPaymentProfileSuspendingDueToPastDueTasksResponse, ProcessPaymentProfileSuspensionNotifyingTaskRequestBody, PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK, ProcessPaymentProfileSuspensionNotifyingTaskResponse, ListPaymentProfileSuspensionNotifyingTasksRequestBody, LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS, ListPaymentProfileSuspensionNotifyingTasksResponse, ProcessPaymentProfileStateSyncingTaskRequestBody, PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK, ProcessPaymentProfileStateSyncingTaskResponse, ListPaymentProfileStateSyncingTasksRequestBody, LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS, ListPaymentProfileStateSyncingTasksResponse, ProcessPayoutTaskRequestBody, PROCESS_PAYOUT_TASK, ProcessPayoutTaskResponse, ListPayoutTasksRequestBody, LIST_PAYOUT_TASKS, ListPayoutTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GenerateTransactionStatementHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GENERATE_TRANSACTION_STATEMENT;
  public abstract handle(
    loggingPrefix: string,
    body: GenerateTransactionStatementRequestBody,
  ): Promise<GenerateTransactionStatementResponse>;
}

export abstract class CreatePaymentProfileHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_PAYMENT_PROFILE;
  public abstract handle(
    loggingPrefix: string,
    body: CreatePaymentProfileRequestBody,
  ): Promise<CreatePaymentProfileResponse>;
}

export abstract class CreatePayoutProfileHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_PAYOUT_PROFILE;
  public abstract handle(
    loggingPrefix: string,
    body: CreatePayoutProfileRequestBody,
  ): Promise<CreatePayoutProfileResponse>;
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

export abstract class ProcessInitPaymentCreditGrantingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_INIT_PAYMENT_CREDIT_GRANTING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessInitPaymentCreditGrantingTaskRequestBody,
  ): Promise<ProcessInitPaymentCreditGrantingTaskResponse>;
}

export abstract class ListInitPaymentCreditGrantingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_INIT_PAYMENT_CREDIT_GRANTING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListInitPaymentCreditGrantingTasksRequestBody,
  ): Promise<ListInitPaymentCreditGrantingTasksResponse>;
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

export abstract class ProcessPaymentProfileSuspendingDueToPastDueTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody,
  ): Promise<ProcessPaymentProfileSuspendingDueToPastDueTaskResponse>;
}

export abstract class ListPaymentProfileSuspendingDueToPastDueTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentProfileSuspendingDueToPastDueTasksRequestBody,
  ): Promise<ListPaymentProfileSuspendingDueToPastDueTasksResponse>;
}

export abstract class ProcessPaymentProfileSuspensionNotifyingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentProfileSuspensionNotifyingTaskRequestBody,
  ): Promise<ProcessPaymentProfileSuspensionNotifyingTaskResponse>;
}

export abstract class ListPaymentProfileSuspensionNotifyingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentProfileSuspensionNotifyingTasksRequestBody,
  ): Promise<ListPaymentProfileSuspensionNotifyingTasksResponse>;
}

export abstract class ProcessPaymentProfileStateSyncingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentProfileStateSyncingTaskRequestBody,
  ): Promise<ProcessPaymentProfileStateSyncingTaskResponse>;
}

export abstract class ListPaymentProfileStateSyncingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentProfileStateSyncingTasksRequestBody,
  ): Promise<ListPaymentProfileStateSyncingTasksResponse>;
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
