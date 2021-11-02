import {AfterContentInit, Component, ContentChildren, forwardRef, OnInit, QueryList} from '@angular/core';
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

})
export class TabsSwitcherComponent<T = any> implements ControlValueAccessor, AfterContentInit {
    @ContentChildren(TabsSwitcherOptionComponent)
    private options!: QueryList<TabsSwitcherOptionComponent>;

    private value!: T;
    private onChange!: (value: T | T[]) => void;
    private onTouched!: () => void;

    constructor() {}

    ngAfterContentInit(): void {
        this.writeValue(this.value);
    }

    public writeValue(value: T): void {
        this.value = value;
        this.selectedHandler();
    }

    public registerOnChange(onChange: (value: T | T[]) => void) {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    public onOptionSelect(option: TabsSwitcherOptionComponent, event: Event) {
        this.emitSelection(option.value);
    }

    private emitSelection(value: T) {
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
        this.options.forEach(o => o.selected = false);
        const option = this.options.find(o => o.value === this.value);
        if (!option) {
            return;
        }
        option.selected = true;
    }
}
