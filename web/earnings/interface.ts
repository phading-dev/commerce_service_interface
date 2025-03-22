import { MessageDescriptor, EnumDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export let GET_CONNECTED_ACCOUNT_LINK: RemoteCallDescriptor = {
  name: "GetConnectedAccountLink",
  service: COMMERCE_WEB_SERVICE,
  path: "/GetConnectedAccountLink",
  body: {
    messageType: GET_CONNECTED_ACCOUNT_LINK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_CONNECTED_ACCOUNT_LINK_RESPONSE,
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
