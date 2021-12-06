import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TabsTextBlockComponent} from "./components/tabs-text-block/tabs-text-block.component";
import {TabsSwitcherComponent} from "./components/tabs-switcher/tabs-switcher.component";
import {TabsSwitcherOptionComponent} from "./components/tabs-switcher/tabs-switcher-option/tabs-switcher-option.component";
import { MainDiagramComponent } from './components/main-diagram/main-diagram.component';
import {ToggleComponent} from './components/toggle/toggle.component';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        AngularSvgIconModule,
    ],
    declarations: [
        TabsTextBlockComponent,
        TabsSwitcherComponent,
        TabsSwitcherOptionComponent,
        MainDiagramComponent,
        ToggleComponent,
    ],
    exports: [
        TabsTextBlockComponent,
        TabsSwitcherComponent,
        TabsSwitcherOptionComponent,
        MainDiagramComponent,
        ToggleComponent
    ]
})
export class SharedModule {
}
