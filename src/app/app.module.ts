import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { SharedData } from 'src/app/tower/services/tower.data';

import { TowerModule } from 'src/app/tower/tower.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    NoopAnimationsModule,
    TowerModule,
    HeaderComponent,
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
