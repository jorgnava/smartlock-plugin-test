import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Smartlock } from '../../services/smartlock.service';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  password: string;
  result: string;

  constructor(
    public navCtrl: NavController,
    private smartlock: Smartlock,
    private splash: SplashScreen
    ) {}

  onSave() {
    this.smartlock.save({
      id: this.name,
      name: this.name,
      password: this.password
    })
  }

  onRequest() {
    this.splash.hide();
    this.smartlock.request()
    .then(({ id, name, password }) => {
      this.result = 'id: ' + id + 'name: ' + name + 'password: ' + password;
    })
    .catch(err => console.log('Smartlock request error', err));
  }

}
