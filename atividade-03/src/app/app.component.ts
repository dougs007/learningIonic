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
    { title: 'Aluno', url: '/aluno', icon: 'contact' },
    { title: 'Curso', url: '/curso', icon: 'contact' },
    { title: 'Disciplina', url: '/disciplina', icon: 'contact' },
    { title: 'Professor', url: '/professor', icon: 'contact' },
    { title: 'Turma', url: '/turma', icon: 'contact' },
    { title: 'Foto', url: '/foto', icon: 'camera' },
    { title: 'Slide', url: '/slide', icon: 'camera' },
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
