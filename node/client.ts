import { GenerateTransactionStatementRequestBody, GenerateTransactionStatementResponse, GENERATE_TRANSACTION_STATEMENT, CreatePaymentProfileRequestBody, CreatePaymentProfileResponse, CREATE_PAYMENT_PROFILE, CreatePayoutProfileRequestBody, CreatePayoutProfileResponse, CREATE_PAYOUT_PROFILE, ProcessStripeCustomerCreatingTaskRequestBody, ProcessStripeCustomerCreatingTaskResponse, PROCESS_STRIPE_CUSTOMER_CREATING_TASK, ListStripeCustomerCreatingTasksRequestBody, ListStripeCustomerCreatingTasksResponse, LIST_STRIPE_CUSTOMER_CREATING_TASKS, ProcessInitCreditGrantingTaskRequestBody, ProcessInitCreditGrantingTaskResponse, PROCESS_INIT_CREDIT_GRANTING_TASK, ListInitCreditGrantingTasksRequestBody, ListInitCreditGrantingTasksResponse, LIST_INIT_CREDIT_GRANTING_TASKS, ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody, ProcessStripeConnectedAccountForPayoutCreatingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK, ListStripeConnectedAccountForPayoutCreatingTasksRequestBody, ListStripeConnectedAccountForPayoutCreatingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody, ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK, ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody, ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS, ProcessPaymentStripeInvoiceCreatingTaskRequestBody, ProcessPaymentStripeInvoiceCreatingTaskResponse, PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK, ListPaymentStripeInvoiceCreatingTasksRequestBody, ListPaymentStripeInvoiceCreatingTasksResponse, LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS, ProcessPaymentStripeInvoicePayingTaskRequestBody, ProcessPaymentStripeInvoicePayingTaskResponse, PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK, ListPaymentStripeInvoicePayingTasksRequestBody, ListPaymentStripeInvoicePayingTasksResponse, LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS, ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody, ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse, PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK, ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody, ListPaymentMethodNeedsUpdateNotifyingTasksResponse, LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS, ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody, ProcessPaymentProfileSuspendingDueToPastDueTaskResponse, PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK, ListPaymentProfileSuspendingDueToPastDueTasksRequestBody, ListPaymentProfileSuspendingDueToPastDueTasksResponse, LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ProcessPaymentProfileSuspensionNotifyingTaskRequestBody, ProcessPaymentProfileSuspensionNotifyingTaskResponse, PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK, ListPaymentProfileSuspensionNotifyingTasksRequestBody, ListPaymentProfileSuspensionNotifyingTasksResponse, LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS, ProcessPaymentProfileStateSyncingTaskRequestBody, ProcessPaymentProfileStateSyncingTaskResponse, PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK, ListPaymentProfileStateSyncingTasksRequestBody, ListPaymentProfileStateSyncingTasksResponse, LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS, ProcessPayoutStripeTransferCreatingTaskRequestBody, ProcessPayoutStripeTransferCreatingTaskResponse, PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK, ListPayoutStripeTransferCreatingTasksRequestBody, ListPayoutStripeTransferCreatingTasksResponse, LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS } from './interface';
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

export function newProcessInitCreditGrantingTaskRequest(
  body: ProcessInitCreditGrantingTaskRequestBody,
): ClientRequestInterface<ProcessInitCreditGrantingTaskResponse> {
  return {
    descriptor: PROCESS_INIT_CREDIT_GRANTING_TASK,
    body,
  };
}

export function newListInitCreditGrantingTasksRequest(
  body: ListInitCreditGrantingTasksRequestBody,
): ClientRequestInterface<ListInitCreditGrantingTasksResponse> {
  return {
    descriptor: LIST_INIT_CREDIT_GRANTING_TASKS,
    body,
  };
}

export function newProcessStripeConnectedAccountForPayoutCreatingTaskRequest(
  body: ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody,
): ClientRequestInterface<ProcessStripeConnectedAccountForPayoutCreatingTaskResponse> {
  return {
    descriptor: PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK,
    body,
  };
}

export function newListStripeConnectedAccountForPayoutCreatingTasksRequest(
  body: ListStripeConnectedAccountForPayoutCreatingTasksRequestBody,
): ClientRequestInterface<ListStripeConnectedAccountForPayoutCreatingTasksResponse> {
  return {
    descriptor: LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS,
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

export function newProcessPaymentStripeInvoiceCreatingTaskRequest(
  body: ProcessPaymentStripeInvoiceCreatingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentStripeInvoiceCreatingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK,
    body,
  };
}

export function newListPaymentStripeInvoiceCreatingTasksRequest(
  body: ListPaymentStripeInvoiceCreatingTasksRequestBody,
): ClientRequestInterface<ListPaymentStripeInvoiceCreatingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS,
    body,
  };
}

export function newProcessPaymentStripeInvoicePayingTaskRequest(
  body: ProcessPaymentStripeInvoicePayingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentStripeInvoicePayingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK,
    body,
  };
}

export function newListPaymentStripeInvoicePayingTasksRequest(
  body: ListPaymentStripeInvoicePayingTasksRequestBody,
): ClientRequestInterface<ListPaymentStripeInvoicePayingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS,
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

export function newProcessPayoutStripeTransferCreatingTaskRequest(
  body: ProcessPayoutStripeTransferCreatingTaskRequestBody,
): ClientRequestInterface<ProcessPayoutStripeTransferCreatingTaskResponse> {
  return {
    descriptor: PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK,
    body,
  };
}

export function newListPayoutStripeTransferCreatingTasksRequest(
  body: ListPayoutStripeTransferCreatingTasksRequestBody,
): ClientRequestInterface<ListPayoutStripeTransferCreatingTasksResponse> {
  return {
    descriptor: LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS,
    body,
  };
}
