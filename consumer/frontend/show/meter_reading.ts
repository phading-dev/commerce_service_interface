import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface MeterReadingPerSeason {
  season?: SeasonSummary,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_SEASON: MessageDescriptor<MeterReadingPerSeason> = {
  name: 'MeterReadingPerSeason',
  fields: [
    {
      name: 'season',
      messageType: SEASON_SUMMARY,
    },
    {
      name: 'watchTimeMs',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'charges',
      messageType: MONEY,
    },
  ]
};

export interface Date {
  day?: number,
  month?: number,
  year?: number,
}

export let DATE: MessageDescriptor<Date> = {
  name: 'Date',
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

export interface MeterReadingPerDay {
  date?: Date,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [
    {
      name: 'date',
      messageType: DATE,
    },
    {
      name: 'watchTimeMs',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'charges',
      messageType: MONEY,
    },
  ]
};

export interface DateMonth {
  month?: number,
  year?: number,
}

export let DATE_MONTH: MessageDescriptor<DateMonth> = {
  name: 'DateMonth',
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

export interface MeterReadingPerMonth {
  month?: DateMonth,
  watchTimeMs?: number,
  charges?: Money,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [
    {
      name: 'month',
      messageType: DATE_MONTH,
    },
    {
      name: 'watchTimeMs',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'charges',
      messageType: MONEY,
    },
  ]
};
