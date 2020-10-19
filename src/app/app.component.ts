import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Clientes',
      url: '/customers',
      icon: 'person'
    },
    {
      title: 'Juegos',
      url: '/games',
      icon: 'menu'
    },
    {
      title: 'Préstamos',
      url: '/loans',
      icon: 'folder'
    },
    {
      title: 'Clientes frecuentes',
      url: '/frequent-customers',
      icon: 'eye'
    },
    {
      title: 'Juegos frecuentes',
      url: '/frequent-games',
      icon: 'flash'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
