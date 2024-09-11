import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';
import { Date, DATE, MeterReadingPerSeason, METER_READING_PER_SEASON, MeterReadingPerDay, METER_READING_PER_DAY, DateMonth, DATE_MONTH, MeterReadingPerMonth, METER_READING_PER_MONTH } from './meter_reading';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface GetPricingRequestBody {
  grade?: number,
}

export let GET_PRICING_REQUEST_BODY: MessageDescriptor<GetPricingRequestBody> = {
  name: 'GetPricingRequestBody',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetPricingResponse {
  /* USD. Per hour rate. */
  money?: Money,
}

export let GET_PRICING_RESPONSE: MessageDescriptor<GetPricingResponse> = {
  name: 'GetPricingResponse',
  fields: [{
    name: 'money',
    index: 1,
    messageType: MONEY,
  }],
};

export interface ListMeterReadingsPerSeasonRequestBody {
  date?: Date,
}

export let LIST_METER_READINGS_PER_SEASON_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerSeasonRequestBody> = {
  name: 'ListMeterReadingsPerSeasonRequestBody',
  fields: [{
    name: 'date',
    index: 1,
    messageType: DATE,
  }],
};

export interface ListMeterReadingsPerSeasonResponse {
  readings?: Array<MeterReadingPerSeason>,
}

export let LIST_METER_READINGS_PER_SEASON_RESPONSE: MessageDescriptor<ListMeterReadingsPerSeasonResponse> = {
  name: 'ListMeterReadingsPerSeasonResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_SEASON,
    isArray: true,
  }],
};

export interface ListMeterReadingsPerDayRequestBody {
  startDate?: Date,
  /* Inclusive. */
  endDate?: Date,
}

export let LIST_METER_READINGS_PER_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerDayRequestBody> = {
  name: 'ListMeterReadingsPerDayRequestBody',
  fields: [{
    name: 'startDate',
    index: 1,
    messageType: DATE,
  }, {
    name: 'endDate',
    index: 2,
    messageType: DATE,
  }],
};

export interface ListMeterReadingsPerDayResponse {
  readings?: Array<MeterReadingPerDay>,
}

export let LIST_METER_READINGS_PER_DAY_RESPONSE: MessageDescriptor<ListMeterReadingsPerDayResponse> = {
  name: 'ListMeterReadingsPerDayResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_DAY,
    isArray: true,
  }],
};

export interface ListMeterReadingsPerMonthRequestBody {
  startMonth?: DateMonth,
  /* Inclusive. */
  endMonth?: DateMonth,
}

export let LIST_METER_READINGS_PER_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerMonthRequestBody> = {
  name: 'ListMeterReadingsPerMonthRequestBody',
  fields: [{
    name: 'startMonth',
    index: 1,
    messageType: DATE_MONTH,
  }, {
    name: 'endMonth',
    index: 2,
    messageType: DATE_MONTH,
  }],
};

export interface ListMeterReadingsPerMonthResponse {
  readings?: Array<MeterReadingPerMonth>,
}

export let LIST_METER_READINGS_PER_MONTH_RESPONSE: MessageDescriptor<ListMeterReadingsPerMonthResponse> = {
  name: 'ListMeterReadingsPerMonthResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_MONTH,
    isArray: true,
  }],
};

export let GET_PRICING: WebRemoteCallDescriptor = {
  name: "GetPricing",
  path: "/GetPricing",
  body: {
    messageType: GET_PRICING_REQUEST_BODY,
  },
  response: {
    messageType: GET_PRICING_RESPONSE,
  },
}

export let LIST_METER_READINGS_PER_SEASON: WebRemoteCallDescriptor = {
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

export let LIST_METER_READINGS_PER_DAY: WebRemoteCallDescriptor = {
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

export let LIST_METER_READINGS_PER_MONTH: WebRemoteCallDescriptor = {
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
