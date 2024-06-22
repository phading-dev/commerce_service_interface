import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { GetPricingRequestBody, GetPricingResponse, GET_PRICING, ListMeterReadingsForDayRequestBody, ListMeterReadingsForDayResponse, LIST_METER_READINGS_FOR_DAY, ListMeterReadingsForMonthRequestBody, ListMeterReadingsForMonthResponse, LIST_METER_READINGS_FOR_MONTH, ListMeterReadingsForMonthPeriodRequestBody, ListMeterReadingsForMonthPeriodResponse, LIST_METER_READINGS_FOR_MONTH_PERIOD } from './interface';

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

export function listMeterReadingsForDay(
  client: WebServiceClientInterface,
  body: ListMeterReadingsForDayRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsForDayResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_FOR_DAY,
      body,
    },
    options,
  );
}

export function listMeterReadingsForMonth(
  client: WebServiceClientInterface,
  body: ListMeterReadingsForMonthRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsForMonthResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_FOR_MONTH,
      body,
    },
    options,
  );
}

export function listMeterReadingsForMonthPeriod(
  client: WebServiceClientInterface,
  body: ListMeterReadingsForMonthPeriodRequestBody,
  options?: WebServiceClientOptions,
): Promise<ListMeterReadingsForMonthPeriodResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_FOR_MONTH_PERIOD,
      body,
    },
    options,
  );
}
