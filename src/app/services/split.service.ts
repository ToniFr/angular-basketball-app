import { Injectable } from '@angular/core';
import { SplitFactory } from '@splitsoftware/splitio-browserjs';
import * as SplitIO from '@splitsoftware/splitio-browserjs/types/splitio';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplitService {
  private splitClient: SplitIO.IClient;
  public sdkReady$: Subject<void> = new Subject<void>();

  public initSdk(userId: string): void {
    const splitSDK: SplitIO.ISDK = SplitFactory({
      core: {
        authorizationKey: 'jbkisbi2ts750dt9ejrgjh9ub4u7r83ko7uc',
        key: userId
      }
    });

    this.splitClient = splitSDK.client();

    this.splitClient.on(this.splitClient.Event.SDK_READY, () => {
      this.sdkReady$.next();
    });
  }

  public getTreatment(): string {
    return this.splitClient.getTreatment('player_split');
  }
}