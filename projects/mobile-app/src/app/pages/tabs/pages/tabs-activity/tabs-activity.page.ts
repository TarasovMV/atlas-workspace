import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {FormControl} from "@angular/forms";
import {TabsBase} from '../../classes/tabs.base';
import {ActivatedRoute} from '@angular/router';
import {filter, map, startWith} from 'rxjs/operators';
import {eventsLoad} from '../../../../core/store/store.actions';
import {selectEvents} from '../../../../core/store/store.selectors';
import {Store} from '@ngrx/store';
import {IState} from '../../../../core/store/store.model';
import {combineLatest, Observable} from 'rxjs';
import {ITextBlock} from '../../../../shared/models/text-block.model';
import {IIndicatorEvent} from '../../../../core/store/models/event.model';
import {IIndicatorDto} from '../../../../shared/models/indicator-dto.model';
import INDICATORS from '../../../../shared/constants/indicator.const';

const EMPTY_TEXT: string = 'Мероприятий по данному индикатору не найдено...';

@Component({
    selector: 'app-tabs-activity',
    templateUrl: './tabs-activity.page.html',
    styleUrls: ['./tabs-activity.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsActivityPage extends TabsBase implements OnInit, IPageTabDto {
    public readonly indicators: IIndicatorDto[] = INDICATORS;
    public readonly emptyText: string = EMPTY_TEXT;
    public readonly route: PageTabType = 'activity';
    public readonly control: FormControl = new FormControl(1);
    public readonly cards$: Observable<ITextBlock[]>;
    public readonly isEmpty$: Observable<boolean>;
    public readonly isLoad$: Observable<boolean>;

    constructor(
        private store: Store<IState>,
        route: ActivatedRoute
    ) {
        super(route);
        this.cards$ = combineLatest([
            this.control.valueChanges.pipe(startWith(this.control.value)),
            this.store.select(selectEvents),
        ]).pipe(
            filter(([_, events]) => !!events?.length),
            map(([form, events]) => this.eventMapper(events, form))
        );
        this.isEmpty$ = this.cards$.pipe(map(x => !!x && x.length === 0));
        this.isLoad$ = this.store.select(selectEvents).pipe(map(x => !!x));
    }

    ngOnInit(): void {
        this.store.dispatch(eventsLoad({unitId: this.unitId}));
    }

    private eventMapper(events: IIndicatorEvent[], indicatorId: number): ITextBlock[] {
        return events.find(r => r.unitIndicatorId === indicatorId)?.events.map<ITextBlock>(x => ({
            info: [{
                text: x?.eventDescription,
                type: 'default',
            }],
            count: x.potential,
            date: x.year,
        })) ?? [];
    }
}
