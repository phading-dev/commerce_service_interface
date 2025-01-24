import { ReportBillingRequestBody, ReportBillingResponse, REPORT_BILLING, ReportEarningsRequestBody, ReportEarningsResponse, REPORT_EARNINGS, CreateBillingAccountRequestBody, CreateBillingAccountResponse, CREATE_BILLING_ACCOUNT, CreateEarningsAccountRequestBody, CreateEarningsAccountResponse, CREATE_EARNINGS_ACCOUNT, ProcessStripeCustomerCreatingTaskRequestBody, ProcessStripeCustomerCreatingTaskResponse, PROCESS_STRIPE_CUSTOMER_CREATING_TASK, ListStripeCustomerCreatingTasksRequestBody, ListStripeCustomerCreatingTasksResponse, LIST_STRIPE_CUSTOMER_CREATING_TASKS, ProcessPaymentTaskRequestBody, ProcessPaymentTaskResponse, PROCESS_PAYMENT_TASK, ListPaymentTasksRequestBody, ListPaymentTasksResponse, LIST_PAYMENT_TASKS, ProcessUpdatePaymentMethodNotifyingTaskRequestBody, ProcessUpdatePaymentMethodNotifyingTaskResponse, PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK, ListUpdatePaymentMethodNotifyingTasksRequestBody, ListUpdatePaymentMethodNotifyingTasksResponse, LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS, ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody, ProcessBillingAccountSuspendingDueToPastDueTaskResponse, PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK, ListBillingAccountSuspendingDueToPastDueTasksRequestBody, ListBillingAccountSuspendingDueToPastDueTasksResponse, LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS, ProcessBillingAccountSuspensionNotifyingTaskRequestBody, ProcessBillingAccountSuspensionNotifyingTaskResponse, PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK, ListBillingAccountSuspensionNotifyingTasksRequestBody, ListBillingAccountSuspensionNotifyingTasksResponse, LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS, ProcessBillingAccountStateSyncingTaskRequestBody, ProcessBillingAccountStateSyncingTaskResponse, PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK, ListBillingAccountStateSyncingTasksRequestBody, ListBillingAccountStateSyncingTasksResponse, LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS, ProcessStripeConnectedAccountCreatingTaskRequestBody, ProcessStripeConnectedAccountCreatingTaskResponse, PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK, ListStripeConnectedAccountCreatingTasksRequestBody, ListStripeConnectedAccountCreatingTasksResponse, LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS, ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody, ProcessSetupStripeConnectedAccountNotifyingTaskResponse, PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK, ListSetupStripeConnectedAccountNotifyingTasksRequestBody, ListSetupStripeConnectedAccountNotifyingTasksResponse, LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS, ProcessPayoutTaskRequestBody, ProcessPayoutTaskResponse, PROCESS_PAYOUT_TASK, ListPayoutTasksRequestBody, ListPayoutTasksResponse, LIST_PAYOUT_TASKS } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function reportBilling(
  client: NodeClientInterface,
  body: ReportBillingRequestBody,
  options?: NodeClientOptions,
): Promise<ReportBillingResponse> {
  return client.send(
    {
      descriptor: REPORT_BILLING,
      body,
    },
    options,
  );
}

export function reportEarnings(
  client: NodeClientInterface,
  body: ReportEarningsRequestBody,
  options?: NodeClientOptions,
): Promise<ReportEarningsResponse> {
  return client.send(
    {
      descriptor: REPORT_EARNINGS,
      body,
    },
    options,
  );
}

export function createBillingAccount(
  client: NodeClientInterface,
  body: CreateBillingAccountRequestBody,
  options?: NodeClientOptions,
): Promise<CreateBillingAccountResponse> {
  return client.send(
    {
      descriptor: CREATE_BILLING_ACCOUNT,
      body,
    },
    options,
  );
}

export function createEarningsAccount(
  client: NodeClientInterface,
  body: CreateEarningsAccountRequestBody,
  options?: NodeClientOptions,
): Promise<CreateEarningsAccountResponse> {
  return client.send(
    {
      descriptor: CREATE_EARNINGS_ACCOUNT,
      body,
    },
    options,
  );
}

