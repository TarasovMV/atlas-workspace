import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export abstract class TabsBase {
    protected unitId: number;

    protected constructor(protected router: ActivatedRoute) {
        this.unitId = +this.router.snapshot.queryParamMap.get('unitId');
    }
}
