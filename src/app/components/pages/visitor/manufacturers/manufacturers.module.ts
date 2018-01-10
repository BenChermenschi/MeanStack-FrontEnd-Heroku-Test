import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';
import { EditManufacturerComponent } from './edit-manufacturer/edit-manufacturer.component';
import { ListManufacturersComponent } from './list-manufacturers/list-manufacturers.component';
import { ViewManufacturerComponent } from './view-manufacturer/view-manufacturer.component';
import { ManufacturerListItemComponent } from './list-manufacturers/manufacturer-list-item/manufacturer-list-item.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "../../../../app.routing";
import {ManufacturerService} from "../../../../services/manufacturer.service";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpModule,
    CommonModule,routing
  ],
  declarations: [ManufacturersComponent, CreateManufacturerComponent, EditManufacturerComponent, ListManufacturersComponent, ViewManufacturerComponent, ManufacturerListItemComponent],
  providers:[ManufacturerService]
})
export class ManufacturersModule { }
