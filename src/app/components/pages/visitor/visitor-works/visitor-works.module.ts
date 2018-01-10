import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorWorksComponent } from './visitor-works/visitor-works.component';
import { VisitorWorksLijstComponent } from './visitor-works-lijst/visitor-works-lijst.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "../../../../app.routing";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    HttpModule,routing,
    CommonModule
  ],
  declarations: [VisitorWorksComponent, VisitorWorksLijstComponent]
})
export class VisitorWorksModule { }
