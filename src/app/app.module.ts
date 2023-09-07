import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './tower/table/table.component';
import { ChartComponent } from './tower/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    NoopAnimationsModule,
    TableComponent,
    ChartComponent,
  ],
  providers: [
    provideHttpClient(), //
  ],
  bootstrap: [
    AppComponent, //
  ],
})
export class AppModule {}
