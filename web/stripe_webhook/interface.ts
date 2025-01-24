import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PrimitveTypeForBody, WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface EventReceivedResponse {
  received?: boolean,
}

export let EVENT_RECEIVED_RESPONSE: MessageDescriptor<EventReceivedResponse> = {
  name: 'EventReceivedResponse',
  fields: [{
    name: 'received',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export let MARK_PAYMENT_DONE: WebRemoteCallDescriptor = {
  name: "MarkPaymentDone",
  path: "/MarkPaymentDone",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  sessionKey: "stripe-signature",
  response: {
    messageType: EVENT_RECEIVED_RESPONSE,
  },
}

export let MARK_PAYMENT_FAILED: WebRemoteCallDescriptor = {
  name: "MarkPaymentFailed",
  path: "/MarkPaymentFailed",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  sessionKey: "stripe-signature",
  response: {
    messageType: EVENT_RECEIVED_RESPONSE,
  },
}
