import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Carros Thumb',
      url: '/carros',
      icon: 'car'
    },
    {
      title: 'Carros Avatar',
      url: '/carros-avatar',
      icon: 'car'
    },
    {
      title: 'Carros Slide',
      url: '/carrosslide',
      icon: 'car'
    },
    {
      title: 'Carros Card',
      url: '/carros-card',
      icon: 'car'
    },
    {
      title: 'Carros Grid',
      url: '/carros-grid',
      icon: 'car'
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
}
