import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { LIST_METER_READINGS_FOR_DAY, ListMeterReadingsForDayRequestBody, ListMeterReadingsForDayResponse, LIST_METER_READINGS_FOR_MONTH, ListMeterReadingsForMonthRequestBody, ListMeterReadingsForMonthResponse, LIST_METER_READINGS_FOR_MONTH_PERIOD, ListMeterReadingsForMonthPeriodRequestBody, ListMeterReadingsForMonthPeriodResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class ListMeterReadingsForDayHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_FOR_DAY;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsForDayRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsForDayResponse>;
}

export abstract class ListMeterReadingsForMonthHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_FOR_MONTH;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsForMonthRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsForMonthResponse>;
}

export abstract class ListMeterReadingsForMonthPeriodHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_FOR_MONTH_PERIOD;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsForMonthPeriodRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsForMonthPeriodResponse>;
}
