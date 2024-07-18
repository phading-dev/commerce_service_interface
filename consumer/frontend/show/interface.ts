import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { Date, DATE, MeterReadingPerSeason, METER_READING_PER_SEASON, DateMonth, DATE_MONTH, MeterReadingPerDay, METER_READING_PER_DAY, MeterReadingPerMonth, METER_READING_PER_MONTH } from './meter_reading';
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

export interface ListMeterReadingsPerSeasonRequestBody {
  date?: Date,
}

export let LIST_METER_READINGS_PER_SEASON_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerSeasonRequestBody> = {
  name: 'ListMeterReadingsPerSeasonRequestBody',
  fields: [
    {
      name: 'date',
      messageType: DATE,
    },
  ]
};

export interface ListMeterReadingsPerSeasonResponse {
  readings?: Array<MeterReadingPerSeason>,
}

export let LIST_METER_READINGS_PER_SEASON_RESPONSE: MessageDescriptor<ListMeterReadingsPerSeasonResponse> = {
  name: 'ListMeterReadingsPerSeasonResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_SEASON,
      isArray: true,
    },
  ]
};

export let LIST_METER_READINGS_PER_SEASON: ServiceDescriptor = {
  name: "ListMeterReadingsPerSeason",
  path: "/ListMeterReadingsPerSeason",
  body: {
    messageType: LIST_METER_READINGS_PER_SEASON_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_PER_SEASON_RESPONSE,
  },
}

export interface ListMeterReadingsPerDayRequestBody {
  startDate?: DateMonth,
  endDate?: DateMonth,
}

export let LIST_METER_READINGS_PER_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerDayRequestBody> = {
  name: 'ListMeterReadingsPerDayRequestBody',
  fields: [
    {
      name: 'startDate',
      messageType: DATE_MONTH,
    },
    {
      name: 'endDate',
      messageType: DATE_MONTH,
    },
  ]
};

export interface ListMeterReadingsPerDayResponse {
  readings?: Array<MeterReadingPerDay>,
}

export let LIST_METER_READINGS_PER_DAY_RESPONSE: MessageDescriptor<ListMeterReadingsPerDayResponse> = {
  name: 'ListMeterReadingsPerDayResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_DAY,
      isArray: true,
    },
  ]
};

export let LIST_METER_READINGS_PER_DAY: ServiceDescriptor = {
  name: "ListMeterReadingsPerDay",
  path: "/ListMeterReadingsPerDay",
  body: {
    messageType: LIST_METER_READINGS_PER_DAY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_PER_DAY_RESPONSE,
  },
}

export interface ListMeterReadingsPerMonthRequestBody {
  startMonth?: DateMonth,
  endMonth?: DateMonth,
}

export let LIST_METER_READINGS_PER_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerMonthRequestBody> = {
  name: 'ListMeterReadingsPerMonthRequestBody',
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

export interface ListMeterReadingsPerMonthResponse {
  readings?: Array<MeterReadingPerMonth>,
}

export let LIST_METER_READINGS_PER_MONTH_RESPONSE: MessageDescriptor<ListMeterReadingsPerMonthResponse> = {
  name: 'ListMeterReadingsPerMonthResponse',
  fields: [
    {
      name: 'readings',
      messageType: METER_READING_PER_MONTH,
      isArray: true,
    },
  ]
};

export let LIST_METER_READINGS_PER_MONTH: ServiceDescriptor = {
  name: "ListMeterReadingsPerMonth",
  path: "/ListMeterReadingsPerMonth",
  body: {
    messageType: LIST_METER_READINGS_PER_MONTH_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: LIST_METER_READINGS_PER_MONTH_RESPONSE,
  },
}
