import {Routes} from "@angular/router";
import {ListBotsComponent} from "./list-bots/list-bots.component";
import {CreateBotComponent} from "./create-bot/create-bot.component";
import {EditBotComponent} from "./edit-bot/edit-bot.component";
import {ViewBotComponent} from "./view-bot/view-bot.component";

export const BOTS_ROUTES:Routes=[
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'list', component: ListBotsComponent},
  {path: 'create',component: CreateBotComponent},
  {path: 'edit',component: EditBotComponent},
  {path: 'view',component: ViewBotComponent}
];
