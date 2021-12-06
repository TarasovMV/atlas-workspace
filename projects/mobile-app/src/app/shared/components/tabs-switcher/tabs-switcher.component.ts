import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef, Input,
    QueryList
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TabsSwitcherOptionComponent} from "./tabs-switcher-option/tabs-switcher-option.component";

@Component({
    selector: 'app-tabs-switcher',
    templateUrl: './tabs-switcher.component.html',
    styleUrls: ['./tabs-switcher.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TabsSwitcherComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TabsSwitcherComponent<T = any> implements ControlValueAccessor, AfterContentInit {
    @Input()
    public multi: boolean = false;

    @ContentChildren(TabsSwitcherOptionComponent)
    private options!: QueryList<TabsSwitcherOptionComponent<T>>;

    private value!: T | T[];
    private onChange!: (value: T | T[]) => void;
    private onTouched!: () => void;

    constructor() {}

    ngAfterContentInit(): void {
        this.writeValue(this.value);
    }

    public writeValue(value: T | T[]): void {
        this.value = value;
        this.selectedHandler();
    }

    public registerOnChange(onChange: (value: T | T[]) => void) {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    public onOptionSelect(option: TabsSwitcherOptionComponent<T>, event: Event) {
        if (this.multi) {
            let result;
            if ((this.value as T[]).indexOf(option.value) === -1) {
                result = [...this.value as T[], option.value];
            } else {
                result = (this.value as T[]).filter(x => x !== option.value);
            }
            this.emitSelection(result);
            return;
        }
        this.emitSelection(option.value);
    }

    private emitSelection(value: T | T[]) {
        if (!this.onChange) {
            return;
        }
        this.writeValue(value);
        this.onChange(value);
    }

    private selectedHandler(): void {
        if (!this.options?.length) {
            return;
        }
        if (this.multi) {
            this.options.forEach(o => o.selected = !!(this.value as T[]).find(x => x === o.value));
            return;
        }
        const option = this.options.find(o => o.value === this.value);
        this.options.forEach(o => o.selected = false);
        if (!option) {
            return;
        }
        option.selected = true;
    }
}
