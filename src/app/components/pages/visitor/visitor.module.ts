import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor/visitor.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "../../../app.routing";
import {VisitorHomeComponent} from "./visitor-home/visitor-home/visitor-home.component";
import {VisitorWorksComponent} from "./visitor-works/visitor-works/visitor-works.component";
import {VisitorWorksModule} from "./visitor-works/visitor-works.module";
import {VisitorHomeModule} from "./visitor-home/visitor-home.module";
import {BotsModule} from "./bots/bots.module";
import {PartsModule} from "./parts/parts.module";
import {ManufacturersModule} from "./manufacturers/manufacturers.module";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpModule,
    routing,
    CommonModule,VisitorWorksModule,VisitorHomeModule,BotsModule,PartsModule,ManufacturersModule
  ],
  declarations: [VisitorComponent]
})
export class VisitorModule { }
