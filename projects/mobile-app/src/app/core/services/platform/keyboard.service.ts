import {ElementRef, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Platform} from '@ionic/angular';
import {Keyboard, KeyboardStyle, KeyboardResize} from '@capacitor/keyboard';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class KeyboardService {
    private keyboardHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private readonly routesWithCoveredKeyboard = ['/auth'];

    constructor(private router: Router) {}

    public async setInitSettings(platform: Platform, appWindow: ElementRef | undefined): Promise<void> {
        if (!appWindow) {
            return;
        }
        try {
            this.actionListeners(platform, appWindow);
            await Keyboard.setStyle({style: KeyboardStyle.Dark});
            await Keyboard.setResizeMode({mode: KeyboardResize.None});
        } catch {
        }
    }

    private actionListeners(platform: Platform, appWindow: ElementRef): void {
        Keyboard.addListener('keyboardWillShow', (event) => this.keyboardHeight$.next(event.keyboardHeight));
        Keyboard.addListener('keyboardWillHide',() => this.keyboardHeight$.next(0));
        this.keyboardHeight$.subscribe((height) => {
            (appWindow as any).el.style = `height: calc(100vh - ${height}px)`;
            if (!this.routesWithCoveredKeyboard.includes(this.router.url)) {
                setTimeout(() => document.activeElement?.scrollIntoView({ behavior: 'smooth' }), 300);
            }
        });
    }
}
