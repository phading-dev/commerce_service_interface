import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';
import { PaymentMethodUpdate, PAYMENT_METHOD_UPDATE } from './payment_method_update';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ListPaymentMethodsRequestBody {
}

export let LIST_PAYMENT_METHODS_REQUEST_BODY: MessageDescriptor<ListPaymentMethodsRequestBody> = {
  name: 'ListPaymentMethodsRequestBody',
  fields: [],
};

export interface ListPaymentMethodsResponse {
  paymentMethods?: Array<PaymentMethodMasked>,
}

export let LIST_PAYMENT_METHODS_RESPONSE: MessageDescriptor<ListPaymentMethodsResponse> = {
  name: 'ListPaymentMethodsResponse',
  fields: [{
    name: 'paymentMethods',
    index: 1,
    messageType: PAYMENT_METHOD_MASKED,
    isArray: true,
  }],
};

export interface UpdatePaymentMethodRequestBody {
  paymentMethodUpdate?: PaymentMethodUpdate,
}

export let UPDATE_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<UpdatePaymentMethodRequestBody> = {
  name: 'UpdatePaymentMethodRequestBody',
  fields: [{
    name: 'paymentMethodUpdate',
    index: 1,
    messageType: PAYMENT_METHOD_UPDATE,
  }],
};

export interface UpdatePaymentMethodResponse {
}

export let UPDATE_PAYMENT_METHOD_RESPONSE: MessageDescriptor<UpdatePaymentMethodResponse> = {
  name: 'UpdatePaymentMethodResponse',
  fields: [],
};

export interface CreateStripeSessionToAddPaymentMethodRequestBody {
  backUrl?: string,
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<CreateStripeSessionToAddPaymentMethodRequestBody> = {
  name: 'CreateStripeSessionToAddPaymentMethodRequestBody',
  fields: [{
    name: 'backUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateStripeSessionToAddPaymentMethodResponse {
  redirectUrl?: string,
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_RESPONSE: MessageDescriptor<CreateStripeSessionToAddPaymentMethodResponse> = {
  name: 'CreateStripeSessionToAddPaymentMethodResponse',
  fields: [{
    name: 'redirectUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeletePaymentMethodRequestBody {
  paymentMethodId?: string,
}

export let DELETE_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<DeletePaymentMethodRequestBody> = {
  name: 'DeletePaymentMethodRequestBody',
  fields: [{
    name: 'paymentMethodId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeletePaymentMethodResponse {
}

export let DELETE_PAYMENT_METHOD_RESPONSE: MessageDescriptor<DeletePaymentMethodResponse> = {
  name: 'DeletePaymentMethodResponse',
  fields: [],
};

export let LIST_PAYMENT_METHODS: WebRemoteCallDescriptor = {
  name: "ListPaymentMethods",
  path: "/ListPaymentMethods",
  body: {
    messageType: LIST_PAYMENT_METHODS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_PAYMENT_METHODS_RESPONSE,
  },
}

export let UPDATE_PAYMENT_METHOD: WebRemoteCallDescriptor = {
  name: "UpdatePaymentMethod",
  path: "/UpdatePaymentMethod",
  body: {
    messageType: UPDATE_PAYMENT_METHOD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_PAYMENT_METHOD_RESPONSE,
  },
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD: WebRemoteCallDescriptor = {
  name: "CreateStripeSessionToAddPaymentMethod",
  path: "/CreateStripeSessionToAddPaymentMethod",
  body: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_RESPONSE,
  },
}

export let DELETE_PAYMENT_METHOD: WebRemoteCallDescriptor = {
  name: "DeletePaymentMethod",
  path: "/DeletePaymentMethod",
  body: {
    messageType: DELETE_PAYMENT_METHOD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_PAYMENT_METHOD_RESPONSE,
  },
}
