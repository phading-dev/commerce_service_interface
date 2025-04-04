import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';
import { BillingProfileState, BILLING_PROFILE_STATE } from './billing_profile_state';
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

export interface RetryFailedPaymentsRequsetBody {
}

export let RETRY_FAILED_PAYMENTS_REQUSET_BODY: MessageDescriptor<RetryFailedPaymentsRequsetBody> = {
  name: 'RetryFailedPaymentsRequsetBody',
  fields: [],
};

export interface RetryFailedPaymentsResponse {
}

export let RETRY_FAILED_PAYMENTS_RESPONSE: MessageDescriptor<RetryFailedPaymentsResponse> = {
  name: 'RetryFailedPaymentsResponse',
  fields: [],
};

export interface GetBillingProfileInfoRequestBody {
}

export let GET_BILLING_PROFILE_INFO_REQUEST_BODY: MessageDescriptor<GetBillingProfileInfoRequestBody> = {
  name: 'GetBillingProfileInfoRequestBody',
  fields: [],
};

export interface GetBillingProfileInfoResponse {
  primaryPaymentMethod?: PaymentMethodMasked,
  state?: BillingProfileState,
}

export let GET_BILLING_PROFILE_INFO_RESPONSE: MessageDescriptor<GetBillingProfileInfoResponse> = {
  name: 'GetBillingProfileInfoResponse',
  fields: [{
    name: 'primaryPaymentMethod',
    index: 1,
    messageType: PAYMENT_METHOD_MASKED,
  }, {
    name: 'state',
    index: 2,
    enumType: BILLING_PROFILE_STATE,
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

export let RETRY_FAILED_PAYMENTS: RemoteCallDescriptor = {
  name: "RetryFailedPayments",
  service: COMMERCE_WEB_SERVICE,
  path: "/RetryFailedPayments",
  body: {
    messageType: RETRY_FAILED_PAYMENTS_REQUSET_BODY,
  },
  authKey: "a",
  response: {
    messageType: RETRY_FAILED_PAYMENTS_RESPONSE,
  },
}

export let GET_BILLING_PROFILE_INFO: RemoteCallDescriptor = {
  name: "GetBillingProfileInfo",
  service: COMMERCE_WEB_SERVICE,
  path: "/GetBillingProfileInfo",
  body: {
    messageType: GET_BILLING_PROFILE_INFO_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_BILLING_PROFILE_INFO_RESPONSE,
  },
}
