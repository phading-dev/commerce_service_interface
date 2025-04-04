import { MessageDescriptor, EnumDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetEarningsProfileInfoRequestBody {
}

export let GET_EARNINGS_PROFILE_INFO_REQUEST_BODY: MessageDescriptor<GetEarningsProfileInfoRequestBody> = {
  name: 'GetEarningsProfileInfoRequestBody',
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

export interface GetEarningsProfileInfoResponse {
  connectedAccountLinkType?: LinkType,
  connectedAccountUrl?: string,
}

export let GET_EARNINGS_PROFILE_INFO_RESPONSE: MessageDescriptor<GetEarningsProfileInfoResponse> = {
  name: 'GetEarningsProfileInfoResponse',
  fields: [{
    name: 'connectedAccountLinkType',
    index: 1,
    enumType: LINK_TYPE,
  }, {
    name: 'connectedAccountUrl',
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

export let GET_EARNINGS_PROFILE_INFO: RemoteCallDescriptor = {
  name: "GetEarningsProfileInfo",
  service: COMMERCE_WEB_SERVICE,
  path: "/GetEarningsProfileInfo",
  body: {
    messageType: GET_EARNINGS_PROFILE_INFO_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_EARNINGS_PROFILE_INFO_RESPONSE,
  },
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED: RemoteCallDescriptor = {
  name: "SetConnectedAccountOnboarded",
  service: COMMERCE_WEB_SERVICE,
  path: "/SetConnectedAccountOnboarded",
  body: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_RESPONSE,
  },
}
