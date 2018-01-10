import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {VisitorModule} from "./components/pages/visitor/visitor.module";
import { NavbarComponent } from './components/public/navbar/navbar.component';
import {BotService} from "./services/bot.service";
import {ManufacturerService} from "./services/manufacturer.service";
import {PartService} from "./services/part.service";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    HttpModule,routing,
    VisitorModule
  ],
  providers: [BotService,ManufacturerService,PartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
