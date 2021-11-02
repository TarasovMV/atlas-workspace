import {Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";

@Component({
    selector: 'app-tabs-ideas',
    templateUrl: './tabs-ideas.page.html',
    styleUrls: ['./tabs-ideas.page.scss'],
})
export class TabsIdeasPage implements OnInit, IPageTabDto {
    public route: PageTabType = 'ideas';

    constructor() {}

    ngOnInit(): void {}
}
