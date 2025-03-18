import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { COMMERCE_NODE_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ReportBillingRequestBody {
  accountId?: string,
  month?: string,
  watchTimeSec?: number,
  transmittedMb?: number,
  uploadedMb?: number,
  storageMbh?: number,
}

export let REPORT_BILLING_REQUEST_BODY: MessageDescriptor<ReportBillingRequestBody> = {
  name: 'ReportBillingRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'transmittedMb',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'uploadedMb',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'storageMbh',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ReportBillingResponse {
}

export let REPORT_BILLING_RESPONSE: MessageDescriptor<ReportBillingResponse> = {
  name: 'ReportBillingResponse',
  fields: [],
};

export interface ReportEarningsRequestBody {
  accountId?: string,
  month?: string,
  watchTimeSec?: number,
}

export let REPORT_EARNINGS_REQUEST_BODY: MessageDescriptor<ReportEarningsRequestBody> = {
  name: 'ReportEarningsRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ReportEarningsResponse {
}

export let REPORT_EARNINGS_RESPONSE: MessageDescriptor<ReportEarningsResponse> = {
  name: 'ReportEarningsResponse',
  fields: [],
};

export interface CreateBillingAccountRequestBody {
  accountId?: string,
}

export let CREATE_BILLING_ACCOUNT_REQUEST_BODY: MessageDescriptor<CreateBillingAccountRequestBody> = {
  name: 'CreateBillingAccountRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateBillingAccountResponse {
}

export let CREATE_BILLING_ACCOUNT_RESPONSE: MessageDescriptor<CreateBillingAccountResponse> = {
  name: 'CreateBillingAccountResponse',
  fields: [],
};

export interface ProcessStripeCustomerCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_STRIPE_CUSTOMER_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripeCustomerCreatingTaskRequestBody> = {
  name: 'ProcessStripeCustomerCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessStripeCustomerCreatingTaskResponse {
}

export let PROCESS_STRIPE_CUSTOMER_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessStripeCustomerCreatingTaskResponse> = {
  name: 'ProcessStripeCustomerCreatingTaskResponse',
  fields: [],
};

export interface ListStripeCustomerCreatingTasksRequestBody {
}

export let LIST_STRIPE_CUSTOMER_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListStripeCustomerCreatingTasksRequestBody> = {
  name: 'ListStripeCustomerCreatingTasksRequestBody',
  fields: [],
};

export interface ListStripeCustomerCreatingTasksResponse {
  tasks?: Array<ProcessStripeCustomerCreatingTaskRequestBody>,
}

export let LIST_STRIPE_CUSTOMER_CREATING_TASKS_RESPONSE: MessageDescriptor<ListStripeCustomerCreatingTasksResponse> = {
  name: 'ListStripeCustomerCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STRIPE_CUSTOMER_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPaymentTaskRequestBody {
  billingId?: string,
}

export let PROCESS_PAYMENT_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentTaskRequestBody> = {
  name: 'ProcessPaymentTaskRequestBody',
  fields: [{
    name: 'billingId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentTaskResponse {
}

export let PROCESS_PAYMENT_TASK_RESPONSE: MessageDescriptor<ProcessPaymentTaskResponse> = {
  name: 'ProcessPaymentTaskResponse',
  fields: [],
};

export interface ListPaymentTasksRequestBody {
}

export let LIST_PAYMENT_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentTasksRequestBody> = {
  name: 'ListPaymentTasksRequestBody',
  fields: [],
};

export interface ListPaymentTasksResponse {
  tasks?: Array<ProcessPaymentTaskRequestBody>,
}

export let LIST_PAYMENT_TASKS_RESPONSE: MessageDescriptor<ListPaymentTasksResponse> = {
  name: 'ListPaymentTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessUpdatePaymentMethodNotifyingTaskRequestBody {
  billingId?: string,
}

export let PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessUpdatePaymentMethodNotifyingTaskRequestBody> = {
  name: 'ProcessUpdatePaymentMethodNotifyingTaskRequestBody',
  fields: [{
    name: 'billingId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessUpdatePaymentMethodNotifyingTaskResponse {
}

export let PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessUpdatePaymentMethodNotifyingTaskResponse> = {
  name: 'ProcessUpdatePaymentMethodNotifyingTaskResponse',
  fields: [],
};

export interface ListUpdatePaymentMethodNotifyingTasksRequestBody {
}

export let LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListUpdatePaymentMethodNotifyingTasksRequestBody> = {
  name: 'ListUpdatePaymentMethodNotifyingTasksRequestBody',
  fields: [],
};

export interface ListUpdatePaymentMethodNotifyingTasksResponse {
  tasks?: Array<ProcessUpdatePaymentMethodNotifyingTaskRequestBody>,
}

export let LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListUpdatePaymentMethodNotifyingTasksResponse> = {
  name: 'ListUpdatePaymentMethodNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody {
  billingId?: string,
}

export let PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody> = {
  name: 'ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody',
  fields: [{
    name: 'billingId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessBillingAccountSuspendingDueToPastDueTaskResponse {
}

export let PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE: MessageDescriptor<ProcessBillingAccountSuspendingDueToPastDueTaskResponse> = {
  name: 'ProcessBillingAccountSuspendingDueToPastDueTaskResponse',
  fields: [],
};

export interface ListBillingAccountSuspendingDueToPastDueTasksRequestBody {
}

export let LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingAccountSuspendingDueToPastDueTasksRequestBody> = {
  name: 'ListBillingAccountSuspendingDueToPastDueTasksRequestBody',
  fields: [],
};

export interface ListBillingAccountSuspendingDueToPastDueTasksResponse {
  tasks?: Array<ProcessBillingAccountSuspendingDueToPastDueTaskRequestBody>,
}

export let LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE: MessageDescriptor<ListBillingAccountSuspendingDueToPastDueTasksResponse> = {
  name: 'ListBillingAccountSuspendingDueToPastDueTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingAccountSuspensionNotifyingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingAccountSuspensionNotifyingTaskRequestBody> = {
  name: 'ProcessBillingAccountSuspensionNotifyingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessBillingAccountSuspensionNotifyingTaskResponse {
}

export let PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessBillingAccountSuspensionNotifyingTaskResponse> = {
  name: 'ProcessBillingAccountSuspensionNotifyingTaskResponse',
  fields: [],
};

export interface ListBillingAccountSuspensionNotifyingTasksRequestBody {
}

export let LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingAccountSuspensionNotifyingTasksRequestBody> = {
  name: 'ListBillingAccountSuspensionNotifyingTasksRequestBody',
  fields: [],
};

export interface ListBillingAccountSuspensionNotifyingTasksResponse {
  tasks?: Array<ProcessBillingAccountSuspensionNotifyingTaskRequestBody>,
}

export let LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListBillingAccountSuspensionNotifyingTasksResponse> = {
  name: 'ListBillingAccountSuspensionNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingAccountStateSyncingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingAccountStateSyncingTaskRequestBody> = {
  name: 'ProcessBillingAccountStateSyncingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessBillingAccountStateSyncingTaskResponse {
}

export let PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK_RESPONSE: MessageDescriptor<ProcessBillingAccountStateSyncingTaskResponse> = {
  name: 'ProcessBillingAccountStateSyncingTaskResponse',
  fields: [],
};

export interface ListBillingAccountStateSyncingTasksRequestBody {
}

export let LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingAccountStateSyncingTasksRequestBody> = {
  name: 'ListBillingAccountStateSyncingTasksRequestBody',
  fields: [],
};

export interface ListBillingAccountStateSyncingTasksResponse {
  tasks?: Array<ProcessBillingAccountStateSyncingTaskRequestBody>,
}

export let LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS_RESPONSE: MessageDescriptor<ListBillingAccountStateSyncingTasksResponse> = {
  name: 'ListBillingAccountStateSyncingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessStripeConnectedAccountCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripeConnectedAccountCreatingTaskRequestBody> = {
  name: 'ProcessStripeConnectedAccountCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessStripeConnectedAccountCreatingTaskResponse {
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessStripeConnectedAccountCreatingTaskResponse> = {
  name: 'ProcessStripeConnectedAccountCreatingTaskResponse',
  fields: [],
};

export interface ListStripeConnectedAccountCreatingTasksRequestBody {
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListStripeConnectedAccountCreatingTasksRequestBody> = {
  name: 'ListStripeConnectedAccountCreatingTasksRequestBody',
  fields: [],
};

export interface ListStripeConnectedAccountCreatingTasksResponse {
  tasks?: Array<ProcessStripeConnectedAccountCreatingTaskRequestBody>,
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS_RESPONSE: MessageDescriptor<ListStripeConnectedAccountCreatingTasksResponse> = {
  name: 'ListStripeConnectedAccountCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody> = {
  name: 'ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessSetupStripeConnectedAccountNotifyingTaskResponse {
}

export let PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessSetupStripeConnectedAccountNotifyingTaskResponse> = {
  name: 'ProcessSetupStripeConnectedAccountNotifyingTaskResponse',
  fields: [],
};

export interface ListSetupStripeConnectedAccountNotifyingTasksRequestBody {
}

export let LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListSetupStripeConnectedAccountNotifyingTasksRequestBody> = {
  name: 'ListSetupStripeConnectedAccountNotifyingTasksRequestBody',
  fields: [],
};

export interface ListSetupStripeConnectedAccountNotifyingTasksResponse {
  tasks?: Array<ProcessSetupStripeConnectedAccountNotifyingTaskRequestBody>,
}

export let LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListSetupStripeConnectedAccountNotifyingTasksResponse> = {
  name: 'ListSetupStripeConnectedAccountNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPayoutTaskRequestBody {
  earningsId?: string,
}

export let PROCESS_PAYOUT_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutTaskRequestBody> = {
  name: 'ProcessPayoutTaskRequestBody',
  fields: [{
    name: 'earningsId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPayoutTaskResponse {
}

export let PROCESS_PAYOUT_TASK_RESPONSE: MessageDescriptor<ProcessPayoutTaskResponse> = {
  name: 'ProcessPayoutTaskResponse',
  fields: [],
};

export interface ListPayoutTasksRequestBody {
}

export let LIST_PAYOUT_TASKS_REQUEST_BODY: MessageDescriptor<ListPayoutTasksRequestBody> = {
  name: 'ListPayoutTasksRequestBody',
  fields: [],
};

export interface ListPayoutTasksResponse {
  tasks?: Array<ProcessPayoutTaskRequestBody>,
}

export let LIST_PAYOUT_TASKS_RESPONSE: MessageDescriptor<ListPayoutTasksResponse> = {
  name: 'ListPayoutTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYOUT_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export let REPORT_BILLING: RemoteCallDescriptor = {
  name: "ReportBilling",
  service: COMMERCE_NODE_SERVICE,
  path: "/ReportBilling",
  body: {
    messageType: REPORT_BILLING_REQUEST_BODY,
  },
  response: {
    messageType: REPORT_BILLING_RESPONSE,
  },
}

export let REPORT_EARNINGS: RemoteCallDescriptor = {
  name: "ReportEarnings",
  service: COMMERCE_NODE_SERVICE,
  path: "/ReportEarnings",
  body: {
    messageType: REPORT_EARNINGS_REQUEST_BODY,
  },
  response: {
    messageType: REPORT_EARNINGS_RESPONSE,
  },
}

export let CREATE_BILLING_ACCOUNT: RemoteCallDescriptor = {
  name: "CreateBillingAccount",
  service: COMMERCE_NODE_SERVICE,
  path: "/CreateBillingAccount",
  body: {
    messageType: CREATE_BILLING_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_BILLING_ACCOUNT_RESPONSE,
  },
}

export let PROCESS_STRIPE_CUSTOMER_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessStripeCustomerCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessStripeCustomerCreatingTask",
  body: {
    messageType: PROCESS_STRIPE_CUSTOMER_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STRIPE_CUSTOMER_CREATING_TASK_RESPONSE,
  },
}

export let LIST_STRIPE_CUSTOMER_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListStripeCustomerCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListStripeCustomerCreatingTasks",
  body: {
    messageType: LIST_STRIPE_CUSTOMER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STRIPE_CUSTOMER_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYMENT_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentTask",
  body: {
    messageType: PROCESS_PAYMENT_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentTasks",
  body: {
    messageType: LIST_PAYMENT_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_TASKS_RESPONSE,
  },
}

export let PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessUpdatePaymentMethodNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessUpdatePaymentMethodNotifyingTask",
  body: {
    messageType: PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_UPDATE_PAYMENT_METHOD_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListUpdatePaymentMethodNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListUpdatePaymentMethodNotifyingTasks",
  body: {
    messageType: LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_UPDATE_PAYMENT_METHOD_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingAccountSuspendingDueToPastDueTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingAccountSuspendingDueToPastDueTask",
  body: {
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE,
  },
}

export let LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS: RemoteCallDescriptor = {
  name: "ListBillingAccountSuspendingDueToPastDueTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingAccountSuspendingDueToPastDueTasks",
  body: {
    messageType: LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_ACCOUNT_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingAccountSuspensionNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingAccountSuspensionNotifyingTask",
  body: {
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListBillingAccountSuspensionNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingAccountSuspensionNotifyingTasks",
  body: {
    messageType: LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_ACCOUNT_SUSPENSION_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingAccountStateSyncingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingAccountStateSyncingTask",
  body: {
    messageType: PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_ACCOUNT_STATE_SYNCING_TASK_RESPONSE,
  },
}

export let LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS: RemoteCallDescriptor = {
  name: "ListBillingAccountStateSyncingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingAccountStateSyncingTasks",
  body: {
    messageType: LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_ACCOUNT_STATE_SYNCING_TASKS_RESPONSE,
  },
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessStripeConnectedAccountCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessStripeConnectedAccountCreatingTask",
  body: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_CREATING_TASK_RESPONSE,
  },
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListStripeConnectedAccountCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListStripeConnectedAccountCreatingTasks",
  body: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessSetupStripeConnectedAccountNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessSetupStripeConnectedAccountNotifyingTask",
  body: {
    messageType: PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListSetupStripeConnectedAccountNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListSetupStripeConnectedAccountNotifyingTasks",
  body: {
    messageType: LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SETUP_STRIPE_CONNECTED_ACCOUNT_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYOUT_TASK: RemoteCallDescriptor = {
  name: "ProcessPayoutTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPayoutTask",
  body: {
    messageType: PROCESS_PAYOUT_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYOUT_TASK_RESPONSE,
  },
}

export let LIST_PAYOUT_TASKS: RemoteCallDescriptor = {
  name: "ListPayoutTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPayoutTasks",
  body: {
    messageType: LIST_PAYOUT_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYOUT_TASKS_RESPONSE,
  },
}
