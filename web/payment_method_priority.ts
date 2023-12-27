import { EnumDescriptor } from '@selfage/message/descriptor';

export enum PaymentMethodPriority {
  UNKNOWN = 0,
  NORMAL = 1,
  PRIMARY = 2,
  BACKUP = 3,
}

export let PAYMENT_METHOD_PRIORITY: EnumDescriptor<PaymentMethodPriority> = {
  name: 'PaymentMethodPriority',
  values: [
    {
      name: 'UNKNOWN',
      value: 0,
    },
    {
      name: 'NORMAL',
      value: 1,
    },
    {
      name: 'PRIMARY',
      value: 2,
    },
    {
      name: 'BACKUP',
      value: 3,
    },
  ]
}
