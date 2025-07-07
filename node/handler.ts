import { GenerateTransactionStatementRequestBody, GENERATE_TRANSACTION_STATEMENT, GenerateTransactionStatementResponse, CreatePaymentProfileRequestBody, CREATE_PAYMENT_PROFILE, CreatePaymentProfileResponse, CreatePayoutProfileRequestBody, CREATE_PAYOUT_PROFILE, CreatePayoutProfileResponse, ProcessStripeCustomerCreatingTaskRequestBody, PROCESS_STRIPE_CUSTOMER_CREATING_TASK, ProcessStripeCustomerCreatingTaskResponse, ListStripeCustomerCreatingTasksRequestBody, LIST_STRIPE_CUSTOMER_CREATING_TASKS, ListStripeCustomerCreatingTasksResponse, ProcessInitCreditGrantingTaskRequestBody, PROCESS_INIT_CREDIT_GRANTING_TASK, ProcessInitCreditGrantingTaskResponse, ListInitCreditGrantingTasksRequestBody, LIST_INIT_CREDIT_GRANTING_TASKS, ListInitCreditGrantingTasksResponse, ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK, ProcessStripeConnectedAccountForPayoutCreatingTaskResponse, ListStripeConnectedAccountForPayoutCreatingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS, ListStripeConnectedAccountForPayoutCreatingTasksResponse, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, ProcessPaymentStripeInvoiceCreatingTaskRequestBody, PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK, ProcessPaymentStripeInvoiceCreatingTaskResponse, ListPaymentStripeInvoiceCreatingTasksRequestBody, LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS, ListPaymentStripeInvoiceCreatingTasksResponse, ProcessPaymentStripeInvoicePayingTaskRequestBody, PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK, ProcessPaymentStripeInvoicePayingTaskResponse, ListPaymentStripeInvoicePayingTasksRequestBody, LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS, ListPaymentStripeInvoicePayingTasksResponse, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody, PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ProcessPaymentProfileSuspendingDueToPastDueTaskResponse, ListPaymentProfileSuspendingDueToPastDueTasksRequestBody, LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ListPaymentProfileSuspendingDueToPastDueTasksResponse, ProcessPaymentProfileSuspensionNotifyingTaskRequestBody, PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK, ProcessPaymentProfileSuspensionNotifyingTaskResponse, ListPaymentProfileSuspensionNotifyingTasksRequestBody, LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS, ListPaymentProfileSuspensionNotifyingTasksResponse, ProcessPaymentProfileStateSyncingTaskRequestBody, PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK, ProcessPaymentProfileStateSyncingTaskResponse, ListPaymentProfileStateSyncingTasksRequestBody, LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS, ListPaymentProfileStateSyncingTasksResponse, ProcessPayoutStripeTransferCreatingTaskRequestBody, PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK, ProcessPayoutStripeTransferCreatingTaskResponse, ListPayoutStripeTransferCreatingTasksRequestBody, LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS, ListPayoutStripeTransferCreatingTasksResponse } from './interface';
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

export abstract class ProcessStripeCustomerCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STRIPE_CUSTOMER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeCustomerCreatingTaskRequestBody,
  ): Promise<ProcessStripeCustomerCreatingTaskResponse>;
}

export abstract class ListStripeCustomerCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STRIPE_CUSTOMER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeCustomerCreatingTasksRequestBody,
  ): Promise<ListStripeCustomerCreatingTasksResponse>;
}

export abstract class ProcessInitCreditGrantingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_INIT_CREDIT_GRANTING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessInitCreditGrantingTaskRequestBody,
  ): Promise<ProcessInitCreditGrantingTaskResponse>;
}

export abstract class ListInitCreditGrantingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_INIT_CREDIT_GRANTING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListInitCreditGrantingTasksRequestBody,
  ): Promise<ListInitCreditGrantingTasksResponse>;
}

export abstract class ProcessStripeConnectedAccountForPayoutCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody,
  ): Promise<ProcessStripeConnectedAccountForPayoutCreatingTaskResponse>;
}

export abstract class ListStripeConnectedAccountForPayoutCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeConnectedAccountForPayoutCreatingTasksRequestBody,
  ): Promise<ListStripeConnectedAccountForPayoutCreatingTasksResponse>;
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

export abstract class ProcessPaymentStripeInvoiceCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentStripeInvoiceCreatingTaskRequestBody,
  ): Promise<ProcessPaymentStripeInvoiceCreatingTaskResponse>;
}

export abstract class ListPaymentStripeInvoiceCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentStripeInvoiceCreatingTasksRequestBody,
  ): Promise<ListPaymentStripeInvoiceCreatingTasksResponse>;
}

export abstract class ProcessPaymentStripeInvoicePayingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentStripeInvoicePayingTaskRequestBody,
  ): Promise<ProcessPaymentStripeInvoicePayingTaskResponse>;
}

export abstract class ListPaymentStripeInvoicePayingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentStripeInvoicePayingTasksRequestBody,
  ): Promise<ListPaymentStripeInvoicePayingTasksResponse>;
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

export abstract class ProcessPayoutStripeTransferCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPayoutStripeTransferCreatingTaskRequestBody,
  ): Promise<ProcessPayoutStripeTransferCreatingTaskResponse>;
}

export abstract class ListPayoutStripeTransferCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPayoutStripeTransferCreatingTasksRequestBody,
  ): Promise<ListPayoutStripeTransferCreatingTasksResponse>;
}
