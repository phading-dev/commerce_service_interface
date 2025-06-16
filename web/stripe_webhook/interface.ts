import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { PrimitveTypeForBody, RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export let MARK_PAYMENT_DONE: RemoteCallDescriptor = {
  name: "MarkPaymentDone",
  service: COMMERCE_WEB_SERVICE,
  path: "/sp/MarkPaymentDone",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  authKey: "stripe-signature",
  response: {
    messageType: EVENT_RECEIVED_RESPONSE,
  },
}

export let MARK_PAYMENT_FAILED: RemoteCallDescriptor = {
  name: "MarkPaymentFailed",
  service: COMMERCE_WEB_SERVICE,
  path: "/sp/MarkPaymentFailed",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  authKey: "stripe-signature",
  response: {
    messageType: EVENT_RECEIVED_RESPONSE,
  },
}
