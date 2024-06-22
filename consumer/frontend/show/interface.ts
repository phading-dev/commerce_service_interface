import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { Date, DATE, MeterReadingPerSeason, METER_READING_PER_SEASON, DateMonth, DATE_MONTH, MeterReadingPerDay, METER_READING_PER_DAY } from './meter_reading';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface GetPricingRequestBody {
  grade?: number,
}

export let GET_PRICING_REQUEST_BODY: MessageDescriptor<GetPricingRequestBody> = {
  name: 'GetPricingRequestBody',
  fields: [
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface GetPricingResponse {
/* USD. Per hour rate. */
  money?: Money,
}

export let GET_PRICING_RESPONSE: MessageDescriptor<GetPricingResponse> = {
  name: 'GetPricingResponse',
  fields: [
    {
      name: 'money',
      messageType: MONEY,
    },
  ]
};

export let GET_PRICING: ServiceDescriptor = {
  name: "GetPricing",
  path: "/GetPricing",
  body: {
    messageType: GET_PRICING_REQUEST_BODY,
  },
  response: {
    messageType: GET_PRICING_RESPONSE,
  },
}

export interface ListMeterReadingsForDayRequestBody {
  day?: Date,
}

export let LIST_METER_READINGS_FOR_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsForDayRequestBody> = {
  name: 'ListMeterReadingsForDayRequestBody',
  fields: [
    {
      name: 'day',
      messageType: DATE,
    },
  ]
};

export interface ListMeterReadingsForDayResponse {
  readings?: Array<MeterReadingPerSeason>,
}

export let LIST_METER_READINGS_FOR_DAY_RESPONSE: MessageDescriptor<ListMeterReadingsForDayResponse> = {
  name: 'ListMeterReadingsForDayResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_SEASON,
      isArray: true,
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
  month?: DateMonth,
}

export let LIST_METER_READINGS_FOR_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsForMonthRequestBody> = {
  name: 'ListMeterReadingsForMonthRequestBody',
  fields: [
    {
      name: 'month',
      messageType: DATE_MONTH,
    },
  ]
};

export interface ListMeterReadingsForMonthResponse {
  readings?: Array<MeterReadingPerDay>,
}

export let LIST_METER_READINGS_FOR_MONTH_RESPONSE: MessageDescriptor<ListMeterReadingsForMonthResponse> = {
  name: 'ListMeterReadingsForMonthResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_DAY,
      isArray: true,
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

export interface ListMeterReadingsForMonthPeriodRequestBody {
  startMonth?: DateMonth,
  endMonth?: DateMonth,
}

export let LIST_METER_READINGS_FOR_MONTH_PERIOD_REQUEST_BODY: MessageDescriptor<ListMeterReadingsForMonthPeriodRequestBody> = {
  name: 'ListMeterReadingsForMonthPeriodRequestBody',
  fields: [
    {
      name: 'startMonth',
      messageType: DATE_MONTH,
    },
    {
      name: 'endMonth',
      messageType: DATE_MONTH,
    },
  ]
};

export interface ListMeterReadingsForMonthPeriodResponse {
  readings?: Array<MeterReadingPerDay>,
}

export let LIST_METER_READINGS_FOR_MONTH_PERIOD_RESPONSE: MessageDescriptor<ListMeterReadingsForMonthPeriodResponse> = {
  name: 'ListMeterReadingsForMonthPeriodResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_DAY,
      isArray: true,
    },
  ]
};

export let LIST_METER_READINGS_FOR_MONTH_PERIOD: ServiceDescriptor = {
  name: "ListMeterReadingsForMonthPeriod",
  path: "/ListMeterReadingsForMonthPeriod",
  body: {
    messageType: LIST_METER_READINGS_FOR_MONTH_PERIOD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_FOR_MONTH_PERIOD_RESPONSE,
  },
}
