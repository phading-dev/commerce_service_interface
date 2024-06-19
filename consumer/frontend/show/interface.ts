import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { MeterReadingPerSeason, METER_READING_PER_SEASON, MeterReadingPerDay, METER_READING_PER_DAY } from './meter_reading';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface ListMeterReadingsForDayRequestBody {
  day?: number,
  month?: number,
  year?: number,
}

export let LIST_METER_READINGS_FOR_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsForDayRequestBody> = {
  name: 'ListMeterReadingsForDayRequestBody',
  fields: [
    {
      name: 'day',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'month',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'year',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface ListMeterReadingsForDayResponse {
  readings?: MeterReadingPerSeason,
}

export let LIST_METER_READINGS_FOR_DAY_RESPONSE: MessageDescriptor<ListMeterReadingsForDayResponse> = {
  name: 'ListMeterReadingsForDayResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_SEASON,
    },
  ]
};

export let LIST_METER_READINGS_FOR_DAY: ServiceDescriptor = {
  name: "ListMeterReadingsForDay",
  path: "/ListMeterReadingsForDay",
  body: {
    messageType: LIST_METER_READINGS_FOR_DAY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_FOR_DAY_RESPONSE,
  },
}

export interface ListMeterReadingsForMonthRequestBody {
  month?: number,
  year?: number,
}

export let LIST_METER_READINGS_FOR_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsForMonthRequestBody> = {
  name: 'ListMeterReadingsForMonthRequestBody',
  fields: [
    {
      name: 'month',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'year',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface ListMeterReadingsForMonthResponse {
  readings?: MeterReadingPerDay,
}

export let LIST_METER_READINGS_FOR_MONTH_RESPONSE: MessageDescriptor<ListMeterReadingsForMonthResponse> = {
  name: 'ListMeterReadingsForMonthResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_DAY,
    },
  ]
};

export let LIST_METER_READINGS_FOR_MONTH: ServiceDescriptor = {
  name: "ListMeterReadingsForMonth",
  path: "/ListMeterReadingsForMonth",
  body: {
    messageType: LIST_METER_READINGS_FOR_MONTH_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_FOR_MONTH_RESPONSE,
  },
}
