import { GetEarningsProfileInfoRequestBody, GET_EARNINGS_PROFILE_INFO, GetEarningsProfileInfoResponse, SetConnectedAccountOnboardedRequestBody, SET_CONNECTED_ACCOUNT_ONBOARDED, SetConnectedAccountOnboardedResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetEarningsProfileInfoHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_EARNINGS_PROFILE_INFO;
  public abstract handle(
    loggingPrefix: string,
    body: GetEarningsProfileInfoRequestBody,
    authStr: string,
  ): Promise<GetEarningsProfileInfoResponse>;
}

export abstract class SetConnectedAccountOnboardedHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SET_CONNECTED_ACCOUNT_ONBOARDED;
  public abstract handle(
    loggingPrefix: string,
    body: SetConnectedAccountOnboardedRequestBody,
    authStr: string,
  ): Promise<SetConnectedAccountOnboardedResponse>;
}
