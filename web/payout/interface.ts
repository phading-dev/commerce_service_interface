import { MessageDescriptor, EnumDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Payout, PAYOUT } from './payout';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetPayoutProfileInfoRequestBody {
}

export let GET_PAYOUT_PROFILE_INFO_REQUEST_BODY: MessageDescriptor<GetPayoutProfileInfoRequestBody> = {
  name: 'GetPayoutProfileInfoRequestBody',
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

export interface GetPayoutProfileInfoResponse {
  connectedAccountLinkType?: LinkType,
  connectedAccountUrl?: string,
}

export let GET_PAYOUT_PROFILE_INFO_RESPONSE: MessageDescriptor<GetPayoutProfileInfoResponse> = {
  name: 'GetPayoutProfileInfoResponse',
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

export interface ListPayoutsRequestBody {
  startMonth?: string,
  endMonth?: string,
}

export let LIST_PAYOUTS_REQUEST_BODY: MessageDescriptor<ListPayoutsRequestBody> = {
  name: 'ListPayoutsRequestBody',
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

export interface ListPayoutsResponse {
  payouts?: Array<Payout>,
}

export let LIST_PAYOUTS_RESPONSE: MessageDescriptor<ListPayoutsResponse> = {
  name: 'ListPayoutsResponse',
  fields: [{
    name: 'payouts',
    index: 1,
    messageType: PAYOUT,
    isArray: true,
  }],
};

export let GET_PAYOUT_PROFILE_INFO: RemoteCallDescriptor = {
  name: "GetPayoutProfileInfo",
  service: COMMERCE_WEB_SERVICE,
  path: "/po/GetPayoutProfileInfo",
  body: {
    messageType: GET_PAYOUT_PROFILE_INFO_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_PAYOUT_PROFILE_INFO_RESPONSE,
  },
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED: RemoteCallDescriptor = {
  name: "SetConnectedAccountOnboarded",
  service: COMMERCE_WEB_SERVICE,
  path: "/po/SetConnectedAccountOnboarded",
  body: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_RESPONSE,
  },
}

export let LIST_PAYOUTS: RemoteCallDescriptor = {
  name: "ListPayouts",
  service: COMMERCE_WEB_SERVICE,
  path: "/po/ListPayouts",
  body: {
    messageType: LIST_PAYOUTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_PAYOUTS_RESPONSE,
  },
}
