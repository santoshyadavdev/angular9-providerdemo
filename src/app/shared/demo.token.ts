import { InjectionToken } from '@angular/core';
import { Config } from './demo.config';

export const configToken = new InjectionToken<Config>('demo token');
