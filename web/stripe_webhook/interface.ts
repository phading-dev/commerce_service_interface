import { MessageDescriptor } from '@selfage/message/descriptor';
import { COMMERCE_WEB_SERVICE } from '../../service';
import { PrimitveTypeForBody, RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface Empty {
}

export let EMPTY: MessageDescriptor<Empty> = {
  name: 'Empty',
  fields: [],
};

export let GRANT_INIT_PAYMENT_CREDIT: RemoteCallDescriptor = {
  name: "GrantInitPaymentCredit",
  service: COMMERCE_WEB_SERVICE,
  path: "/sp/GrantInitPaymentCredit",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  authKey: "stripe-signature",
  response: {
    messageType: EMPTY,
  },
}

export let MARK_PAYMENT_DONE: RemoteCallDescriptor = {
  name: "MarkPaymentDone",
  service: COMMERCE_WEB_SERVICE,
  path: "/sp/MarkPaymentDone",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  authKey: "stripe-signature",
  response: {
    messageType: EMPTY,
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
    messageType: EMPTY,
  },
}
