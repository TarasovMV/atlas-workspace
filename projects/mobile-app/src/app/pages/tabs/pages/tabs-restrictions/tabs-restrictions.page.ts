import {Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-tabs-restrictions',
    templateUrl: './tabs-restrictions.page.html',
    styleUrls: ['./tabs-restrictions.page.scss'],
})
export class TabsRestrictionsPage implements OnInit, IPageTabDto {
    public route: PageTabType = 'restrictions';
    public control: FormControl = new FormControl(1);

    constructor() {}

    ngOnInit(): void {}
}
