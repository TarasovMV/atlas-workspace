import {Injectable} from '@angular/core';
import {StatusBar, Style} from '@capacitor/status-bar';
import {debounceTime, filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class StatusBarService {
    private readonly alternativePages: string[] = [];

    constructor(private router: Router) {}

    public async init(): Promise<void> {
        try {
            await StatusBar.setOverlaysWebView({ overlay: true });
        } catch (e) {
            console.warn('Status bar not supported');
        }
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), debounceTime(100))
            .subscribe((x) => this.stateChecker((x as NavigationEnd).url));
    }

    private async setDefaultColor(): Promise<void> {
        try {
            await StatusBar.setStyle({ style: Style.Dark });
        } catch (e) {
            console.warn('Status bar not supported', 'DEFAULT');
        }
    }

    private async setAlternativeColor(): Promise<void> {
        try {
            await StatusBar.setStyle({ style: Style.Light });
        } catch (e) {
            console.warn('Status bar not supported', 'ALTER');
        }
    }

    private stateChecker(path: string): void {
        if (this.isAlternativePage(path)) {
            this.setAlternativeColor().then();
        } else {
            this.setDefaultColor().then();
        }
    }

    private isAlternativePage(path: string): boolean {
        const checkPath = path.split('/').slice(-1)[0];
        return this.alternativePages.includes(checkPath);
    }
}