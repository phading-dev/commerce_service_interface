import { GetConnectedAccountLinkRequestBody, GetConnectedAccountLinkResponse, GET_CONNECTED_ACCOUNT_LINK, SetConnectedAccountOnboardedRequestBody, SetConnectedAccountOnboardedResponse, SET_CONNECTED_ACCOUNT_ONBOARDED, ListEarningsRequestBody, ListEarningsResponse, LIST_EARNINGS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getConnectedAccountLink(
  client: WebClientInterface,
  body: GetConnectedAccountLinkRequestBody,
  options?: WebClientOptions,
): Promise<GetConnectedAccountLinkResponse> {
  return client.send(
    {
      descriptor: GET_CONNECTED_ACCOUNT_LINK,
      body,
    },
    options,
  );
}

export function setConnectedAccountOnboarded(
  client: WebClientInterface,
  body: SetConnectedAccountOnboardedRequestBody,
  options?: WebClientOptions,
): Promise<SetConnectedAccountOnboardedResponse> {
  return client.send(
    {
      descriptor: SET_CONNECTED_ACCOUNT_ONBOARDED,
      body,
    },
    options,
  );
}

export function listEarnings(
  client: WebClientInterface,
  body: ListEarningsRequestBody,
  options?: WebClientOptions,
): Promise<ListEarningsResponse> {
  return client.send(
    {
      descriptor: LIST_EARNINGS,
      body,
    },
    options,
  );
}
