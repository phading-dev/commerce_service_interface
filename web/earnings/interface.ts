import { MessageDescriptor, EnumDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Earnings, EARNINGS } from './statement';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

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
