import { GetEarningsProfileInfoRequestBody, GetEarningsProfileInfoResponse, GET_EARNINGS_PROFILE_INFO, SetConnectedAccountOnboardedRequestBody, SetConnectedAccountOnboardedResponse, SET_CONNECTED_ACCOUNT_ONBOARDED } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetEarningsProfileInfoRequest(
  body: GetEarningsProfileInfoRequestBody,
): ClientRequestInterface<GetEarningsProfileInfoResponse> {
  return {
    descriptor: GET_EARNINGS_PROFILE_INFO,
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
