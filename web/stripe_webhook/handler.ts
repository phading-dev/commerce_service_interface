import { Readable } from 'stream';
import { MARK_PAYMENT_DONE, EventReceivedResponse, MARK_PAYMENT_FAILED } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class MarkPaymentDoneHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = MARK_PAYMENT_DONE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<EventReceivedResponse>;
}

export abstract class MarkPaymentFailedHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = MARK_PAYMENT_FAILED;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<EventReceivedResponse>;
}
