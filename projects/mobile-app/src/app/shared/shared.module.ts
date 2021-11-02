import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TabsTextBlockComponent} from "./components/tabs-text-block/tabs-text-block.component";
import {TabsSwitcherComponent} from "./components/tabs-switcher/tabs-switcher.component";
import {TabsSwitcherOptionComponent} from "./components/tabs-switcher/tabs-switcher-option/tabs-switcher-option.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [TabsTextBlockComponent, TabsSwitcherComponent, TabsSwitcherOptionComponent],
    exports: [
        TabsTextBlockComponent,
        TabsSwitcherComponent,
        TabsSwitcherOptionComponent,
    ]
})
export class SharedModule {
}
