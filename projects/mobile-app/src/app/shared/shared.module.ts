import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TabsTextBlockComponent} from "./components/tabs-text-block/tabs-text-block.component";
import {TabsSwitcherComponent} from "./components/tabs-switcher/tabs-switcher.component";
import {TabsSwitcherOptionComponent} from "./components/tabs-switcher/tabs-switcher-option/tabs-switcher-option.component";
import { MainDiagramComponent } from './components/main-diagram/main-diagram.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [TabsTextBlockComponent, TabsSwitcherComponent, TabsSwitcherOptionComponent, MainDiagramComponent],
    exports: [
        TabsTextBlockComponent,
        TabsSwitcherComponent,
        TabsSwitcherOptionComponent,
        MainDiagramComponent
    ]
})
export class SharedModule {
}
