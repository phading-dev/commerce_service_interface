import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export enum MeterType {
  SHOW_WATCH_TIME_SEC = 1,
  NETWORK_TRANSMITTED_MB = 2,
  STORAGE_MB_HOUR = 3,
  UPLOAD_MB = 4,
}

export let METER_TYPE: EnumDescriptor<MeterType> = {
  name: 'MeterType',
  values: [{
    name: 'SHOW_WATCH_TIME_SEC',
    value: 1,
  }, {
    name: 'NETWORK_TRANSMITTED_MB',
    value: 2,
  }, {
    name: 'STORAGE_MB_HOUR',
    value: 3,
  }, {
    name: 'UPLOAD_MB',
    value: 4,
  }]
}

export interface MeterReading {
  meterType?: MeterType,
  reading?: number,
}

export let METER_READING: MessageDescriptor<MeterReading> = {
  name: 'MeterReading',
  fields: [{
    name: 'meterType',
    index: 1,
    enumType: METER_TYPE,
  }, {
    name: 'reading',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GenerateEarningsStatementRequestBody {
  accountId?: string,
  month?: string,
  readings?: Array<MeterReading>,
}

export let GENERATE_EARNINGS_STATEMENT_REQUEST_BODY: MessageDescriptor<GenerateEarningsStatementRequestBody> = {
  name: 'GenerateEarningsStatementRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'readings',
    index: 3,
    messageType: METER_READING,
    isArray: true,
  }],
};

export interface GenerateEarningsStatementResponse {
}

export let GENERATE_EARNINGS_STATEMENT_RESPONSE: MessageDescriptor<GenerateEarningsStatementResponse> = {
  name: 'GenerateEarningsStatementResponse',
  fields: [],
};

export let GENERATE_EARNINGS_STATEMENT: NodeRemoteCallDescriptor = {
  name: "GenerateEarningsStatement",
  path: "/GenerateEarningsStatement",
  body: {
    messageType: GENERATE_EARNINGS_STATEMENT_REQUEST_BODY,
  },
  response: {
    messageType: GENERATE_EARNINGS_STATEMENT_RESPONSE,
  },
}
