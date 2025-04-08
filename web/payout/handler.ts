import { GetPayoutProfileInfoRequestBody, GET_PAYOUT_PROFILE_INFO, GetPayoutProfileInfoResponse, SetConnectedAccountOnboardedRequestBody, SET_CONNECTED_ACCOUNT_ONBOARDED, SetConnectedAccountOnboardedResponse, ListPayoutsRequestBody, LIST_PAYOUTS, ListPayoutsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetPayoutProfileInfoHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_PAYOUT_PROFILE_INFO;
  public abstract handle(
    loggingPrefix: string,
    body: GetPayoutProfileInfoRequestBody,
    authStr: string,
  ): Promise<GetPayoutProfileInfoResponse>;
}

export abstract class SetConnectedAccountOnboardedHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SET_CONNECTED_ACCOUNT_ONBOARDED;
  public abstract handle(
    loggingPrefix: string,
    body: SetConnectedAccountOnboardedRequestBody,
    authStr: string,
  ): Promise<SetConnectedAccountOnboardedResponse>;
}

export abstract class ListPayoutsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYOUTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPayoutsRequestBody,
    authStr: string,
  ): Promise<ListPayoutsResponse>;
}
