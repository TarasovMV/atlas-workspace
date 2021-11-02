import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Platform} from "@ionic/angular";
import {KeyboardService} from "./core/services/platform/keyboard.service";
import {UserService} from "./core/services/data/user.service";
import {StatusBarService} from "./core/services/platform/status-bar.service";
import {BackButtonService} from "./core/services/platform/back-button.service";
import {SplashScreen} from "@capacitor/splash-screen";

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
        private userService: UserService,
        private statusBarService: StatusBarService,
        private backButtonService: BackButtonService,
    ) {}

    public ngOnInit(): void {
        this.platform.ready().then(() => {
            this.keyboardService.setInitSettings(this.platform, this.appWindow).then();
            this.statusBarService.init();
            this.backButtonService.init(this.platform);
            setTimeout(() => SplashScreen.hide().then(), 300);
        });
    }
}
