import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgApiService } from './svg-api.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
