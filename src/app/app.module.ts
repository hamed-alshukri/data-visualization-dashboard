import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerModule } from './tower/tower.module';

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    TowerModule,
  ],
  providers: [
    provideHttpClient(), //
  ],
  bootstrap: [
    AppComponent, //
  ],
})
export class AppModule {}
