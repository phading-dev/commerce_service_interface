import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateStripeSessionToAddPaymentMethodRequestBody {
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<CreateStripeSessionToAddPaymentMethodRequestBody> = {
  name: 'CreateStripeSessionToAddPaymentMethodRequestBody',
  fields: [],
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

export interface ReplacePrimaryPaymentMethodRequestBody {
  checkoutSessionId?: string,
}

export let REPLACE_PRIMARY_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<ReplacePrimaryPaymentMethodRequestBody> = {
  name: 'ReplacePrimaryPaymentMethodRequestBody',
  fields: [{
    name: 'checkoutSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ReplacePrimaryPaymentMethodResponse {
}

export let REPLACE_PRIMARY_PAYMENT_METHOD_RESPONSE: MessageDescriptor<ReplacePrimaryPaymentMethodResponse> = {
  name: 'ReplacePrimaryPaymentMethodResponse',
  fields: [],
};

export interface GetPrimaryPaymentMethodRequestBody {
}

export let GET_PRIMARY_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<GetPrimaryPaymentMethodRequestBody> = {
  name: 'GetPrimaryPaymentMethodRequestBody',
  fields: [],
};

export interface GetPrimaryPaymentMethodResponse {
  paymentMethod?: PaymentMethodMasked,
}

export let GET_PRIMARY_PAYMENT_METHOD_RESPONSE: MessageDescriptor<GetPrimaryPaymentMethodResponse> = {
  name: 'GetPrimaryPaymentMethodResponse',
  fields: [{
    name: 'paymentMethod',
    index: 1,
    messageType: PAYMENT_METHOD_MASKED,
  }],
};

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD: RemoteCallDescriptor = {
  name: "CreateStripeSessionToAddPaymentMethod",
  service: COMMERCE_WEB_SERVICE,
  path: "/CreateStripeSessionToAddPaymentMethod",
  body: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_RESPONSE,
  },
}

export let REPLACE_PRIMARY_PAYMENT_METHOD: RemoteCallDescriptor = {
  name: "ReplacePrimaryPaymentMethod",
  service: COMMERCE_WEB_SERVICE,
  path: "/ReplacePrimaryPaymentMethod",
  body: {
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD_RESPONSE,
  },
}

export let GET_PRIMARY_PAYMENT_METHOD: RemoteCallDescriptor = {
  name: "GetPrimaryPaymentMethod",
  service: COMMERCE_WEB_SERVICE,
  path: "/GetPrimaryPaymentMethod",
  body: {
    messageType: GET_PRIMARY_PAYMENT_METHOD_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_PRIMARY_PAYMENT_METHOD_RESPONSE,
  },
}
