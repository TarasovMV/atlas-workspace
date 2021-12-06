import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {FormControl} from "@angular/forms";
import {TabsBase} from '../../classes/tabs.base';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IState} from '../../../../core/store/store.model';
import {filter, map, startWith} from 'rxjs/operators';
import {restrictionsLoad} from '../../../../core/store/store.actions';
import {selectRestrictions} from '../../../../core/store/store.selectors';
import {combineLatest, Observable} from 'rxjs';
import {ITextBlock} from '../../../../shared/models/text-block.model';
import {IIndicatorRestriction} from '../../../../core/store/models/restriction.model';
import INDICATORS from '../../../../shared/constants/indicator.const';
import {IIndicatorDto} from '../../../../shared/models/indicator-dto.model';

const EMPTY_TEXT: string = 'Ограничений по данному индикатору не найдено...';

@Component({
    selector: 'app-tabs-restrictions',
    templateUrl: './tabs-restrictions.page.html',
    styleUrls: ['./tabs-restrictions.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsRestrictionsPage extends TabsBase implements OnInit, IPageTabDto {
    public readonly indicators: IIndicatorDto[] = INDICATORS;
    public readonly emptyText: string = EMPTY_TEXT;
    public readonly route: PageTabType = 'restrictions';
    public readonly control: FormControl = new FormControl(1);
    public readonly cards$: Observable<ITextBlock[]>;
    public readonly isEmpty$: Observable<boolean>;
    public readonly isLoad$: Observable<boolean>;

    constructor(
        private store: Store<IState>,
        route: ActivatedRoute,
    ) {
        super(route);
        this.cards$ = combineLatest([
            this.control.valueChanges.pipe(startWith(this.control.value)),
            this.store.select(selectRestrictions),
        ]).pipe(
            filter(([_, restrictions]) => !!restrictions?.length),
            map(([form, restrictions]) => this.restrictionMapper(restrictions, form))
        );
        this.isEmpty$ = this.cards$.pipe(map(x => !!x && x.length === 0));
        this.isLoad$ = this.store.select(selectRestrictions).pipe(map(x => !!x));
    }

    ngOnInit(): void {
        this.store.dispatch(restrictionsLoad({unitId: this.unitId}));
    }

    private restrictionMapper(restrictions: IIndicatorRestriction[], indicatorId: number): ITextBlock[] {
        return restrictions.find(r => r.unitIndicatorId === indicatorId)?.restrictions.map<ITextBlock>(x => ({
            info: [
                {
                    text: x?.restrictionDescription,
                    type: 'restriction',
                },
                {
                    text: x?.potentialDescription,
                    type: 'potential',
                },
            ],
            count: x.potential,
        })) ?? [];
    }
}
