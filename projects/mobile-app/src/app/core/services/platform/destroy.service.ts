import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * Observable abstraction over ngOnDestroy to use with takeUntil
 */
@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
}
