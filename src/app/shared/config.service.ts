import { Injectable, Inject } from '@angular/core';
import { CONFIG_TOKEN } from './demo.token';
import { IConfig } from './demo.config';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(CONFIG_TOKEN) private config: IConfig) {
    console.log('new instance is created');
  }

  getValue() {
    return this.config;
  }
}
