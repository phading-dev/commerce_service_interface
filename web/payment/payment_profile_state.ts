import { EnumDescriptor } from '@selfage/message/descriptor';

export enum PaymentProfileState {
  HEALTHY = 1,
  WITH_FAILED_PAYMENTS = 2,
  SUSPENDED = 3,
}

export let PAYMENT_PROFILE_STATE: EnumDescriptor<PaymentProfileState> = {
  name: 'PaymentProfileState',
  values: [{
    name: 'HEALTHY',
    value: 1,
  }, {
    name: 'WITH_FAILED_PAYMENTS',
    value: 2,
  }, {
    name: 'SUSPENDED',
    value: 3,
  }]
}
