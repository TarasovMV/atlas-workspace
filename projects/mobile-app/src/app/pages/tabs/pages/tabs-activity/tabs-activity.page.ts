import {Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-tabs-activity',
    templateUrl: './tabs-activity.page.html',
    styleUrls: ['./tabs-activity.page.scss'],
})
export class TabsActivityPage implements OnInit, IPageTabDto {
    public route: PageTabType = 'activity';
    public control: FormControl = new FormControl(1);

    constructor() {}

    ngOnInit(): void {}
}
