import { GetConnectedAccountLinkRequestBody, GetConnectedAccountLinkResponse, GET_CONNECTED_ACCOUNT_LINK, SetConnectedAccountOnboardedRequestBody, SetConnectedAccountOnboardedResponse, SET_CONNECTED_ACCOUNT_ONBOARDED } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetConnectedAccountLinkRequest(
  body: GetConnectedAccountLinkRequestBody,
): ClientRequestInterface<GetConnectedAccountLinkResponse> {
  return {
    descriptor: GET_CONNECTED_ACCOUNT_LINK,
    body,
  };
}

export function newSetConnectedAccountOnboardedRequest(
  body: SetConnectedAccountOnboardedRequestBody,
): ClientRequestInterface<SetConnectedAccountOnboardedResponse> {
  return {
    descriptor: SET_CONNECTED_ACCOUNT_ONBOARDED,
    body,
  };
}
