import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {TabsBase} from '../../classes/tabs.base';
import {ActivatedRoute} from '@angular/router';
import {filter, map, startWith} from 'rxjs/operators';
import {IState} from '../../../../core/store/store.model';
import {Store} from '@ngrx/store';
import {ideasLoad} from '../../../../core/store/store.actions';
import {selectIdeas} from '../../../../core/store/store.selectors';
import {combineLatest, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {ITextBlock} from '../../../../shared/models/text-block.model';
import {IIndicatorIdea} from '../../../../core/store/models/idea.model';
import {IIndicatorDto} from '../../../../shared/models/indicator-dto.model';
import INDICATORS from '../../../../shared/constants/indicator.const';

const EMPTY_TEXT: string = 'Идей по данному индикатору не найдено...';

@Component({
    selector: 'app-tabs-ideas',
    templateUrl: './tabs-ideas.page.html',
    styleUrls: ['./tabs-ideas.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsIdeasPage extends TabsBase implements OnInit, IPageTabDto {
    public readonly indicators: IIndicatorDto[] = INDICATORS;
    public readonly emptyText: string = EMPTY_TEXT;
    public readonly route: PageTabType = 'ideas';
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
            this.store.select(selectIdeas),
        ]).pipe(
            filter(([_, ideas]) => !!ideas?.length),
            map(([form, ideas]) => this.ideaMapper(ideas, form))
        );
        this.isEmpty$ = this.cards$.pipe(map(x => !!x && x.length === 0));
        this.isLoad$ = this.store.select(selectIdeas).pipe(map(x => !!x));
    }

    ngOnInit(): void {
        this.store.dispatch(ideasLoad({unitId: this.unitId}));
        this.store.select(selectIdeas).subscribe(x => console.log(x));
    }

    private ideaMapper(ideas: IIndicatorIdea[], indicatorId: number): ITextBlock[] {
        return ideas.find(r => r.unitIndicatorId === indicatorId)?.ideas.map<ITextBlock>(x => ({
            info: [{
                text: x?.ideaDescription,
                type: 'default',
            }],
            count: x.potential,
            date: x.year,
        })) ?? [];
    }
}
