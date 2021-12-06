import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITextBlock} from '../../models/text-block.model';

@Component({
    selector: 'app-tabs-text-block',
    templateUrl: './tabs-text-block.component.html',
    styleUrls: ['./tabs-text-block.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsTextBlockComponent {

    @Input() data: ITextBlock;
    constructor() {}
}
