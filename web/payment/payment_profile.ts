import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';

export enum PaymentProfileState {
  HEALTHY = 1,
  SUSPENDED = 2,
}

export let PAYMENT_PROFILE_STATE: EnumDescriptor<PaymentProfileState> = {
  name: 'PaymentProfileState',
  values: [{
    name: 'HEALTHY',
    value: 1,
  }, {
    name: 'SUSPENDED',
    value: 2,
  }]
}

export enum PaymentsOverallState {
  ALL_PAID = 1,
  WITH_FAILED_PAYMENTS = 2,
  WITH_PROCESSING_PAYMENTS = 3,
}

export let PAYMENTS_OVERALL_STATE: EnumDescriptor<PaymentsOverallState> = {
  name: 'PaymentsOverallState',
  values: [{
    name: 'ALL_PAID',
    value: 1,
  }, {
    name: 'WITH_FAILED_PAYMENTS',
    value: 2,
  }, {
    name: 'WITH_PROCESSING_PAYMENTS',
    value: 3,
  }]
}

export interface PaymentProfile {
  primaryPaymentMethod?: PaymentMethodMasked,
  profileState?: PaymentProfileState,
  paymentsOverallState?: PaymentsOverallState,
  balanceAmount?: number,
  balanceCurrency?: string,
  canClaimInitCredit?: boolean,
}

export let PAYMENT_PROFILE: MessageDescriptor<PaymentProfile> = {
  name: 'PaymentProfile',
  fields: [{
    name: 'primaryPaymentMethod',
    index: 1,
    messageType: PAYMENT_METHOD_MASKED,
  }, {
    name: 'profileState',
    index: 2,
    enumType: PAYMENT_PROFILE_STATE,
  }, {
    name: 'paymentsOverallState',
    index: 3,
    enumType: PAYMENTS_OVERALL_STATE,
  }, {
    name: 'balanceAmount',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'balanceCurrency',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'canClaimInitCredit',
    index: 6,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};
