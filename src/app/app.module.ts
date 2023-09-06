import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TowerModule } from './tower/tower.module';
import { TableComponent } from './tower/table/table.component';

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    TowerModule,
    NoopAnimationsModule,
    TableComponent,
  ],
  providers: [
    provideHttpClient(), //
  ],
  bootstrap: [
    AppComponent, //
  ],
})
export class AppModule {}
