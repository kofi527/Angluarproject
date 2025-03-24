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
export class AppModule {}
// This code defines an Angular module named AppModule.
//  It imports BrowserModule and declares the main component 
// (AppComponent) and a custom component (PropertyCardComponent). 
// The module is bootstrapped with AppComponent, which serves as the entry point for the application.