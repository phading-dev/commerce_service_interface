import { Readable } from 'stream';
import { GRANT_INIT_PAYMENT_CREDIT, Empty, MARK_PAYMENT_DONE, MARK_PAYMENT_FAILED, MARK_PAYOUT_ENABLED } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GrantInitPaymentCreditHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GRANT_INIT_PAYMENT_CREDIT;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<Empty>;
}

export abstract class MarkPaymentDoneHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = MARK_PAYMENT_DONE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<Empty>;
}

export abstract class MarkPaymentFailedHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = MARK_PAYMENT_FAILED;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<Empty>;
}

export abstract class MarkPayoutEnabledHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = MARK_PAYOUT_ENABLED;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<Empty>;
}
