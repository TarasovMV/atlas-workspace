import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-map',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    constructor(
        private navCtrl: NavController,
    ) {}

    public ngOnInit(): void {}

    public back(): void {
        this.navCtrl.back();
    }
}
