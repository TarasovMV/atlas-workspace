import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UserService} from '../../core/services/data/user.service';
import {ThemeService} from '../../core/services/platform/theme-service.service';
import {FormControl} from '@angular/forms';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-map',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    public themeControl: FormControl = new FormControl(false);
    public pushControl: FormControl = new FormControl(false);

    constructor(
        private navCtrl: NavController,
        private userService: UserService,
        private themeService: ThemeService,
    ) {}

    public ngOnInit(): void {
        this.themeService.isDarkTheme$.pipe(take(1)).subscribe(x => this.themeControl.setValue(!x));
        this.themeControl.valueChanges.subscribe(() => this.themeService.changeTheme());
    }

    public changeUser(): void {
        this.userService.logout();
    }

    public back(): void {
        this.navCtrl.back();
    }
}
