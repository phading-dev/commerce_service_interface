import { MessageDescriptor, PrimitiveType, EnumDescriptor } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';
import { Billing, BILLING, Earnings, EARNINGS } from './statement';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface ListBillingsRequestBody {
  startMonth?: string,
  endMonth?: string,
}

export let LIST_BILLINGS_REQUEST_BODY: MessageDescriptor<ListBillingsRequestBody> = {
  name: 'ListBillingsRequestBody',
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

export interface ListBillingsResponse {
  billings?: Array<Billing>,
}

export let LIST_BILLINGS_RESPONSE: MessageDescriptor<ListBillingsResponse> = {
  name: 'ListBillingsResponse',
  fields: [{
    name: 'billings',
    index: 1,
    messageType: BILLING,
    isArray: true,
  }],
};

export interface GetConnectedAccountLinkRequestBody {
}

export let GET_CONNECTED_ACCOUNT_LINK_REQUEST_BODY: MessageDescriptor<GetConnectedAccountLinkRequestBody> = {
  name: 'GetConnectedAccountLinkRequestBody',
  fields: [],
};

export enum LinkType {
  ONBOARDING = 1,
  LOGIN = 2,
}

export let LINK_TYPE: EnumDescriptor<LinkType> = {
  name: 'LinkType',
  values: [{
    name: 'ONBOARDING',
    value: 1,
  }, {
    name: 'LOGIN',
    value: 2,
  }]
}

export interface GetConnectedAccountLinkResponse {
  type?: LinkType,
  url?: string,
}

export let GET_CONNECTED_ACCOUNT_LINK_RESPONSE: MessageDescriptor<GetConnectedAccountLinkResponse> = {
  name: 'GetConnectedAccountLinkResponse',
  fields: [{
    name: 'type',
    index: 1,
    enumType: LINK_TYPE,
  }, {
    name: 'url',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SetConnectedAccountOnboardedRequestBody {
  accountId?: string,
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED_REQUEST_BODY: MessageDescriptor<SetConnectedAccountOnboardedRequestBody> = {
  name: 'SetConnectedAccountOnboardedRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SetConnectedAccountOnboardedResponse {
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED_RESPONSE: MessageDescriptor<SetConnectedAccountOnboardedResponse> = {
  name: 'SetConnectedAccountOnboardedResponse',
  fields: [],
};

export interface ListEarningsRequestBody {
  startMonth?: string,
  endMonth?: string,
}

export let LIST_EARNINGS_REQUEST_BODY: MessageDescriptor<ListEarningsRequestBody> = {
  name: 'ListEarningsRequestBody',
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

export interface ListEarningsResponse {
  earnings?: Array<Earnings>,
}

export let LIST_EARNINGS_RESPONSE: MessageDescriptor<ListEarningsResponse> = {
  name: 'ListEarningsResponse',
  fields: [{
    name: 'earnings',
    index: 1,
    messageType: EARNINGS,
    isArray: true,
  }],
};

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

export let REPLACE_PRIMARY_PAYMENT_METHOD: WebRemoteCallDescriptor = {
  name: "ReplacePrimaryPaymentMethod",
  path: "/ReplacePrimaryPaymentMethod",
  body: {
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD_RESPONSE,
  },
}

export let GET_PRIMARY_PAYMENT_METHOD: WebRemoteCallDescriptor = {
  name: "GetPrimaryPaymentMethod",
  path: "/GetPrimaryPaymentMethod",
  body: {
    messageType: GET_PRIMARY_PAYMENT_METHOD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_PRIMARY_PAYMENT_METHOD_RESPONSE,
  },
}

export let LIST_BILLINGS: WebRemoteCallDescriptor = {
  name: "ListBillings",
  path: "/ListBillings",
  body: {
    messageType: LIST_BILLINGS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_BILLINGS_RESPONSE,
  },
}

export let GET_CONNECTED_ACCOUNT_LINK: WebRemoteCallDescriptor = {
  name: "GetConnectedAccountLink",
  path: "/GetConnectedAccountLink",
  body: {
    messageType: GET_CONNECTED_ACCOUNT_LINK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_CONNECTED_ACCOUNT_LINK_RESPONSE,
  },
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED: WebRemoteCallDescriptor = {
  name: "SetConnectedAccountOnboarded",
  path: "/SetConnectedAccountOnboarded",
  body: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_RESPONSE,
  },
}

export let LIST_EARNINGS: WebRemoteCallDescriptor = {
  name: "ListEarnings",
  path: "/ListEarnings",
  body: {
    messageType: LIST_EARNINGS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_EARNINGS_RESPONSE,
  },
}
