import { ProductID, PRODUCT_I_D } from '@phading/price/price';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { COMMERCE_NODE_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface LineItem {
  productID?: ProductID,
  quantity?: number,
}

export let LINE_ITEM: MessageDescriptor<LineItem> = {
  name: 'LineItem',
  fields: [{
    name: 'productID',
    index: 1,
    enumType: PRODUCT_I_D,
  }, {
    name: 'quantity',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GenerateTransactionStatementRequestBody {
  accountId?: string,
  month?: string,
  lineItems?: Array<LineItem>,
}

export let GENERATE_TRANSACTION_STATEMENT_REQUEST_BODY: MessageDescriptor<GenerateTransactionStatementRequestBody> = {
  name: 'GenerateTransactionStatementRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'lineItems',
    index: 3,
    messageType: LINE_ITEM,
    isArray: true,
  }],
};

export interface GenerateTransactionStatementResponse {
}

export let GENERATE_TRANSACTION_STATEMENT_RESPONSE: MessageDescriptor<GenerateTransactionStatementResponse> = {
  name: 'GenerateTransactionStatementResponse',
  fields: [],
};

export interface CreateBillingProfileRequestBody {
  accountId?: string,
}

export let CREATE_BILLING_PROFILE_REQUEST_BODY: MessageDescriptor<CreateBillingProfileRequestBody> = {
  name: 'CreateBillingProfileRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateBillingProfileResponse {
}

export let CREATE_BILLING_PROFILE_RESPONSE: MessageDescriptor<CreateBillingProfileResponse> = {
  name: 'CreateBillingProfileResponse',
  fields: [],
};

export interface CreateEarningsProfileRequestBody {
  accountId?: string,
}

export let CREATE_EARNINGS_PROFILE_REQUEST_BODY: MessageDescriptor<CreateEarningsProfileRequestBody> = {
  name: 'CreateEarningsProfileRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateEarningsProfileResponse {
}

export let CREATE_EARNINGS_PROFILE_RESPONSE: MessageDescriptor<CreateEarningsProfileResponse> = {
  name: 'CreateEarningsProfileResponse',
  fields: [],
};

export interface ProcessStripePaymentCustomerCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripePaymentCustomerCreatingTaskRequestBody> = {
  name: 'ProcessStripePaymentCustomerCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessStripePaymentCustomerCreatingTaskResponse {
}

export let PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessStripePaymentCustomerCreatingTaskResponse> = {
  name: 'ProcessStripePaymentCustomerCreatingTaskResponse',
  fields: [],
};

export interface ListStripePaymentCustomerCreatingTasksRequestBody {
}

export let LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListStripePaymentCustomerCreatingTasksRequestBody> = {
  name: 'ListStripePaymentCustomerCreatingTasksRequestBody',
  fields: [],
};

export interface ListStripePaymentCustomerCreatingTasksResponse {
  tasks?: Array<ProcessStripePaymentCustomerCreatingTaskRequestBody>,
}

export let LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS_RESPONSE: MessageDescriptor<ListStripePaymentCustomerCreatingTasksResponse> = {
  name: 'ListStripePaymentCustomerCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK_REQUEST_BODY,
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

export interface ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody> = {
  name: 'ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse {
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse> = {
  name: 'ProcessStripeConnectedAccountNeedsSetupNotifyingTaskResponse',
  fields: [],
};

export interface ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody {
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody> = {
  name: 'ListStripeConnectedAccountNeedsSetupNotifyingTasksRequestBody',
  fields: [],
};

export interface ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse {
  tasks?: Array<ProcessStripeConnectedAccountNeedsSetupNotifyingTaskRequestBody>,
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse> = {
  name: 'ListStripeConnectedAccountNeedsSetupNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPaymentTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYMENT_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentTaskRequestBody> = {
  name: 'ProcessPaymentTaskRequestBody',
  fields: [{
    name: 'statementId',
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

export interface ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody> = {
  name: 'ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse {
}

export let PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse> = {
  name: 'ProcessPaymentMethodNeedsUpdateNotifyingTaskResponse',
  fields: [],
};

export interface ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody {
}

export let LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody> = {
  name: 'ListPaymentMethodNeedsUpdateNotifyingTasksRequestBody',
  fields: [],
};

export interface ListPaymentMethodNeedsUpdateNotifyingTasksResponse {
  tasks?: Array<ProcessPaymentMethodNeedsUpdateNotifyingTaskRequestBody>,
}

export let LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListPaymentMethodNeedsUpdateNotifyingTasksResponse> = {
  name: 'ListPaymentMethodNeedsUpdateNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody {
  statementId?: string,
}

export let PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody> = {
  name: 'ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessBillingProfileSuspendingDueToPastDueTaskResponse {
}

export let PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE: MessageDescriptor<ProcessBillingProfileSuspendingDueToPastDueTaskResponse> = {
  name: 'ProcessBillingProfileSuspendingDueToPastDueTaskResponse',
  fields: [],
};

export interface ListBillingProfileSuspendingDueToPastDueTasksRequestBody {
}

export let LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingProfileSuspendingDueToPastDueTasksRequestBody> = {
  name: 'ListBillingProfileSuspendingDueToPastDueTasksRequestBody',
  fields: [],
};

export interface ListBillingProfileSuspendingDueToPastDueTasksResponse {
  tasks?: Array<ProcessBillingProfileSuspendingDueToPastDueTaskRequestBody>,
}

export let LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE: MessageDescriptor<ListBillingProfileSuspendingDueToPastDueTasksResponse> = {
  name: 'ListBillingProfileSuspendingDueToPastDueTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingProfileSuspensionNotifyingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingProfileSuspensionNotifyingTaskRequestBody> = {
  name: 'ProcessBillingProfileSuspensionNotifyingTaskRequestBody',
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

export interface ProcessBillingProfileSuspensionNotifyingTaskResponse {
}

export let PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessBillingProfileSuspensionNotifyingTaskResponse> = {
  name: 'ProcessBillingProfileSuspensionNotifyingTaskResponse',
  fields: [],
};

export interface ListBillingProfileSuspensionNotifyingTasksRequestBody {
}

export let LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingProfileSuspensionNotifyingTasksRequestBody> = {
  name: 'ListBillingProfileSuspensionNotifyingTasksRequestBody',
  fields: [],
};

export interface ListBillingProfileSuspensionNotifyingTasksResponse {
  tasks?: Array<ProcessBillingProfileSuspensionNotifyingTaskRequestBody>,
}

export let LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListBillingProfileSuspensionNotifyingTasksResponse> = {
  name: 'ListBillingProfileSuspensionNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessBillingProfileStateSyncingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingProfileStateSyncingTaskRequestBody> = {
  name: 'ProcessBillingProfileStateSyncingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessBillingProfileStateSyncingTaskResponse {
}

export let PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK_RESPONSE: MessageDescriptor<ProcessBillingProfileStateSyncingTaskResponse> = {
  name: 'ProcessBillingProfileStateSyncingTaskResponse',
  fields: [],
};

export interface ListBillingProfileStateSyncingTasksRequestBody {
}

export let LIST_BILLING_PROFILE_STATE_SYNCING_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingProfileStateSyncingTasksRequestBody> = {
  name: 'ListBillingProfileStateSyncingTasksRequestBody',
  fields: [],
};

export interface ListBillingProfileStateSyncingTasksResponse {
  tasks?: Array<ProcessBillingProfileStateSyncingTaskRequestBody>,
}

export let LIST_BILLING_PROFILE_STATE_SYNCING_TASKS_RESPONSE: MessageDescriptor<ListBillingProfileStateSyncingTasksResponse> = {
  name: 'ListBillingProfileStateSyncingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPayoutTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYOUT_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutTaskRequestBody> = {
  name: 'ProcessPayoutTaskRequestBody',
  fields: [{
    name: 'statementId',
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

export let GENERATE_TRANSACTION_STATEMENT: RemoteCallDescriptor = {
  name: "GenerateTransactionStatement",
  service: COMMERCE_NODE_SERVICE,
  path: "/GenerateTransactionStatement",
  body: {
    messageType: GENERATE_TRANSACTION_STATEMENT_REQUEST_BODY,
  },
  response: {
    messageType: GENERATE_TRANSACTION_STATEMENT_RESPONSE,
  },
}

export let CREATE_BILLING_PROFILE: RemoteCallDescriptor = {
  name: "CreateBillingProfile",
  service: COMMERCE_NODE_SERVICE,
  path: "/CreateBillingProfile",
  body: {
    messageType: CREATE_BILLING_PROFILE_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_BILLING_PROFILE_RESPONSE,
  },
}

export let CREATE_EARNINGS_PROFILE: RemoteCallDescriptor = {
  name: "CreateEarningsProfile",
  service: COMMERCE_NODE_SERVICE,
  path: "/CreateEarningsProfile",
  body: {
    messageType: CREATE_EARNINGS_PROFILE_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_EARNINGS_PROFILE_RESPONSE,
  },
}

export let PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessStripePaymentCustomerCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessStripePaymentCustomerCreatingTask",
  body: {
    messageType: PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STRIPE_PAYMENT_CUSTOMER_CREATING_TASK_RESPONSE,
  },
}

export let LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListStripePaymentCustomerCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListStripePaymentCustomerCreatingTasks",
  body: {
    messageType: LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STRIPE_PAYMENT_CUSTOMER_CREATING_TASKS_RESPONSE,
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

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessStripeConnectedAccountNeedsSetupNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessStripeConnectedAccountNeedsSetupNotifyingTask",
  body: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListStripeConnectedAccountNeedsSetupNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListStripeConnectedAccountNeedsSetupNotifyingTasks",
  body: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_NEEDS_SETUP_NOTIFYING_TASKS_RESPONSE,
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

export let PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentMethodNeedsUpdateNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentMethodNeedsUpdateNotifyingTask",
  body: {
    messageType: PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentMethodNeedsUpdateNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentMethodNeedsUpdateNotifyingTasks",
  body: {
    messageType: LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_METHOD_NEEDS_UPDATE_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingProfileSuspendingDueToPastDueTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingProfileSuspendingDueToPastDueTask",
  body: {
    messageType: PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE,
  },
}

export let LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS: RemoteCallDescriptor = {
  name: "ListBillingProfileSuspendingDueToPastDueTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingProfileSuspendingDueToPastDueTasks",
  body: {
    messageType: LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingProfileSuspensionNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingProfileSuspensionNotifyingTask",
  body: {
    messageType: PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListBillingProfileSuspensionNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingProfileSuspensionNotifyingTasks",
  body: {
    messageType: LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_PROFILE_SUSPENSION_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingProfileStateSyncingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessBillingProfileStateSyncingTask",
  body: {
    messageType: PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_PROFILE_STATE_SYNCING_TASK_RESPONSE,
  },
}

export let LIST_BILLING_PROFILE_STATE_SYNCING_TASKS: RemoteCallDescriptor = {
  name: "ListBillingProfileStateSyncingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListBillingProfileStateSyncingTasks",
  body: {
    messageType: LIST_BILLING_PROFILE_STATE_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_PROFILE_STATE_SYNCING_TASKS_RESPONSE,
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
