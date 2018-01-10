import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotsComponent } from './bots/bots.component';
import { ListBotsComponent } from './list-bots/list-bots.component';
import { ViewBotComponent } from './view-bot/view-bot.component';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { EditBotComponent } from './edit-bot/edit-bot.component';
import { ListBotsItemComponent } from './list-bots/list-bots-item/list-bots-item.component';
import {routing} from "../../../../app.routing";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BotService} from "../../../../services/bot.service";
import { PartcardComponent } from './view-bot/partcard/partcard.component';
@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpModule,
    CommonModule,routing,
  ],
  declarations: [BotsComponent, ListBotsComponent, ViewBotComponent, CreateBotComponent, EditBotComponent, ListBotsItemComponent, PartcardComponent],
  providers:[BotService]
})
export class BotsModule { }
