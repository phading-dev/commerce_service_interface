import { GetPayoutProfileInfoRequestBody, GetPayoutProfileInfoResponse, GET_PAYOUT_PROFILE_INFO, ListPayoutsRequestBody, ListPayoutsResponse, LIST_PAYOUTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetPayoutProfileInfoRequest(
  body: GetPayoutProfileInfoRequestBody,
): ClientRequestInterface<GetPayoutProfileInfoResponse> {
  return {
    descriptor: GET_PAYOUT_PROFILE_INFO,
    body,
  };
}

export function newListPayoutsRequest(
  body: ListPayoutsRequestBody,
): ClientRequestInterface<ListPayoutsResponse> {
  return {
    descriptor: LIST_PAYOUTS,
    body,
  };
}
