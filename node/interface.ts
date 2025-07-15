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

export interface ProcessStripeCustomerCreatingTaskRequestBody {
  taskId?: string,
  accountId?: string,
}

export let PROCESS_STRIPE_CUSTOMER_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripeCustomerCreatingTaskRequestBody> = {
  name: 'ProcessStripeCustomerCreatingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
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

export interface ProcessInitCreditGrantingTaskRequestBody {
  taskId?: string,
  accountId?: string,
}

export let PROCESS_INIT_CREDIT_GRANTING_TASK_REQUEST_BODY: MessageDescriptor<ProcessInitCreditGrantingTaskRequestBody> = {
  name: 'ProcessInitCreditGrantingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessInitCreditGrantingTaskResponse {
}

export let PROCESS_INIT_CREDIT_GRANTING_TASK_RESPONSE: MessageDescriptor<ProcessInitCreditGrantingTaskResponse> = {
  name: 'ProcessInitCreditGrantingTaskResponse',
  fields: [],
};

export interface ListInitCreditGrantingTasksRequestBody {
}

export let LIST_INIT_CREDIT_GRANTING_TASKS_REQUEST_BODY: MessageDescriptor<ListInitCreditGrantingTasksRequestBody> = {
  name: 'ListInitCreditGrantingTasksRequestBody',
  fields: [],
};

export interface ListInitCreditGrantingTasksResponse {
  tasks?: Array<ProcessInitCreditGrantingTaskRequestBody>,
}

export let LIST_INIT_CREDIT_GRANTING_TASKS_RESPONSE: MessageDescriptor<ListInitCreditGrantingTasksResponse> = {
  name: 'ListInitCreditGrantingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_INIT_CREDIT_GRANTING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody {
  taskId?: string,
  accountId?: string,
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody> = {
  name: 'ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessStripeConnectedAccountForPayoutCreatingTaskResponse {
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessStripeConnectedAccountForPayoutCreatingTaskResponse> = {
  name: 'ProcessStripeConnectedAccountForPayoutCreatingTaskResponse',
  fields: [],
};

export interface ListStripeConnectedAccountForPayoutCreatingTasksRequestBody {
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListStripeConnectedAccountForPayoutCreatingTasksRequestBody> = {
  name: 'ListStripeConnectedAccountForPayoutCreatingTasksRequestBody',
  fields: [],
};

export interface ListStripeConnectedAccountForPayoutCreatingTasksResponse {
  tasks?: Array<ProcessStripeConnectedAccountForPayoutCreatingTaskRequestBody>,
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS_RESPONSE: MessageDescriptor<ListStripeConnectedAccountForPayoutCreatingTasksResponse> = {
  name: 'ListStripeConnectedAccountForPayoutCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK_REQUEST_BODY,
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

export interface ProcessPaymentStripeInvoiceCreatingTaskRequestBody {
  taskId?: string,
  statementId?: string,
}

export let PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentStripeInvoiceCreatingTaskRequestBody> = {
  name: 'ProcessPaymentStripeInvoiceCreatingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'statementId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentStripeInvoiceCreatingTaskResponse {
}

export let PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentStripeInvoiceCreatingTaskResponse> = {
  name: 'ProcessPaymentStripeInvoiceCreatingTaskResponse',
  fields: [],
};

export interface ListPaymentStripeInvoiceCreatingTasksRequestBody {
}

export let LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentStripeInvoiceCreatingTasksRequestBody> = {
  name: 'ListPaymentStripeInvoiceCreatingTasksRequestBody',
  fields: [],
};

export interface ListPaymentStripeInvoiceCreatingTasksResponse {
  tasks?: Array<ProcessPaymentStripeInvoiceCreatingTaskRequestBody>,
}

export let LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS_RESPONSE: MessageDescriptor<ListPaymentStripeInvoiceCreatingTasksResponse> = {
  name: 'ListPaymentStripeInvoiceCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPaymentStripeInvoicePayingTaskRequestBody {
  taskId?: string,
  statementId?: string,
}

export let PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentStripeInvoicePayingTaskRequestBody> = {
  name: 'ProcessPaymentStripeInvoicePayingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'statementId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentStripeInvoicePayingTaskResponse {
}

export let PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentStripeInvoicePayingTaskResponse> = {
  name: 'ProcessPaymentStripeInvoicePayingTaskResponse',
  fields: [],
};

export interface ListPaymentStripeInvoicePayingTasksRequestBody {
}

export let LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentStripeInvoicePayingTasksRequestBody> = {
  name: 'ListPaymentStripeInvoicePayingTasksRequestBody',
  fields: [],
};

export interface ListPaymentStripeInvoicePayingTasksResponse {
  tasks?: Array<ProcessPaymentStripeInvoicePayingTaskRequestBody>,
}

export let LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS_RESPONSE: MessageDescriptor<ListPaymentStripeInvoicePayingTasksResponse> = {
  name: 'ListPaymentStripeInvoicePayingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK_REQUEST_BODY,
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

export interface ProcessPayoutStripeTransferCreatingTaskRequestBody {
  taskId?: string,
  statementId?: string,
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutStripeTransferCreatingTaskRequestBody> = {
  name: 'ProcessPayoutStripeTransferCreatingTaskRequestBody',
  fields: [{
    name: 'taskId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'statementId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPayoutStripeTransferCreatingTaskResponse {
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessPayoutStripeTransferCreatingTaskResponse> = {
  name: 'ProcessPayoutStripeTransferCreatingTaskResponse',
  fields: [],
};

export interface ListPayoutStripeTransferCreatingTasksRequestBody {
}

export let LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListPayoutStripeTransferCreatingTasksRequestBody> = {
  name: 'ListPayoutStripeTransferCreatingTasksRequestBody',
  fields: [],
};

export interface ListPayoutStripeTransferCreatingTasksResponse {
  tasks?: Array<ProcessPayoutStripeTransferCreatingTaskRequestBody>,
}

export let LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS_RESPONSE: MessageDescriptor<ListPayoutStripeTransferCreatingTasksResponse> = {
  name: 'ListPayoutStripeTransferCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPayoutStripeTransferDisabledNotifyingTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutStripeTransferDisabledNotifyingTaskRequestBody> = {
  name: 'ProcessPayoutStripeTransferDisabledNotifyingTaskRequestBody',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPayoutStripeTransferDisabledNotifyingTaskResponse {
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessPayoutStripeTransferDisabledNotifyingTaskResponse> = {
  name: 'ProcessPayoutStripeTransferDisabledNotifyingTaskResponse',
  fields: [],
};

export interface ListPayoutStripeTransferDisabledNotifyingTasksRequestBody {
}

export let LIST_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListPayoutStripeTransferDisabledNotifyingTasksRequestBody> = {
  name: 'ListPayoutStripeTransferDisabledNotifyingTasksRequestBody',
  fields: [],
};

export interface ListPayoutStripeTransferDisabledNotifyingTasksResponse {
  tasks?: Array<ProcessPayoutStripeTransferDisabledNotifyingTaskRequestBody>,
}

export let LIST_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListPayoutStripeTransferDisabledNotifyingTasksResponse> = {
  name: 'ListPayoutStripeTransferDisabledNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPayoutStripeTransferSuccessNotifyingTaskRequestBody {
  statementId?: string,
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutStripeTransferSuccessNotifyingTaskRequestBody> = {
  name: 'ProcessPayoutStripeTransferSuccessNotifyingTaskRequestBody',
  fields: [{
    name: 'statementId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPayoutStripeTransferSuccessNotifyingTaskResponse {
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK_RESPONSE: MessageDescriptor<ProcessPayoutStripeTransferSuccessNotifyingTaskResponse> = {
  name: 'ProcessPayoutStripeTransferSuccessNotifyingTaskResponse',
  fields: [],
};

export interface ListPayoutStripeTransferSuccessNotifyingTasksRequestBody {
}

export let LIST_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASKS_REQUEST_BODY: MessageDescriptor<ListPayoutStripeTransferSuccessNotifyingTasksRequestBody> = {
  name: 'ListPayoutStripeTransferSuccessNotifyingTasksRequestBody',
  fields: [],
};

export interface ListPayoutStripeTransferSuccessNotifyingTasksResponse {
  tasks?: Array<ProcessPayoutStripeTransferSuccessNotifyingTaskRequestBody>,
}

export let LIST_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASKS_RESPONSE: MessageDescriptor<ListPayoutStripeTransferSuccessNotifyingTasksResponse> = {
  name: 'ListPayoutStripeTransferSuccessNotifyingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK_REQUEST_BODY,
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

export let PROCESS_INIT_CREDIT_GRANTING_TASK: RemoteCallDescriptor = {
  name: "ProcessInitCreditGrantingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessInitCreditGrantingTask",
  body: {
    messageType: PROCESS_INIT_CREDIT_GRANTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_INIT_CREDIT_GRANTING_TASK_RESPONSE,
  },
}

export let LIST_INIT_CREDIT_GRANTING_TASKS: RemoteCallDescriptor = {
  name: "ListInitCreditGrantingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListInitCreditGrantingTasks",
  body: {
    messageType: LIST_INIT_CREDIT_GRANTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_INIT_CREDIT_GRANTING_TASKS_RESPONSE,
  },
}

export let PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessStripeConnectedAccountForPayoutCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessStripeConnectedAccountForPayoutCreatingTask",
  body: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASK_RESPONSE,
  },
}

export let LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListStripeConnectedAccountForPayoutCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListStripeConnectedAccountForPayoutCreatingTasks",
  body: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STRIPE_CONNECTED_ACCOUNT_FOR_PAYOUT_CREATING_TASKS_RESPONSE,
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

export let PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentStripeInvoiceCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentStripeInvoiceCreatingTask",
  body: {
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_CREATING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentStripeInvoiceCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentStripeInvoiceCreatingTasks",
  body: {
    messageType: LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_STRIPE_INVOICE_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentStripeInvoicePayingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPaymentStripeInvoicePayingTask",
  body: {
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_STRIPE_INVOICE_PAYING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentStripeInvoicePayingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPaymentStripeInvoicePayingTasks",
  body: {
    messageType: LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_STRIPE_INVOICE_PAYING_TASKS_RESPONSE,
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

export let PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessPayoutStripeTransferCreatingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPayoutStripeTransferCreatingTask",
  body: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_CREATING_TASK_RESPONSE,
  },
}

export let LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListPayoutStripeTransferCreatingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPayoutStripeTransferCreatingTasks",
  body: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessPayoutStripeTransferDisabledNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPayoutStripeTransferDisabledNotifyingTask",
  body: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListPayoutStripeTransferDisabledNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPayoutStripeTransferDisabledNotifyingTasks",
  body: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_DISABLED_NOTIFYING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK: RemoteCallDescriptor = {
  name: "ProcessPayoutStripeTransferSuccessNotifyingTask",
  service: COMMERCE_NODE_SERVICE,
  path: "/ProcessPayoutStripeTransferSuccessNotifyingTask",
  body: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASK_RESPONSE,
  },
}

export let LIST_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASKS: RemoteCallDescriptor = {
  name: "ListPayoutStripeTransferSuccessNotifyingTasks",
  service: COMMERCE_NODE_SERVICE,
  path: "/ListPayoutStripeTransferSuccessNotifyingTasks",
  body: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYOUT_STRIPE_TRANSFER_SUCCESS_NOTIFYING_TASKS_RESPONSE,
  },
}
