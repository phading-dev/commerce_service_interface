import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';

export enum PaymentProfileState {
  HEALTHY = 1,
  WITH_FAILED_PAYMENTS = 2,
  WITH_PROCESSING_PAYMENTS = 3,
  SUSPENDED = 4,
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
    name: 'WITH_PROCESSING_PAYMENTS',
    value: 3,
  }, {
    name: 'SUSPENDED',
    value: 4,
  }]
}

export interface PaymentProfile {
  primaryPaymentMethod?: PaymentMethodMasked,
  state?: PaymentProfileState,
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
    name: 'state',
    index: 2,
    enumType: PAYMENT_PROFILE_STATE,
  }, {
    name: 'balanceAmount',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'balanceCurrency',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'canClaimInitCredit',
    index: 5,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};
