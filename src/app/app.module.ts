import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TowerModule } from './tower/tower.module';
import { SharedData } from 'src/app/service/tower.data';

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    NoopAnimationsModule,
    TowerModule,
  ],
  providers: [
    provideHttpClient(), //
    SharedData,
  ],
  bootstrap: [
    AppComponent, //
  ],
})
export class AppModule {}
