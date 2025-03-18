import { ReportBillingRequestBody, ReportBillingResponse, REPORT_BILLING, ReportEarningsRequestBody, ReportEarningsResponse, REPORT_EARNINGS, CreateBillingAccountRequestBody, CreateBillingAccountResponse, CREATE_BILLING_ACCOUNT, ProcessStripeCustomerCreatingTaskRequestBody, ProcessStripeCustomerCreatingTaskResponse, PROCESS_STRIPE_CUSTOMER_CREATING_TASK, ListStripeCustomerCreatingTasksRequestBody, ListStripeCustomerCreatingTasksResponse, LIST_STRIPE_CUSTOMER_CREATING_TASKS, ProcessPaymentTaskRequestBody, ProcessPaymentTaskResponse, PROCESS_PAYMENT_TASK, ListPaymentTasksRequestBody, ListPaymentTasksResponse, LIST_PAYMENT_TASKS, ProcessUpdatePaymentMethodNotifyingTaskRequestBody, ProcessUpdatePaymentMethodNotifyingTaskResponse, PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK, ListUpdatePaymentMethodNotifyingTasksRequestBody, ListUpdatePaymentMethodNotifyingTasksResponse, LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS, ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody, ProcessBillingAccountSuspendingDueToPastDueTaskResponse, PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK, ListBillingAccountSuspendingDueToPastDueTasksRequestBody, ListBillingAccountSuspendingDueToPastDueTasksResponse, LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ProcessBillingAccountSuspensionNotifyingTaskRequestBody, ProcessBillingAccountSuspensionNotifyingTaskResponse, PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK, ListBillingAccountSuspensionNotifyingTasksRequestBody, ListBillingAccountSuspensionNotifyingTasksResponse, LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS, ProcessBillingAccountStateSyncingTaskRequestBody, ProcessBillingAccountStateSyncingTaskResponse, PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK, ListBillingAccountStateSyncingTasksRequestBody, ListBillingAccountStateSyncingTasksResponse, LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS, ProcessStripeConnectedAccountCreatingTaskRequestBody, ProcessStripeConnectedAccountCreatingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ListStripeConnectedAccountCreatingTasksRequestBody, ListStripeConnectedAccountCreatingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody, ProcessSetupStripeConnectedAccountNotifyingTaskResponse, PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK, ListSetupStripeConnectedAccountNotifyingTasksRequestBody, ListSetupStripeConnectedAccountNotifyingTasksResponse, LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS, ProcessPayoutTaskRequestBody, ProcessPayoutTaskResponse, PROCESS_PAYOUT_TASK, ListPayoutTasksRequestBody, ListPayoutTasksResponse, LIST_PAYOUT_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newReportBillingRequest(
  body: ReportBillingRequestBody,
): ClientRequestInterface<ReportBillingResponse> {
  return {
    descriptor: REPORT_BILLING,
    body,
  };
}

export function newReportEarningsRequest(
  body: ReportEarningsRequestBody,
): ClientRequestInterface<ReportEarningsResponse> {
  return {
    descriptor: REPORT_EARNINGS,
    body,
  };
}

export function newCreateBillingAccountRequest(
  body: CreateBillingAccountRequestBody,
): ClientRequestInterface<CreateBillingAccountResponse> {
  return {
    descriptor: CREATE_BILLING_ACCOUNT,
    body,
  };
}

export function newProcessStripeCustomerCreatingTaskRequest(
  body: ProcessStripeCustomerCreatingTaskRequestBody,
): ClientRequestInterface<ProcessStripeCustomerCreatingTaskResponse> {
  return {
    descriptor: PROCESS_STRIPE_CUSTOMER_CREATING_TASK,
    body,
  };
}

export function newListStripeCustomerCreatingTasksRequest(
  body: ListStripeCustomerCreatingTasksRequestBody,
): ClientRequestInterface<ListStripeCustomerCreatingTasksResponse> {
  return {
    descriptor: LIST_STRIPE_CUSTOMER_CREATING_TASKS,
    body,
  };
}

export function newProcessPaymentTaskRequest(
  body: ProcessPaymentTaskRequestBody,
): ClientRequestInterface<ProcessPaymentTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_TASK,
    body,
  };
}

