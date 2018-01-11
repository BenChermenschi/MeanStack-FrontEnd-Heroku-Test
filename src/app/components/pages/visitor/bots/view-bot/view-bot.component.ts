import { Component, OnInit } from '@angular/core';
import {Bot} from "../../../../../models/bot.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BotService} from "../../../../../services/bot.service";
import {Part} from "../../../../../models/part.model";
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {Stats} from "../../../../../models/stats.model";

@Component({
  selector: 'app-view-bot',
  templateUrl: './view-bot.component.html',
  styleUrls: ['./view-bot.component.css']
})
export class ViewBotComponent implements OnInit {
  bot:Bot;
  emptyManufacturer:Manufacturer;
  emptyStats:Stats;
  emptyPart:Part;
  damageRating:Number;
  armorRating:Number;
  constructor(private route:ActivatedRoute,private botService:BotService,private router:Router) { }

  ngOnInit() {
    this.damageRating=0;
    this.armorRating=0;
    this.emptyManufacturer = new Manufacturer("","","","");
    this.emptyStats = new Stats(0,0);
    this.emptyPart = new Part("","",this.emptyManufacturer,"",this.emptyStats,"","");
    this.bot = new Bot("","","","",this.emptyPart,this.emptyPart,this.emptyPart,this.emptyPart,this.emptyPart,"");
    const id = +this.route.queryParams.subscribe((params: Params)=> {
      let id = params['bot'];
      console.log("id");
      console.log(id);
      if(id != null){
        console.log("go to bot service");
        this.botService.vindBotAtId(id).subscribe(
          (robot:Bot)=>{
          /*  this.bot.id = robot.id;
            this.bot.creator = robot.creator;
            this.bot.passcode = robot.passcode;
            this.bot.description = robot.description;
            this.bot.botname = robot.botname;
            this.bot.head = robot.head;
            this.bot.body = robot.body;
            this.bot.armR = robot.armR;
            this.bot.armL = robot.armL;
            this.bot.legs = robot.legs;*/
          this.bot = robot;

            this.damageRating= robot.head.stats.damageRating + robot.body.stats.damageRating + robot.armL.stats.damageRating + robot.armR.stats.damageRating + robot.legs.stats.damageRating;
            this.armorRating= robot.head.stats.armorRating + robot.body.stats.armorRating + robot.armR.stats.armorRating + robot.armL.stats.armorRating + robot.legs.stats.armorRating;
          console.log(this.damageRating);
          });
      }
    });
    //

  }
  //TODO BOT DELETE FIXEN
  goToEdit(){
    this.router.navigate(['visitor/bots/edit'],{queryParams:{bot:this.bot.id}});
  }


  goToDelete(){

    let promptBox = prompt("Passcode please",'');



    if (promptBox === this.bot.passcode){
    this.botService.deleteBot(this.bot.id)
      .subscribe(
        result=>console.log(result),
      error=>console.log(error)
      );
    this.router.navigate(['visitor/bots/']);

    }else{
      alert("acccess denied");
    }
  }

}
