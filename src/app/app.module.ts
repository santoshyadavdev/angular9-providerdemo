import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './shared/demo.config';
import { configToken } from './shared/demo.token';
import { ProductModule } from './product/product.module';


export const configValue: Config = {
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
    provide: configToken, useValue: configValue
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