export function processStripeCustomerCreatingTask(
  client: NodeClientInterface,
  body: ProcessStripeCustomerCreatingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessStripeCustomerCreatingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_STRIPE_CUSTOMER_CREATING_TASK,
      body,
    },
    options,
  );
}

export function listStripeCustomerCreatingTasks(
  client: NodeClientInterface,
  body: ListStripeCustomerCreatingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListStripeCustomerCreatingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_STRIPE_CUSTOMER_CREATING_TASKS,
      body,
    },
    options,
  );
}

export function processPaymentTask(
  client: NodeClientInterface,
  body: ProcessPaymentTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessPaymentTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_PAYMENT_TASK,
      body,
    },
    options,
  );
}

export function listPaymentTasks(
  client: NodeClientInterface,
  body: ListPaymentTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListPaymentTasksResponse> {
  return client.send(
    {
      descriptor: LIST_PAYMENT_TASKS,
      body,
    },
    options,
  );
}

export function processUpdatePaymentMethodNotifyingTask(
  client: NodeClientInterface,
  body: ProcessUpdatePaymentMethodNotifyingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessUpdatePaymentMethodNotifyingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK,
      body,
    },
    options,
  );
}

export function listUpdatePaymentMethodNotifyingTasks(
  client: NodeClientInterface,
  body: ListUpdatePaymentMethodNotifyingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListUpdatePaymentMethodNotifyingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS,
      body,
    },
    options,
  );
}

export function processBillingAccountSuspendingDueToPastDueTask(
  client: NodeClientInterface,
  body: ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessBillingAccountSuspendingDueToPastDueTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK,
      body,
    },
    options,
  );
}

export function listBillingAccountSuspendingDueToPastDueTasks(
  client: NodeClientInterface,
  body: ListBillingAccountSuspendingDueToPastDueTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListBillingAccountSuspendingDueToPastDueTasksResponse> {
  return client.send(
    {
      descriptor: LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS,
      body,
    },
    options,
  );
}

export function processBillingAccountSuspensionNotifyingTask(
  client: NodeClientInterface,
  body: ProcessBillingAccountSuspensionNotifyingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessBillingAccountSuspensionNotifyingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK,
      body,
    },
    options,
  );
}

export function listBillingAccountSuspensionNotifyingTasks(
  client: NodeClientInterface,
  body: ListBillingAccountSuspensionNotifyingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListBillingAccountSuspensionNotifyingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS,
      body,
    },
    options,
  );
}

export function processBillingAccountStateSyncingTask(
  client: NodeClientInterface,
  body: ProcessBillingAccountStateSyncingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessBillingAccountStateSyncingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK,
      body,
    },
    options,
  );
}

export function listBillingAccountStateSyncingTasks(
  client: NodeClientInterface,
  body: ListBillingAccountStateSyncingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListBillingAccountStateSyncingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS,
      body,
    },
    options,
  );
}

export function processStripeConnectedAccountCreatingTask(
  client: NodeClientInterface,
  body: ProcessStripeConnectedAccountCreatingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessStripeConnectedAccountCreatingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK,
      body,
    },
    options,
  );
}

export function listStripeConnectedAccountCreatingTasks(
  client: NodeClientInterface,
  body: ListStripeConnectedAccountCreatingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListStripeConnectedAccountCreatingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS,
      body,
    },
    options,
  );
}

export function processSetupStripeConnectedAccountNotifyingTask(
  client: NodeClientInterface,
  body: ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessSetupStripeConnectedAccountNotifyingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK,
      body,
    },
    options,
  );
}

export function listSetupStripeConnectedAccountNotifyingTasks(
  client: NodeClientInterface,
  body: ListSetupStripeConnectedAccountNotifyingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListSetupStripeConnectedAccountNotifyingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS,
      body,
    },
    options,
  );
}

export function processPayoutTask(
  client: NodeClientInterface,
  body: ProcessPayoutTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessPayoutTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_PAYOUT_TASK,
      body,
    },
    options,
  );
}

export function listPayoutTasks(
  client: NodeClientInterface,
  body: ListPayoutTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListPayoutTasksResponse> {
  return client.send(
    {
      descriptor: LIST_PAYOUT_TASKS,
      body,
    },
    options,
  );
}
