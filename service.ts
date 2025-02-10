import { ClientType } from '@selfage/service_descriptor/client_type';
import { HttpsServiceDescriptor, HttpServiceDescriptor } from '@selfage/service_descriptor';

export let COMMERCE_WEB_SERVICE: HttpsServiceDescriptor = {
  name: "CommerceWebService",
  clientType: ClientType.WEB,
  protocol: "https",
  port: 443,
}

export let COMMERCE_NODE_SERVICE: HttpServiceDescriptor = {
  name: "CommerceNodeService",
  clientType: ClientType.NODE,
  protocol: "http",
  port: 80,
}
