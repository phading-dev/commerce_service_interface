import { GenerateTransactionStatementRequestBody, GenerateTransactionStatementResponse, GENERATE_TRANSACTION_STATEMENT, CreatePaymentProfileRequestBody, CreatePaymentProfileResponse, CREATE_PAYMENT_PROFILE, CreatePayoutProfileRequestBody, CreatePayoutProfileResponse, CREATE_PAYOUT_PROFILE, ProcessStripePaymentCustomerCreatingTaskRequestBody, ProcessStripePaymentCustomerCreatingTaskResponse, PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK, ListStripePaymentCustomerCreatingTasksRequestBody, ListStripePaymentCustomerCreatingTasksResponse, LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS, ProcessInitPaymentCreditGrantingTaskRequestBody, ProcessInitPaymentCreditGrantingTaskResponse, PROCESS_INIT_PAYMENT_CREDIT_GRANTING_TASK, ListInitPaymentCreditGrantingTasksRequestBody, ListInitPaymentCreditGrantingTasksResponse, LIST_INIT_PAYMENT_CREDIT_GRANTING_TASKS, ProcessStripeConnectedAccountCreatingTaskRequestBody, ProcessStripeConnectedAccountCreatingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ListStripeConnectedAccountCreatingTasksRequestBody, ListStripeConnectedAccountCreatingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ProcessPaymentTaskRequestBody, ProcessPaymentTaskResponse, PROCESS_PAYMENT_TASK, ListPaymentTasksRequestBody, ListPaymentTasksResponse, LIST_PAYMENT_TASKS, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody, ProcessPaymentProfileSuspendingDueToPastDueTaskResponse, PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ListPaymentProfileSuspendingDueToPastDueTasksRequestBody, ListPaymentProfileSuspendingDueToPastDueTasksResponse, LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ProcessPaymentProfileSuspensionNotifyingTaskRequestBody, ProcessPaymentProfileSuspensionNotifyingTaskResponse, PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK, ListPaymentProfileSuspensionNotifyingTasksRequestBody, ListPaymentProfileSuspensionNotifyingTasksResponse, LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS, ProcessPaymentProfileStateSyncingTaskRequestBody, ProcessPaymentProfileStateSyncingTaskResponse, PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK, ListPaymentProfileStateSyncingTasksRequestBody, ListPaymentProfileStateSyncingTasksResponse, LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS, ProcessPayoutTaskRequestBody, ProcessPayoutTaskResponse, PROCESS_PAYOUT_TASK, ListPayoutTasksRequestBody, ListPayoutTasksResponse, LIST_PAYOUT_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGenerateTransactionStatementRequest(
  body: GenerateTransactionStatementRequestBody,
): ClientRequestInterface<GenerateTransactionStatementResponse> {
  return {
    descriptor: GENERATE_TRANSACTION_STATEMENT,
    body,
  };
}

export function newCreatePaymentProfileRequest(
  body: CreatePaymentProfileRequestBody,
): ClientRequestInterface<CreatePaymentProfileResponse> {
  return {
    descriptor: CREATE_PAYMENT_PROFILE,
    body,
  };
}

export function newCreatePayoutProfileRequest(
  body: CreatePayoutProfileRequestBody,
): ClientRequestInterface<CreatePayoutProfileResponse> {
  return {
    descriptor: CREATE_PAYOUT_PROFILE,
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

export function newProcessInitPaymentCreditGrantingTaskRequest(
  body: ProcessInitPaymentCreditGrantingTaskRequestBody,
): ClientRequestInterface<ProcessInitPaymentCreditGrantingTaskResponse> {
  return {
    descriptor: PROCESS_INIT_PAYMENT_CREDIT_GRANTING_TASK,
    body,
  };
}

export function newListInitPaymentCreditGrantingTasksRequest(
  body: ListInitPaymentCreditGrantingTasksRequestBody,
): ClientRequestInterface<ListInitPaymentCreditGrantingTasksResponse> {
  return {
    descriptor: LIST_INIT_PAYMENT_CREDIT_GRANTING_TASKS,
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

export function newProcessPaymentProfileSuspendingDueToPastDueTaskRequest(
  body: ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody,
): ClientRequestInterface<ProcessPaymentProfileSuspendingDueToPastDueTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK,
    body,
  };
}

export function newListPaymentProfileSuspendingDueToPastDueTasksRequest(
  body: ListPaymentProfileSuspendingDueToPastDueTasksRequestBody,
): ClientRequestInterface<ListPaymentProfileSuspendingDueToPastDueTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS,
    body,
  };
}

export function newProcessPaymentProfileSuspensionNotifyingTaskRequest(
  body: ProcessPaymentProfileSuspensionNotifyingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentProfileSuspensionNotifyingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK,
    body,
  };
}

export function newListPaymentProfileSuspensionNotifyingTasksRequest(
  body: ListPaymentProfileSuspensionNotifyingTasksRequestBody,
): ClientRequestInterface<ListPaymentProfileSuspensionNotifyingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS,
    body,
  };
}

export function newProcessPaymentProfileStateSyncingTaskRequest(
  body: ProcessPaymentProfileStateSyncingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentProfileStateSyncingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK,
    body,
  };
}

export function newListPaymentProfileStateSyncingTasksRequest(
  body: ListPaymentProfileStateSyncingTasksRequestBody,
): ClientRequestInterface<ListPaymentProfileStateSyncingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS,
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
