import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PortSamplingOutingHeaderComponent} from './forms/port-sampling-outing-header/port-sampling-outing-header.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PortSamplingOutingHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
