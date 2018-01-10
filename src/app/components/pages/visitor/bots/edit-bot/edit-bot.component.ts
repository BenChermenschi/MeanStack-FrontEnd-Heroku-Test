import { Component, OnInit } from '@angular/core';
import {Bot} from "../../../../../models/bot.model";
import {BotService} from "../../../../../services/bot.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Part} from "../../../../../models/part.model";
import {Stats} from "../../../../../models/stats.model";
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {FormControl, FormGroup} from "@angular/forms";
import {PartService} from "../../../../../services/part.service";

@Component({
  selector: 'app-edit-bot',
  templateUrl: './edit-bot.component.html',
  styleUrls: ['./edit-bot.component.css']
})
export class EditBotComponent implements OnInit {
  myForm:FormGroup;
  bot:Bot;
  bots:Bot[];
  parts:Part[];
  heads:Part[];
  armRs:Part[];
  armLs:Part[];
  bodys:Part[];
  legs:Part[];
  emptyManufacturer:Manufacturer;
  emptyStats:Stats;
  emptyPart:Part;
  prevHead:Part;
  prevBody:Part;
  prevArmR:Part;
  prevArmL:Part;
  prevLegs:Part;
  damageRating:Number;
  armorRating:Number;
  constructor(private route:ActivatedRoute,private botService:BotService,private partService:PartService,private router:Router) {

  }

  ngOnInit() {
    this.InitVars();
    this.initForm();
    this.getBot();
    this.getParts();


  }

  InitVars(){
    this.damageRating=0;
    this.armorRating=0;
    this.emptyManufacturer = new Manufacturer("","","","");
    this.emptyStats = new Stats(0,0);
    this.emptyPart = new Part("","",this.emptyManufacturer,"",this.emptyStats,"","");
    this.prevHead = this.emptyPart;
    this.prevBody = this.emptyPart;
    this.prevArmL = this.emptyPart;
    this.prevArmR = this.emptyPart;
    this.prevLegs = this.emptyPart;
    this.bot = new Bot("","","","",this.emptyPart,this.emptyPart,this.emptyPart,this.emptyPart,this.emptyPart,"");
  }
  getBot(){
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
            if(robot.head != null){
              this.prevHead= robot.head;
              console.log("prev Head");
              console.log(this.prevHead);
            }
            if (robot.body != null){
              this.prevBody = robot.body;

            }
            if (robot.armR != null){
              this.prevArmR = robot.armR;
            }
            if (robot.armL != null){
              this.prevArmL = robot.armL;
            }
            if (robot.legs != null){
              this.prevLegs = robot.legs;
            }


            this.damageRating= robot.head.stats.damageRating + robot.body.stats.damageRating + robot.armL.stats.damageRating + robot.armR.stats.damageRating + robot.legs.stats.damageRating;
            this.armorRating= robot.head.stats.armorRating + robot.body.stats.armorRating + robot.armR.stats.armorRating + robot.armL.stats.armorRating + robot.legs.stats.armorRating;
            console.log(this.damageRating);



            this.myForm.setValue({
              botname: this.bot.botname,
              description: this.bot.description,
              head:this.prevHead.id,
              body:this.bot.body.id,
              armR:this.bot.armR.id,
              armL:this.bot.armL.id,
              legs:this.bot.legs.id,
              creator:'',
              passcode:''
            });
          });
      }
    });
  }

  getParts(){
    this.parts= [];
    this.heads=[];
    this.bodys=[];
    this.armLs=[];
    this.armRs=[];
    this.legs=[];
    this.partService.vindAlleParts().subscribe(
      (parts:Part[])=> {
        this.parts = parts;
        for( let item of this.parts){
          console.log(item.type);
          if(item.type =="HEAD"){
            this.heads.push(item);
          }
          if(item.type =="BODY"){
            this.bodys.push(item);
          }
          if(item.type=="ARM-R"){
            this.armRs.push(item);
          }
          if(item.type=="ARM-L"){
            this.armLs.push(item);
          }
          if(item.type=="LEGS"){
            this.legs.push(item);
          }
        }
      });
  }

  initForm(){
    this.myForm = new FormGroup({
      botname:new FormControl(),
      description:new FormControl(),
      creator:new FormControl(),
      passcode:new FormControl(),
      head:new FormControl(),
      body:new FormControl(),
      armR:new FormControl(),
      armL:new FormControl(),
      legs:new FormControl()

    });


  }



  onCancel(){
    this.router.navigate(['visitor/bots/view'],{queryParams:{bot:this.bot.id}});
  }

  submit(){
    console.log(this.myForm);
    if ((this.myForm.value.passcode == this.bot.passcode) && (this.myForm.value.creator == this.bot.creator)){
      console.log("allowed");
      console.log("myform values : ");
      console.log(this.myForm.value);

      var valid:boolean = true;


      if (this.myForm.value.botname == null){
        this.myForm.value.botname = this.bot.botname;
      }
      console.log("botname hack");
      console.log(this.myForm.value.botname);

      if (this.myForm.value.description == null){
        this.myForm.value.description = this.bot.description;
      }

      if (this.myForm.value.head == null){
        valid = false;
      }

      if (this.myForm.value.armL == null){
        valid = false;
      }

      if (this.myForm.value.armR == null){
        valid = false;
      }

      if (this.myForm.value.body == null){
        valid = false
      }
      if (this.myForm.value.legs == null){
        valid = false;
      }
      let legs = this.prevLegs.id;
      if (this.myForm.value.legs != null){

      }
      console.log("submitting parts");


      if (valid == true){
        var hoofd = this.myForm.value.head._id;
        console.log(hoofd);

        this.botService.editBot(
          this.bot.id,
          this.myForm.value.botname,
          this.myForm.value.description,
          this.myForm.value.creator,
          this.myForm.value.passcode,
          this.myForm.value.head,
          this.myForm.value.armL,
          this.myForm.value.armR,
          this.myForm.value.body,
          this.myForm.value.legs
        ).subscribe(
        result=>{console.log(result); alert("success");},
        error=>{console.log(error);alert("an error occured");}
      );
      }

      this.router.navigate(['visitor/bots/view'],{queryParams:{bot:this.bot.id}});
    }else{
      console.log("not allowed");
      alert("access denied");
    }
  }
}
