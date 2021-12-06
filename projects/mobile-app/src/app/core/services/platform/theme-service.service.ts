import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Storage } from '@capacitor/storage';
import {Platform} from "@ionic/angular";


@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly renderer: Renderer2;
    private themeConfigurator: ThemeConfigurator;
    public isDarkTheme$: Observable<boolean>;

    constructor(
        private rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public async setThemeConfiguratorRoot(document: Document): Promise<void> {
        const theme = (await Storage.get({key: 'theme'}))?.value;
        this.themeConfigurator = new ThemeConfigurator(document, this.renderer, theme);
        this.isDarkTheme$ = this.themeConfigurator.isDarkTheme$;
    }

    public setPlatformClass(document: Document, platform: Platform): void {
        if (platform.is('ios')) {
            this.renderer.setAttribute(document.body, 'class', 'ios');
        }
    }

    public changeTheme(): void {
        this.themeConfigurator.switchTheme();
    }
}

export class ThemeConfigurator {
    public isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private document: Document,
        private renderer: Renderer2,
        themeStorage: string,
    ) {
        this.isDarkTheme$.subscribe((ref) => this.setTheme(ref));
        if (!themeStorage) {
            this.theme = true;
        } else {
            this.theme = themeStorage === 'true';
        }
    }

    public set theme(value: boolean) {
        Storage.set({key: 'theme', value: value.toString()}).then();
        this.isDarkTheme$.next(value);
    }

    public get theme(): boolean {
        return this.isDarkTheme$.getValue();
    }

    public switchTheme(): void {
        this.theme = !this.theme;
    }

    public setTheme(isDarkMode: boolean): void {
        if (!this.document) {
            return;
        }
        const hostClass = isDarkMode ? 'theme-dark' : 'theme-light';
        this.renderer.setAttribute(this.document.body, 'class', hostClass);
    }
}
