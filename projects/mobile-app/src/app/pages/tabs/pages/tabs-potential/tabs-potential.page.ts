import {Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";

@Component({
    selector: 'app-tabs-potential',
    templateUrl: './tabs-potential.page.html',
    styleUrls: ['./tabs-potential.page.scss'],
})
export class TabsPotentialPage implements OnInit, IPageTabDto {
    public route: PageTabType = 'potential';

    constructor() {}

    ngOnInit(): void {}
}
