import { Readable } from 'stream';
import { MARK_PAYMENT_DONE, EventReceivedResponse, MARK_PAYMENT_FAILED } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class MarkPaymentDoneHandlerInterface implements WebHandlerInterface {
  public descriptor = MARK_PAYMENT_DONE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    sessionStr: string,
  ): Promise<EventReceivedResponse>;
}

export abstract class MarkPaymentFailedHandlerInterface implements WebHandlerInterface {
  public descriptor = MARK_PAYMENT_FAILED;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    sessionStr: string,
  ): Promise<EventReceivedResponse>;
}
