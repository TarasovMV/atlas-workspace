import {Component, forwardRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {TabsSwitcherComponent} from "../tabs-switcher.component";

@Component({
    selector: 'app-tabs-switcher-option',
    templateUrl: './tabs-switcher-option.component.html',
    styleUrls: ['./tabs-switcher-option.component.scss']
})
export class TabsSwitcherOptionComponent<T = any> implements OnInit {
    @Input() value!: T;
    selected: boolean = false;

    constructor(
        @Inject(forwardRef(() => TabsSwitcherComponent))
        private switcher: TabsSwitcherComponent
    ) {}

    @HostListener('click', ['$event'])
    onClick($event: MouseEvent) {
        this.switcher.onOptionSelect(this, $event);
    }

    ngOnInit(): void {}
}
