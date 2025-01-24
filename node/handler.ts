import { ReportBillingRequestBody, REPORT_BILLING, ReportBillingResponse, ReportEarningsRequestBody, REPORT_EARNINGS, ReportEarningsResponse, CreateBillingAccountRequestBody, CREATE_BILLING_ACCOUNT, CreateBillingAccountResponse, CreateEarningsAccountRequestBody, CREATE_EARNINGS_ACCOUNT, CreateEarningsAccountResponse, ProcessStripeCustomerCreatingTaskRequestBody, PROCESS_STRIPE_CUSTOMER_CREATING_TASK, ProcessStripeCustomerCreatingTaskResponse, ListStripeCustomerCreatingTasksRequestBody, LIST_STRIPE_CUSTOMER_CREATING_TASKS, ListStripeCustomerCreatingTasksResponse, ProcessPaymentTaskRequestBody, PROCESS_PAYMENT_TASK, ProcessPaymentTaskResponse, ListPaymentTasksRequestBody, LIST_PAYMENT_TASKS, ListPaymentTasksResponse, ProcessUpdatePaymentMethodNotifyingTaskRequestBody, PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK, ProcessUpdatePaymentMethodNotifyingTaskResponse, ListUpdatePaymentMethodNotifyingTasksRequestBody, LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS, ListUpdatePaymentMethodNotifyingTasksResponse, ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody, PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK, ProcessBillingAccountSuspendingDueToPastDueTaskResponse, ListBillingAccountSuspendingDueToPastDueTasksRequestBody, LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ListBillingAccountSuspendingDueToPastDueTasksResponse, ProcessBillingAccountSuspensionNotifyingTaskRequestBody, PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK, ProcessBillingAccountSuspensionNotifyingTaskResponse, ListBillingAccountSuspensionNotifyingTasksRequestBody, LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS, ListBillingAccountSuspensionNotifyingTasksResponse, ProcessBillingAccountStateSyncingTaskRequestBody, PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK, ProcessBillingAccountStateSyncingTaskResponse, ListBillingAccountStateSyncingTasksRequestBody, LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS, ListBillingAccountStateSyncingTasksResponse, ProcessStripeConnectedAccountCreatingTaskRequestBody, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ProcessStripeConnectedAccountCreatingTaskResponse, ListStripeConnectedAccountCreatingTasksRequestBody, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ListStripeConnectedAccountCreatingTasksResponse, ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody, PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK, ProcessSetupStripeConnectedAccountNotifyingTaskResponse, ListSetupStripeConnectedAccountNotifyingTasksRequestBody, LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS, ListSetupStripeConnectedAccountNotifyingTasksResponse, ProcessPayoutTaskRequestBody, PROCESS_PAYOUT_TASK, ProcessPayoutTaskResponse, ListPayoutTasksRequestBody, LIST_PAYOUT_TASKS, ListPayoutTasksResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class ReportBillingHandlerInterface implements NodeHandlerInterface {
  public descriptor = REPORT_BILLING;
  public abstract handle(
    loggingPrefix: string,
    body: ReportBillingRequestBody,
  ): Promise<ReportBillingResponse>;
}

export abstract class ReportEarningsHandlerInterface implements NodeHandlerInterface {
  public descriptor = REPORT_EARNINGS;
  public abstract handle(
    loggingPrefix: string,
    body: ReportEarningsRequestBody,
  ): Promise<ReportEarningsResponse>;
}

export abstract class CreateBillingAccountHandlerInterface implements NodeHandlerInterface {
  public descriptor = CREATE_BILLING_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateBillingAccountRequestBody,
  ): Promise<CreateBillingAccountResponse>;
}

export abstract class CreateEarningsAccountHandlerInterface implements NodeHandlerInterface {
  public descriptor = CREATE_EARNINGS_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateEarningsAccountRequestBody,
  ): Promise<CreateEarningsAccountResponse>;
}

export abstract class ProcessStripeCustomerCreatingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_STRIPE_CUSTOMER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeCustomerCreatingTaskRequestBody,
  ): Promise<ProcessStripeCustomerCreatingTaskResponse>;
}

export abstract class ListStripeCustomerCreatingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_STRIPE_CUSTOMER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeCustomerCreatingTasksRequestBody,
  ): Promise<ListStripeCustomerCreatingTasksResponse>;
}

export abstract class ProcessPaymentTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_PAYMENT_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentTaskRequestBody,
  ): Promise<ProcessPaymentTaskResponse>;
}

export abstract class ListPaymentTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_PAYMENT_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentTasksRequestBody,
  ): Promise<ListPaymentTasksResponse>;
}

export abstract class ProcessUpdatePaymentMethodNotifyingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessUpdatePaymentMethodNotifyingTaskRequestBody,
  ): Promise<ProcessUpdatePaymentMethodNotifyingTaskResponse>;
}

export abstract class ListUpdatePaymentMethodNotifyingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListUpdatePaymentMethodNotifyingTasksRequestBody,
  ): Promise<ListUpdatePaymentMethodNotifyingTasksResponse>;
}

export abstract class ProcessBillingAccountSuspendingDueToPastDueTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody,
  ): Promise<ProcessBillingAccountSuspendingDueToPastDueTaskResponse>;
}

export abstract class ListBillingAccountSuspendingDueToPastDueTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingAccountSuspendingDueToPastDueTasksRequestBody,
  ): Promise<ListBillingAccountSuspendingDueToPastDueTasksResponse>;
}

export abstract class ProcessBillingAccountSuspensionNotifyingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingAccountSuspensionNotifyingTaskRequestBody,
  ): Promise<ProcessBillingAccountSuspensionNotifyingTaskResponse>;
}

export abstract class ListBillingAccountSuspensionNotifyingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingAccountSuspensionNotifyingTasksRequestBody,
  ): Promise<ListBillingAccountSuspensionNotifyingTasksResponse>;
}

export abstract class ProcessBillingAccountStateSyncingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingAccountStateSyncingTaskRequestBody,
  ): Promise<ProcessBillingAccountStateSyncingTaskResponse>;
}

export abstract class ListBillingAccountStateSyncingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingAccountStateSyncingTasksRequestBody,
  ): Promise<ListBillingAccountStateSyncingTasksResponse>;
}

export abstract class ProcessStripeConnectedAccountCreatingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStripeConnectedAccountCreatingTaskRequestBody,
  ): Promise<ProcessStripeConnectedAccountCreatingTaskResponse>;
}

export abstract class ListStripeConnectedAccountCreatingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStripeConnectedAccountCreatingTasksRequestBody,
  ): Promise<ListStripeConnectedAccountCreatingTasksResponse>;
}

export abstract class ProcessSetupStripeConnectedAccountNotifyingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody,
  ): Promise<ProcessSetupStripeConnectedAccountNotifyingTaskResponse>;
}

export abstract class ListSetupStripeConnectedAccountNotifyingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSetupStripeConnectedAccountNotifyingTasksRequestBody,
  ): Promise<ListSetupStripeConnectedAccountNotifyingTasksResponse>;
}

export abstract class ProcessPayoutTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_PAYOUT_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPayoutTaskRequestBody,
  ): Promise<ProcessPayoutTaskResponse>;
}

export abstract class ListPayoutTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_PAYOUT_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPayoutTasksRequestBody,
  ): Promise<ListPayoutTasksResponse>;
}
