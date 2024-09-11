import { GetPricingRequestBody, GetPricingResponse, GET_PRICING, ListMeterReadingsPerSeasonRequestBody, ListMeterReadingsPerSeasonResponse, LIST_METER_READINGS_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getPricing(
  client: WebClientInterface,
  body: GetPricingRequestBody,
  options?: WebClientOptions,
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
  client: WebClientInterface,
  body: ListMeterReadingsPerSeasonRequestBody,
  options?: WebClientOptions,
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
  client: WebClientInterface,
  body: ListMeterReadingsPerDayRequestBody,
  options?: WebClientOptions,
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
  client: WebClientInterface,
  body: ListMeterReadingsPerMonthRequestBody,
  options?: WebClientOptions,
): Promise<ListMeterReadingsPerMonthResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_MONTH,
      body,
    },
    options,
  );
}
