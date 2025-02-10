import { GetConnectedAccountLinkRequestBody, GET_CONNECTED_ACCOUNT_LINK, GetConnectedAccountLinkResponse, SetConnectedAccountOnboardedRequestBody, SET_CONNECTED_ACCOUNT_ONBOARDED, SetConnectedAccountOnboardedResponse, ListEarningsRequestBody, LIST_EARNINGS, ListEarningsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetConnectedAccountLinkHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONNECTED_ACCOUNT_LINK;
  public abstract handle(
    loggingPrefix: string,
    body: GetConnectedAccountLinkRequestBody,
    authStr: string,
  ): Promise<GetConnectedAccountLinkResponse>;
}

export abstract class SetConnectedAccountOnboardedHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SET_CONNECTED_ACCOUNT_ONBOARDED;
  public abstract handle(
    loggingPrefix: string,
    body: SetConnectedAccountOnboardedRequestBody,
    authStr: string,
  ): Promise<SetConnectedAccountOnboardedResponse>;
}

export abstract class ListEarningsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_EARNINGS;
  public abstract handle(
    loggingPrefix: string,
    body: ListEarningsRequestBody,
    authStr: string,
  ): Promise<ListEarningsResponse>;
}