export function newListPaymentTasksRequest(
  body: ListPaymentTasksRequestBody,
): ClientRequestInterface<ListPaymentTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_TASKS,
    body,
  };
}

export function newProcessUpdatePaymentMethodNotifyingTaskRequest(
  body: ProcessUpdatePaymentMethodNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessUpdatePaymentMethodNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK,
    body,
  };
}

export function newListUpdatePaymentMethodNotifyingTasksRequest(
  body: ListUpdatePaymentMethodNotifyingTasksRequestBody,
): ClientRequestInterface<ListUpdatePaymentMethodNotifyingTasksResponse> {
  return {
    descriptor: LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessBillingAccountSuspendingDueToPastDueTaskRequest(
  body: ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody,
): ClientRequestInterface<ProcessBillingAccountSuspendingDueToPastDueTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK,
    body,
  };
}

export function newListBillingAccountSuspendingDueToPastDueTasksRequest(
  body: ListBillingAccountSuspendingDueToPastDueTasksRequestBody,
): ClientRequestInterface<ListBillingAccountSuspendingDueToPastDueTasksResponse> {
  return {
    descriptor: LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS,
    body,
  };
}

export function newProcessBillingAccountSuspensionNotifyingTaskRequest(
  body: ProcessBillingAccountSuspensionNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessBillingAccountSuspensionNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK,
    body,
  };
}

export function newListBillingAccountSuspensionNotifyingTasksRequest(
  body: ListBillingAccountSuspensionNotifyingTasksRequestBody,
): ClientRequestInterface<ListBillingAccountSuspensionNotifyingTasksResponse> {
  return {
    descriptor: LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessBillingAccountStateSyncingTaskRequest(
  body: ProcessBillingAccountStateSyncingTaskRequestBody,
): ClientRequestInterface<ProcessBillingAccountStateSyncingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK,
    body,
  };
}

export function newListBillingAccountStateSyncingTasksRequest(
  body: ListBillingAccountStateSyncingTasksRequestBody,
): ClientRequestInterface<ListBillingAccountStateSyncingTasksResponse> {
  return {
    descriptor: LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS,
    body,
  };
}

export function newProcessStripeConnectedAccountCreatingTaskRequest(
  body: ProcessStripeConnectedAccountCreatingTaskRequestBody,
): ClientRequestInterface<ProcessStripeConnectedAccountCreatingTaskResponse> {
  return {
    descriptor: PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK,
    body,
  };
}

export function newListStripeConnectedAccountCreatingTasksRequest(
  body: ListStripeConnectedAccountCreatingTasksRequestBody,
): ClientRequestInterface<ListStripeConnectedAccountCreatingTasksResponse> {
  return {
    descriptor: LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS,
    body,
  };
}

export function newProcessSetupStripeConnectedAccountNotifyingTaskRequest(
  body: ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessSetupStripeConnectedAccountNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK,
    body,
  };
}

export function newListSetupStripeConnectedAccountNotifyingTasksRequest(
  body: ListSetupStripeConnectedAccountNotifyingTasksRequestBody,
): ClientRequestInterface<ListSetupStripeConnectedAccountNotifyingTasksResponse> {
  return {
    descriptor: LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessPayoutTaskRequest(
  body: ProcessPayoutTaskRequestBody,
): ClientRequestInterface<ProcessPayoutTaskResponse> {
  return {
    descriptor: PROCESS_PAYOUT_TASK,
    body,
  };
}

export function newListPayoutTasksRequest(
  body: ListPayoutTasksRequestBody,
): ClientRequestInterface<ListPayoutTasksResponse> {
  return {
    descriptor: LIST_PAYOUT_TASKS,
    body,
  };
}
