import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpotDialogComponent } from './components/spot-dialog/spot-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import apiKey from '../environments/api-keys.json';

@NgModule({
  declarations: [
    AppComponent,
    SpotDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: apiKey["google-maps"]
    }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }