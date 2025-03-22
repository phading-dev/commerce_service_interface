import { GenerateTransactionStatementRequestBody, GenerateTransactionStatementResponse, GENERATE_TRANSACTION_STATEMENT, CreateBillingProfileRequestBody, CreateBillingProfileResponse, CREATE_BILLING_PROFILE, CreateEarningsProfileRequestBody, CreateEarningsProfileResponse, CREATE_EARNINGS_PROFILE, ProcessStripePaymentCustomerCreatingTaskRequestBody, ProcessStripePaymentCustomerCreatingTaskResponse, PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK, ListStripePaymentCustomerCreatingTasksRequestBody, ListStripePaymentCustomerCreatingTasksResponse, LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS, ProcessStripeConnectedAccountCreatingTaskRequestBody, ProcessStripeConnectedAccountCreatingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ListStripeConnectedAccountCreatingTasksRequestBody, ListStripeConnectedAccountCreatingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ProcessPaymentTaskRequestBody, ProcessPaymentTaskResponse, PROCESS_PAYMENT_TASK, ListPaymentTasksRequestBody, ListPaymentTasksResponse, LIST_PAYMENT_TASKS, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody, ProcessBillingProfileSuspendingDueToPastDueTaskResponse, PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ListBillingProfileSuspendingDueToPastDueTasksRequestBody, ListBillingProfileSuspendingDueToPastDueTasksResponse, LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ProcessBillingProfileSuspensionNotifyingTaskRequestBody, ProcessBillingProfileSuspensionNotifyingTaskResponse, PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK, ListBillingProfileSuspensionNotifyingTasksRequestBody, ListBillingProfileSuspensionNotifyingTasksResponse, LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS, ProcessBillingProfileStateSyncingTaskRequestBody, ProcessBillingProfileStateSyncingTaskResponse, PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK, ListBillingProfileStateSyncingTasksRequestBody, ListBillingProfileStateSyncingTasksResponse, LIST_BILLING_PROFILE_STATE_SYNCING_TASKS, ProcessPayoutTaskRequestBody, ProcessPayoutTaskResponse, PROCESS_PAYOUT_TASK, ListPayoutTasksRequestBody, ListPayoutTasksResponse, LIST_PAYOUT_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGenerateTransactionStatementRequest(
  body: GenerateTransactionStatementRequestBody,
): ClientRequestInterface<GenerateTransactionStatementResponse> {
  return {
    descriptor: GENERATE_TRANSACTION_STATEMENT,
    body,
  };
}

export function newCreateBillingProfileRequest(
  body: CreateBillingProfileRequestBody,
): ClientRequestInterface<CreateBillingProfileResponse> {
  return {
    descriptor: CREATE_BILLING_PROFILE,
    body,
  };
}

export function newCreateEarningsProfileRequest(
  body: CreateEarningsProfileRequestBody,
): ClientRequestInterface<CreateEarningsProfileResponse> {
  return {
    descriptor: CREATE_EARNINGS_PROFILE,
    body,
  };
}

export function newProcessStripePaymentCustomerCreatingTaskRequest(
  body: ProcessStripePaymentCustomerCreatingTaskRequestBody,
): ClientRequestInterface<ProcessStripePaymentCustomerCreatingTaskResponse> {
  return {
    descriptor: PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK,
    body,
  };
}

export function newListStripePaymentCustomerCreatingTasksRequest(
  body: ListStripePaymentCustomerCreatingTasksRequestBody,
): ClientRequestInterface<ListStripePaymentCustomerCreatingTasksResponse> {
  return {
    descriptor: LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS,
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

export function newProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequest(
  body: ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK,
    body,
  };
}

export function newListStripeConnectedAccountNeedsSetupNotifyingTasksRequest(
  body: ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody,
): ClientRequestInterface<ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse> {
  return {
    descriptor: LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS,
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

export function newProcessPaymentMethodNeedsUpdateNotifyingTaskRequest(
  body: ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK,
    body,
  };
}

export function newListPaymentMethodNeedsUpdateNotifyingTasksRequest(
  body: ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody,
): ClientRequestInterface<ListPaymentMethodNeedsUpdateNotifyingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessBillingProfileSuspendingDueToPastDueTaskRequest(
  body: ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody,
): ClientRequestInterface<ProcessBillingProfileSuspendingDueToPastDueTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK,
    body,
  };
}

export function newListBillingProfileSuspendingDueToPastDueTasksRequest(
  body: ListBillingProfileSuspendingDueToPastDueTasksRequestBody,
): ClientRequestInterface<ListBillingProfileSuspendingDueToPastDueTasksResponse> {
  return {
    descriptor: LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS,
    body,
  };
}

export function newProcessBillingProfileSuspensionNotifyingTaskRequest(
  body: ProcessBillingProfileSuspensionNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessBillingProfileSuspensionNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK,
    body,
  };
}

export function newListBillingProfileSuspensionNotifyingTasksRequest(
  body: ListBillingProfileSuspensionNotifyingTasksRequestBody,
): ClientRequestInterface<ListBillingProfileSuspensionNotifyingTasksResponse> {
  return {
    descriptor: LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessBillingProfileStateSyncingTaskRequest(
  body: ProcessBillingProfileStateSyncingTaskRequestBody,
): ClientRequestInterface<ProcessBillingProfileStateSyncingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK,
    body,
  };
}

export function newListBillingProfileStateSyncingTasksRequest(
  body: ListBillingProfileStateSyncingTasksRequestBody,
): ClientRequestInterface<ListBillingProfileStateSyncingTasksResponse> {
  return {
    descriptor: LIST_BILLING_PROFILE_STATE_SYNCING_TASKS,
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
