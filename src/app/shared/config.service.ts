import { Injectable, Inject } from '@angular/core';
import { configToken } from './demo.token';
import { Config } from './demo.config';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(configToken) private config: Config) {
    console.log('new instance is created');
  }

  getValue() {
    return this.config;
  }
}
