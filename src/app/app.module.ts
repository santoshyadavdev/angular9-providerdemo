import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IConfig } from './shared/demo.config';
import { CONFIG_TOKEN } from './shared/demo.token';
import { ProductModule } from './product/product.module';


export const CONFIG_VALUE: IConfig = {
  apiEndPoint: 'def.com',
  timeout: 5000
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [{
    provide: CONFIG_TOKEN, useValue: CONFIG_VALUE
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
