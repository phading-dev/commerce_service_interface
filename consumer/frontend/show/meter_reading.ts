import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MeterReadingPerSeason {
  season?: SeasonSummary,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_SEASON: MessageDescriptor<MeterReadingPerSeason> = {
  name: 'MeterReadingPerSeason',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'watchTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'charges',
    index: 3,
    messageType: MONEY,
  }],
};

export interface Date {
  day?: number,
  month?: number,
  year?: number,
}

export let DATE: MessageDescriptor<Date> = {
  name: 'Date',
  fields: [{
    name: 'day',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'year',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerDay {
  date?: Date,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [{
    name: 'date',
    index: 1,
    messageType: DATE,
  }, {
    name: 'watchTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'charges',
    index: 3,
    messageType: MONEY,
  }],
};

export interface DateMonth {
  month?: number,
  year?: number,
}

export let DATE_MONTH: MessageDescriptor<DateMonth> = {
  name: 'DateMonth',
  fields: [{
    name: 'month',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'year',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerMonth {
  month?: DateMonth,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [{
    name: 'month',
    index: 1,
    messageType: DATE_MONTH,
  }, {
    name: 'watchTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'charges',
    index: 3,
    messageType: MONEY,
  }],
};
