import {Component, Input, OnInit} from '@angular/core';
import {Bot} from "../../../../../../models/bot.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-bots-item',
  templateUrl: './list-bots-item.component.html',
  styleUrls: ['./list-bots-item.component.css']
})
export class ListBotsItemComponent implements OnInit {
  @Input()bot:Bot;
  constructor(private router:Router) { }

  ngOnInit() {

  }

  selectBot(){
    this.router.navigate(['visitor/bots/view'],{queryParams:{bot:this.bot.id}})
  }

}
