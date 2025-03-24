import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PropertyCardComponent } from './property/property-card/property-card.components';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent // Registering the PropertyCardComponent here
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})