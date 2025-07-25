import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentProfile, PAYMENT_PROFILE } from './payment_profile';
import { Payment, PAYMENT } from './payment';
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

export interface ReactivatePaymentProfileRequestBody {
}

export let REACTIVATE_PAYMENT_PROFILE_REQUEST_BODY: MessageDescriptor<ReactivatePaymentProfileRequestBody> = {
  name: 'ReactivatePaymentProfileRequestBody',
  fields: [],
};

export interface ReactivatePaymentProfileResponse {
}

export let REACTIVATE_PAYMENT_PROFILE_RESPONSE: MessageDescriptor<ReactivatePaymentProfileResponse> = {
  name: 'ReactivatePaymentProfileResponse',
  fields: [],
};

export interface GetPaymentProfileInfoRequestBody {
}

export let GET_PAYMENT_PROFILE_INFO_REQUEST_BODY: MessageDescriptor<GetPaymentProfileInfoRequestBody> = {
  name: 'GetPaymentProfileInfoRequestBody',
  fields: [],
};

export interface GetPaymentProfileInfoResponse {
  notAvailable?: boolean,
  paymentProfile?: PaymentProfile,
}

export let GET_PAYMENT_PROFILE_INFO_RESPONSE: MessageDescriptor<GetPaymentProfileInfoResponse> = {
  name: 'GetPaymentProfileInfoResponse',
  fields: [{
    name: 'notAvailable',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'paymentProfile',
    index: 2,
    messageType: PAYMENT_PROFILE,
  }],
};

export interface ListPaymentsRequestBody {
  startMonth?: string,
  endMonth?: string,
}

export let LIST_PAYMENTS_REQUEST_BODY: MessageDescriptor<ListPaymentsRequestBody> = {
  name: 'ListPaymentsRequestBody',
  fields: [{
    name: 'startMonth',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListPaymentsResponse {
  payments?: Array<Payment>,
}

export let LIST_PAYMENTS_RESPONSE: MessageDescriptor<ListPaymentsResponse> = {
  name: 'ListPaymentsResponse',
  fields: [{
    name: 'payments',
    index: 1,
    messageType: PAYMENT,
    isArray: true,
  }],
};

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD: RemoteCallDescriptor = {
  name: "CreateStripeSessionToAddPaymentMethod",
  service: COMMERCE_WEB_SERVICE,
  path: "/pm/CreateStripeSessionToAddPaymentMethod",
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
  path: "/pm/ReplacePrimaryPaymentMethod",
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
  path: "/pm/RetryFailedPayments",
  body: {
    messageType: RETRY_FAILED_PAYMENTS_REQUSET_BODY,
  },
  authKey: "a",
  response: {
    messageType: RETRY_FAILED_PAYMENTS_RESPONSE,
  },
}

export let REACTIVATE_PAYMENT_PROFILE: RemoteCallDescriptor = {
  name: "ReactivatePaymentProfile",
  service: COMMERCE_WEB_SERVICE,
  path: "/pm/ReactivatePaymentProfile",
  body: {
    messageType: REACTIVATE_PAYMENT_PROFILE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: REACTIVATE_PAYMENT_PROFILE_RESPONSE,
  },
}

export let GET_PAYMENT_PROFILE_INFO: RemoteCallDescriptor = {
  name: "GetPaymentProfileInfo",
  service: COMMERCE_WEB_SERVICE,
  path: "/pm/GetPaymentProfileInfo",
  body: {
    messageType: GET_PAYMENT_PROFILE_INFO_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_PAYMENT_PROFILE_INFO_RESPONSE,
  },
}

export let LIST_PAYMENTS: RemoteCallDescriptor = {
  name: "ListPayments",
  service: COMMERCE_WEB_SERVICE,
  path: "/pm/ListPayments",
  body: {
    messageType: LIST_PAYMENTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_PAYMENTS_RESPONSE,
  },
}
