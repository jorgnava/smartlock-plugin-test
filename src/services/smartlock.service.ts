import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface Credential {
  id: string;
  name: string;
  password: string;
  profileUri?: string;
}

export interface CredentialDeleteRequest {
  id: string;
}

/**
 * @name Smartlock
 * @description Use Android Smartlock API
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

  SMARTLOCK__REQUEST__ACCOUNTS_NOT_FOUND = -100
  SMARTLOCK__REQUEST__DIALOG_CANCELLED = -101
  
  SMARTLOCK__SAVE = -200
  SMARTLOCK__SAVE__BAD_REQUEST = -201

  SMARTLOCK__DELETE = -300

  SMARTLOCK__COMMON__UNKOWN = -400
  SMARTLOCK__COMMON__CONCURRENT_NOT_ALLOWED = -401
  SMARTLOCK__COMMON__GOOGLE_API_UNAVAILABLE = -402
  SMARTLOCK__COMMON__RESOLUTION_PROMPT_FAIL = -403

  @Cordova()
  request(): Promise<Credential> {
    return;
  }

  @Cordova()
  save(credential: Credential): Promise<any> {
    return;
  }

  @Cordova()
  delete(credentialDeleteRequest: CredentialDeleteRequest): Promise<any> {
    return;
  }
}
