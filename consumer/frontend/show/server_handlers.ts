import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_PRICING, GetPricingRequestBody, GetPricingResponse, LIST_METER_READINGS_PER_SEASON, ListMeterReadingsPerSeasonRequestBody, ListMeterReadingsPerSeasonResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class GetPricingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_PRICING;
  public abstract handle(
    loggingPrefix: string,
    body: GetPricingRequestBody,
  ): Promise<GetPricingResponse>;
}

export abstract class ListMeterReadingsPerSeasonHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerSeasonRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerSeasonResponse>;
}

export abstract class ListMeterReadingsPerDayHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_DAY;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerDayRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerDayResponse>;
}

export abstract class ListMeterReadingsPerMonthHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_MONTH;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerMonthRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerMonthResponse>;
}
