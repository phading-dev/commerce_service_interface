import { GetConnectedAccountLinkRequestBody, GET_CONNECTED_ACCOUNT_LINK, GetConnectedAccountLinkResponse, SetConnectedAccountOnboardedRequestBody, SET_CONNECTED_ACCOUNT_ONBOARDED, SetConnectedAccountOnboardedResponse, ListEarningsRequestBody, LIST_EARNINGS, ListEarningsResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetConnectedAccountLinkHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_CONNECTED_ACCOUNT_LINK;
  public abstract handle(
    loggingPrefix: string,
    body: GetConnectedAccountLinkRequestBody,
    sessionStr: string,
  ): Promise<GetConnectedAccountLinkResponse>;
}

export abstract class SetConnectedAccountOnboardedHandlerInterface implements WebHandlerInterface {
  public descriptor = SET_CONNECTED_ACCOUNT_ONBOARDED;
  public abstract handle(
    loggingPrefix: string,
    body: SetConnectedAccountOnboardedRequestBody,
    sessionStr: string,
  ): Promise<SetConnectedAccountOnboardedResponse>;
}

export abstract class ListEarningsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_EARNINGS;
  public abstract handle(
    loggingPrefix: string,
    body: ListEarningsRequestBody,
    sessionStr: string,
  ): Promise<ListEarningsResponse>;
}
