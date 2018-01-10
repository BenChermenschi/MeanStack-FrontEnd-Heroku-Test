import { Component, OnInit } from '@angular/core';
import {Part} from "../../../../../models/part.model";
import {PartService} from "../../../../../services/part.service";
import {BotService} from "../../../../../services/bot.service";
import {forEach} from "@angular/router/src/utils/collection";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {
  myForm:FormGroup;
  parts:Part[];
  heads:Part[];
  armRs:Part[];
  armLs:Part[];
  bodys:Part[];
  legs:Part[];
  constructor(private partService:PartService,private botService:BotService) { }

  ngOnInit() {
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
      this.myForm = new FormGroup({
        botname:new FormControl(),
        description:new FormControl(),
        creator:new FormControl(),
        passcode:new FormControl(),
        re_passcode:new FormControl(),
        head:new FormControl(),
        body:new FormControl(),
        armR:new FormControl(),
        armL:new FormControl(),
        legs:new FormControl()

      });
  }

  onCancel(){
    this.clearForm();
  }

  clearForm(){
    this.myForm.reset();
  }

  submit(){
    console.log(this.myForm);
    if(this.myForm.value.passcode == this.myForm.value.re_passcode){
      console.log("allowed");
    this.botService.createNewBot(
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
      result=>console.log(result),
      error=>console.log(error)
    )  }
  }

  onSave(){

  }

}
