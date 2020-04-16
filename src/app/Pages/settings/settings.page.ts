import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../Services/theme.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private themeService: ThemeService) {
    }

    ngOnInit() {
    }

    enableDark() {
        this.themeService.enableDarkMood();
        localStorage.setItem('light-mood', 'unActive');
    }

    enableLight() {
        this.themeService.enableLightMood();
        localStorage.setItem('light-mood', 'active');
    }
}
