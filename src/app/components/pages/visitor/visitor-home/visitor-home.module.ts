import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorHomeComponent } from './visitor-home/visitor-home.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "../../../../app.routing";

@NgModule({
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    HttpModule,routing,
    CommonModule
  ],
  declarations: [VisitorHomeComponent]
})
export class VisitorHomeModule { }
