import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsComponent } from './parts/parts.component';
import { CreatePartComponent } from './create-part/create-part.component';
import { EditPartComponent } from './edit-part/edit-part.component';
import { ListPartsComponent } from './list-parts/list-parts.component';
import { ViewPartComponent } from './view-part/view-part.component';
import { PartsListItemComponent } from './list-parts/parts-list-item/parts-list-item.component';
import {PartService} from "../../../../services/part.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "../../../../app.routing";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpModule,
    CommonModule,routing
  ],
  declarations: [PartsComponent, CreatePartComponent, EditPartComponent, ListPartsComponent, ViewPartComponent, PartsListItemComponent],
  providers: [PartService]
})
export class PartsModule { }
