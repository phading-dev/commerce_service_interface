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

export interface CreatePaymentProfileRequestBody {
  accountId?: string,
}

export let CREATE_PAYMENT_PROFILE_REQUEST_BODY: MessageDescriptor<CreatePaymentProfileRequestBody> = {
  name: 'CreatePaymentProfileRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreatePaymentProfileResponse {
}

export let CREATE_PAYMENT_PROFILE_RESPONSE: MessageDescriptor<CreatePaymentProfileResponse> = {
  name: 'CreatePaymentProfileResponse',
  fields: [],
};

export interface CreatePayoutProfileRequestBody {
  accountId?: string,
}

export let CREATE_PAYOUT_PROFILE_REQUEST_BODY: MessageDescriptor<CreatePayoutProfileRequestBody> = {
  name: 'CreatePayoutProfileRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreatePayoutProfileResponse {
}

export let CREATE_PAYOUT_PROFILE_RESPONSE: MessageDescriptor<CreatePayoutProfileResponse> = {
  name: 'CreatePayoutProfileResponse',
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

export interface ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody> = {
  name: 'ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentProfileSuspendingDueToPastDueTaskResponse {
}

export let PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE: MessageDescriptor<ProcessPaymentProfileSuspendingDueToPastDueTaskResponse> = {
  name: 'ProcessPaymentProfileSuspendingDueToPastDueTaskResponse',
  fields: [],
};

export interface ListPaymentProfileSuspendingDueToPastDueTasksRequestBody {
}

export let LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentProfileSuspendingDueToPastDueTasksRequestBody> = {
  name: 'ListPaymentProfileSuspendingDueToPastDueTasksRequestBody',
  fields: [],
};

export interface ListPaymentProfileSuspendingDueToPastDueTasksResponse {
  tasks?: Array<ProcessPaymentProfileSuspendingDueToPastDueTaskRequestBody>,
}

export let LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE: MessageDescriptor<ListPaymentProfileSuspendingDueToPastDueTasksResponse> = {
  name: 'ListPaymentProfileSuspendingDueToPastDueTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPaymentProfileSuspensionNotifyingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentProfileSuspensionNotifyingTaskRequestBody> = {
  name: 'ProcessPaymentProfileSuspensionNotifyingTaskRequestBody',
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

export interface ProcessPaymentProfileSuspensionNotifyingTaskResponse {
}

export let PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentProfileSuspensionNotifyingTaskResponse> = {
  name: 'ProcessPaymentProfileSuspensionNotifyingTaskResponse',
  fields: [],
};

export interface ListPaymentProfileSuspensionNotifyingTasksRequestBody {
}

export let LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentProfileSuspensionNotifyingTasksRequestBody> = {
  name: 'ListPaymentProfileSuspensionNotifyingTasksRequestBody',
  fields: [],
};

export interface ListPaymentProfileSuspensionNotifyingTasksResponse {
  tasks?: Array<ProcessPaymentProfileSuspensionNotifyingTaskRequestBody>,
}

export let LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListPaymentProfileSuspensionNotifyingTasksResponse> = {
  name: 'ListPaymentProfileSuspensionNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPaymentProfileStateSyncingTaskRequestBody {
  accountId?: string,
  version?: number,
}

export let PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentProfileStateSyncingTaskRequestBody> = {
  name: 'ProcessPaymentProfileStateSyncingTaskRequestBody',
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

export interface ProcessPaymentProfileStateSyncingTaskResponse {
}

export let PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentProfileStateSyncingTaskResponse> = {
  name: 'ProcessPaymentProfileStateSyncingTaskResponse',
  fields: [],
};

export interface ListPaymentProfileStateSyncingTasksRequestBody {
}

export let LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentProfileStateSyncingTasksRequestBody> = {
  name: 'ListPaymentProfileStateSyncingTasksRequestBody',
  fields: [],
};

export interface ListPaymentProfileStateSyncingTasksResponse {
  tasks?: Array<ProcessPaymentProfileStateSyncingTaskRequestBody>,
}

export let LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS_RESPONSE: MessageDescriptor<ListPaymentProfileStateSyncingTasksResponse> = {
  name: 'ListPaymentProfileStateSyncingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY,
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

export let CREATE_PAYMENT_PROFILE: RemoteCallDescriptor = {
  name: "CreatePaymentProfile",
  service: COMMERCE_NODE_SERVICE,
  path: "/CreatePaymentProfile",
  body: {
    messageType: CREATE_PAYMENT_PROFILE_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_PAYMENT_PROFILE_RESPONSE,
  },
}

export let CREATE_PAYOUT_PROFILE: RemoteCallDescriptor = {
  name: "CreatePayoutProfile",
  service: COMMERCE_NODE_SERVICE,
  path: "/CreatePayoutProfile",
  body: {
    messageType: CREATE_PAYOUT_PROFILE_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_PAYOUT_PROFILE_RESPONSE,
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

export let PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentProfileSuspendingDueToPastDueTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentProfileSuspendingDueToPastDueTask",
  body: {
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentProfileSuspendingDueToPastDueTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentProfileSuspendingDueToPastDueTasks",
  body: {
    messageType: LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_PROFILE_SUSPENDING_DUE_TO_PAST_DUE_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentProfileSuspensionNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentProfileSuspensionNotifyingTask",
  body: {
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentProfileSuspensionNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentProfileSuspensionNotifyingTasks",
  body: {
    messageType: LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_PROFILE_SUSPENSION_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentProfileStateSyncingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentProfileStateSyncingTask",
  body: {
    messageType: PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_PROFILE_STATE_SYNCING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentProfileStateSyncingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentProfileStateSyncingTasks",
  body: {
    messageType: LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_PROFILE_STATE_SYNCING_TASKS_RESPONSE,
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
