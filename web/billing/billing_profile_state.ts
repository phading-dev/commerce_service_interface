import { EnumDescriptor } from '@selfage/message/descriptor';

export enum BillingProfileState {
  HEALTHY = 1,
  WITH_FAILED_PAYMENTS = 2,
  SUSPENDED = 3,
}

export let BILLING_PROFILE_STATE: EnumDescriptor<BillingProfileState> = {
  name: 'BillingProfileState',
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
