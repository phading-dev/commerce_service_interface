import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
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
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface MeterReadingPerSeason {
  season?: SeasonSummary,
  watchTimeMs?: number,
/* Money in milli. */
  charges?: number,
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
      primitiveType: PrimitiveType.NUMBER,
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
/* Money in milli. */
  charges?: number,
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
      primitiveType: PrimitiveType.NUMBER,
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
/* Money in milli. */
  charges?: number,
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
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
