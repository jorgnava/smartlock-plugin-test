import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Smartlock } from '../../services/smartlock.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  password: string;

  result = {
    id: '',
    name: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    private smartlock: Smartlock
    ) {}

  onSave() {
    this.smartlock.save({
      id: this.name,
      name: this.name,
      password: this.password
    })
    .then(() => console.log('Smartlock save success'))
    .catch(err => console.log('Smartlock save error', err));
  }

  onRequest() {
    this.smartlock.request()
    .then(({ id, name, password }) => {
      this.result = {
        id: 'id: ' + id,
        name: 'name: ' + name,
        password: 'password: ' + password
      }
      console.log('Smartlock request success')
    })
    .catch(err => console.log('Smartlock request error', err));
  }

  onDelete() {
    this.smartlock.delete({ id: this.name })
    .then(() => console.log('Smartlock delete success'))
    .catch(err => console.log('Smartlock delete error', err));
  }

}
