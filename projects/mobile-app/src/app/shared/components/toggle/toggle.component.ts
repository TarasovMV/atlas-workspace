import {Component, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ToggleComponent),
        multi: true,
    }],
})
export class ToggleComponent implements OnInit, ControlValueAccessor {
    @Input() public isIcon: boolean = false;

    constructor() {}

    private _value: boolean = false;

    @Input() public set value(val: boolean) {
        this._value = val;
        this.onChange(val);
    }
    public get value(): boolean {
        return this._value;
    }

    public ngOnInit(): void {
    }

    public onChange(_: boolean): void {
    }

    public toggle(): void {
        this.value = !this._value;
    }

    public writeValue(obj: boolean) {
        this.value = obj
    }

    public registerOnChange(fn: () => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
    }
}
