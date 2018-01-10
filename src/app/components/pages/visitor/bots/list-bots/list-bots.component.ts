import { Component, OnInit } from '@angular/core';
import {Bot} from "../../../../../models/bot.model";
import {BotService} from "../../../../../services/bot.service";

@Component({
  selector: 'app-list-bots',
  templateUrl: './list-bots.component.html',
  styleUrls: ['./list-bots.component.css']
})
export class ListBotsComponent implements OnInit {
  bots:Bot[];

  constructor(private botService:BotService) { }

  ngOnInit() {
    this.botService.vindAlleBots().subscribe(
      (bots:Bot[])=>{
        this.bots = bots;
      });
  }

}
