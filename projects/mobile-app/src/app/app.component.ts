import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Platform} from "@ionic/angular";
import {KeyboardService} from "./core/services/platform/keyboard.service";
import {StatusBarService} from "./core/services/platform/status-bar.service";
import {BackButtonService} from "./core/services/platform/back-button.service";
import {SplashScreen} from "@capacitor/splash-screen";
import {ThemeService} from './core/services/platform/theme-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('appWindow', {static: true}) private appWindow: ElementRef | undefined = undefined;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private platform: Platform,
        private keyboardService: KeyboardService,
        private statusBarService: StatusBarService,
        private backButtonService: BackButtonService,
        private themeService: ThemeService,
    ) {}

    public ngOnInit(): void {
        this.platform.ready().then(async () => {
            this.keyboardService.setInitSettings(this.platform, this.appWindow).then();
            this.themeService.setPlatformClass(this.document, this.platform);
            this.backButtonService.init(this.platform);
            await this.themeService.setThemeConfiguratorRoot(this.document);
            this.statusBarService.init().then();

            setTimeout(() => SplashScreen.hide().then(), 300);
        });
    }
}
