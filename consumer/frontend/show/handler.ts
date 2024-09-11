import { GetPricingRequestBody, GET_PRICING, GetPricingResponse, ListMeterReadingsPerSeasonRequestBody, LIST_METER_READINGS_PER_SEASON, ListMeterReadingsPerSeasonResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class GetPricingHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_PRICING;
  public abstract handle(
    loggingPrefix: string,
    body: GetPricingRequestBody,
  ): Promise<GetPricingResponse>;
}

export abstract class ListMeterReadingsPerSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerSeasonRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerSeasonResponse>;
}

export abstract class ListMeterReadingsPerDayHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_DAY;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerDayRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerDayResponse>;
}

export abstract class ListMeterReadingsPerMonthHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_MONTH;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerMonthRequestBody,
    auth: ClientSession,
  ): Promise<ListMeterReadingsPerMonthResponse>;
}
