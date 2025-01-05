import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export enum MeterType {
  SHOW_WATCH_TIME_MIN = 1,
}

export let METER_TYPE: EnumDescriptor<MeterType> = {
  name: 'MeterType',
  values: [{
    name: 'SHOW_WATCH_TIME_MIN',
    value: 1,
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

export interface GenerateBillingStatementRequestBody {
  accountId?: string,
  month?: string,
  readings?: Array<MeterReading>,
}

export let GENERATE_BILLING_STATEMENT_REQUEST_BODY: MessageDescriptor<GenerateBillingStatementRequestBody> = {
  name: 'GenerateBillingStatementRequestBody',
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

export interface GenerateBillingStatementResponse {
}

export let GENERATE_BILLING_STATEMENT_RESPONSE: MessageDescriptor<GenerateBillingStatementResponse> = {
  name: 'GenerateBillingStatementResponse',
  fields: [],
};

export let GENERATE_BILLING_STATEMENT: NodeRemoteCallDescriptor = {
  name: "GenerateBillingStatement",
  path: "/GenerateBillingStatement",
  body: {
    messageType: GENERATE_BILLING_STATEMENT_REQUEST_BODY,
  },
  response: {
    messageType: GENERATE_BILLING_STATEMENT_RESPONSE,
  },
}
