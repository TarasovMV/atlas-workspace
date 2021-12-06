import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Inject,
    Input,
    OnInit
} from '@angular/core';
import {TabsSwitcherComponent} from "../tabs-switcher.component";

@Component({
    selector: 'app-tabs-switcher-option',
    templateUrl: './tabs-switcher-option.component.html',
    styleUrls: ['./tabs-switcher-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsSwitcherOptionComponent<T = any> implements OnInit {
    @Input() mini: boolean = false;
    @Input() value!: T;

    public get selected(): boolean {
        return this._selected;
    };
    public set selected(value: boolean) {
        this._selected = value;
        this.cdRef.detectChanges();
    }
    private _selected: boolean = false;

    constructor(
        @Inject(forwardRef(() => TabsSwitcherComponent))
        private switcher: TabsSwitcherComponent,
        private cdRef: ChangeDetectorRef,
    ) {}

    @HostListener('click', ['$event'])
    onClick($event: MouseEvent) {
        this.switcher.onOptionSelect(this, $event);
    }

    ngOnInit(): void {}
}
