import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { ListMeterReadingsForDayRequestBody, ListMeterReadingsForDayResponse, LIST_METER_READINGS_FOR_DAY, ListMeterReadingsForMonthRequestBody, ListMeterReadingsForMonthResponse, LIST_METER_READINGS_FOR_MONTH } from './interface';

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
