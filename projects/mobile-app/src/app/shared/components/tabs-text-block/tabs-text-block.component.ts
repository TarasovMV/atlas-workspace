import {Attribute, Component, OnInit} from '@angular/core';

export type BlockType = 'default' | 'restrictions' | 'potential' | 'activity';

@Component({
    selector: 'app-tabs-text-block',
    templateUrl: './tabs-text-block.component.html',
    styleUrls: ['./tabs-text-block.component.scss']
})
export class TabsTextBlockComponent implements OnInit {

    constructor(@Attribute('type') public type: BlockType) {}

    ngOnInit(): void {
    }
}
