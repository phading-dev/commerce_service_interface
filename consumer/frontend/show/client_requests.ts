import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { GetPricingRequestBody, GetPricingResponse, GET_PRICING, ListMeterReadingsPerSeasonRequestBody, ListMeterReadingsPerSeasonResponse, LIST_METER_READINGS_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';

export function getPricing(
  client: WebServiceClientInterface,
  body: GetPricingRequestBody,
  options?: WebServiceClientOptions,
): Promise<GetPricingResponse> {
  return client.send(
    {
      descriptor: GET_PRICING,
      body,
    },
    options,
  );
}

export function listMeterReadingsPerSeason(
  client: WebServiceClientInterface,
  body: ListMeterReadingsPerSeasonRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsPerSeasonResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_SEASON,
      body,
    },
    options,
  );
}

export function listMeterReadingsPerDay(
  client: WebServiceClientInterface,
  body: ListMeterReadingsPerDayRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsPerDayResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_DAY,
      body,
    },
    options,
  );
}

export function listMeterReadingsPerMonth(
  client: WebServiceClientInterface,
  body: ListMeterReadingsPerMonthRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsPerMonthResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_MONTH,
      body,
    },
    options,
  );
}
