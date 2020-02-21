import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface Credential {
  id: string;
  name: string;
  password: string;
}

/**
 * @name Smartlock
 * @description TODO
 * @interfaces Credential
 */
@Plugin({
  pluginName: 'Smartlock',
  plugin: 'cordova-plugin-smart-lock',
  pluginRef: 'Smartlock',
  repo: 'https://github.com/okode/cordova-plugin-smart-lock',
  platforms: ['Android']
})
@Injectable()
export class Smartlock extends IonicNativePlugin {

  /**
   * Check if fingerprint authentication is available
   * @return {Promise<any>} Returns a promise with result
   */
  @Cordova()
  request(): Promise<Credential> {
    return;
  }

  @Cordova()
  save(credential: Credential): Promise<any> {
    return;
  }

  /**
   * Check if fingerprint authentication is available
   * @return {Promise<any>} Returns a promise with result
   */
  @Cordova()
  delete(credential: Credential): Promise<any> {
    return;
  }
}
