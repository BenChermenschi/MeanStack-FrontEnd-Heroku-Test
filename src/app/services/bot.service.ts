import { Injectable } from '@angular/core';
import {Bot} from '../models/bot.model';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Config} from "./config";
import {Part} from "../models/part.model";
import {Manufacturer} from "../models/manufacturer.model";
import {Stats} from "../models/stats.model";

@Injectable()
export class BotService {

  corruptPart:Part;

  constructor(private http:Http) {
    this.corruptPart = new Part("CORRUPT","CORRUPT DATA",new Manufacturer("corrupt","corrupt","corrupt","corrupt"),"corrupt",new Stats(0,0),"PART NOT FOUND DATA CORRUPTED","ERROR");
  }


  vindAlleBots(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.get(Config.url + 'api/bot')
      .map((response: Response) =>{
      const waardes = response.json();

      let bots: Bot[] = [];
      for(let waarde of waardes.obj){
        console.log(waarde);
        var hoofd:Part;
        var armR:Part;
        var armL:Part;
        var lichaam:Part;
        var benen:Part;


        if(waarde.parts.head=="" ||waarde.parts.head==null){
          hoofd=this.corruptPart;
          console.log("head corrupt");
        }else{
          hoofd=waarde.parts.head;
        }


        if(waarde.parts.body=="" ||waarde.parts.body==null){
          lichaam= this.corruptPart;
          console.log("body corrupt");
        }else{
          lichaam=waarde.parts.body;
        }


        if(waarde.parts.armR=="" ||waarde.parts.armR==null){
          armR= this.corruptPart;
          console.log("armR corrupt");
        }else{
          armR=waarde.parts.armR;
        }

        if(waarde.parts.armL=="" ||waarde.parts.armL==null){
          armL= this.corruptPart;
          console.log("armL corrupt");
        }else{
          armL=waarde.parts.armL;
        }
        if(waarde.parts.legs=="" ||waarde.parts.legs==null){
          benen= this.corruptPart;
          console.log("legs corrupt");
        }else{
          benen=waarde.parts.armL;
        }

        if(waarde.parts == null || waarde.parts=={}){

          hoofd=this.corruptPart,
            lichaam=this.corruptPart,
            armR=this.corruptPart,
            armL=this.corruptPart,
            benen=this.corruptPart

          console.log("all parts corrupt");
        }


        var bot = new Bot(
          waarde._id,
          waarde.botname,
          waarde.passcode,
          waarde.creator,
          hoofd,
          lichaam,
          armR,
          armL,
          benen,
          waarde.description
        );

        bots.push(bot);
      }
      console.log(bots);
        return bots;
      })
      .catch((error:Response)=>Observable.throw(error));
  }

  vindBotAtId(id:string){
    return this.http.get(Config.url + 'api/bot/'+id)
      .map((response:Response)=>{
      const waarden = response.json();
      const waarde = waarden.obj[0];
      console.log("waarde");
      console.log(waarde);
      var incommingHead = waarde.parts.head;
      var incommingBody = waarde.parts.body;
      var incommingArmR = waarde.parts.armR;
      var incommingArmL = waarde.parts.armL;
      var incommingLegs = waarde.parts.legs;

      var hoofd = new Part(
        incommingHead._id,
        incommingHead.partname,
        incommingHead.manufacturer,
        incommingHead.type,
        new Stats(
          incommingHead.stats.damageRating,
          incommingHead.stats.armorRating),
        incommingHead.description,
        incommingHead.set);

        var body = new Part(
          incommingBody._id,
          incommingBody.partname,
          incommingBody.manufacturer,
          incommingBody.type,
          new Stats(
            incommingBody.stats.damageRating,
            incommingBody.stats.armorRating),
          incommingBody.description,
          incommingBody.set);

        var armR = new Part(
          incommingArmR._id,
          incommingArmR.partname,
          incommingArmR.manufacturer,
          incommingArmR.type,
          new Stats(
            incommingArmR.stats.damageRating,
            incommingArmR.stats.armorRating),
          incommingArmR.description,
          incommingArmR.set);

        var armL = new Part(
          incommingArmL._id,
          incommingArmL.partname,
          incommingArmL.manufacturer,
          incommingArmL.type,
          new Stats(
            incommingArmL.stats.damageRating,
            incommingArmL.stats.armorRating),
          incommingArmL.description,
          incommingArmL.set);

        var legs = new Part(
          incommingLegs._id,
          incommingLegs.partname,
          incommingLegs.manufacturer,
          incommingLegs.type,
          new Stats(
            incommingLegs.stats.damageRating,
            incommingLegs.stats.armorRating),
          incommingLegs.description,
          incommingLegs.set);

      var bot = new Bot(waarde._id,waarde.botname,waarde.passcode,waarde.creator,hoofd,body,armR,armL,legs,waarde.description);
      console.log("get bot  ");

      return bot;
    }).catch((error:Response)=> Observable.throw(error));
  }

  createNewBot(botname:string,description:string,creator:string,passcode:string,head:string,armL:string,armR:string,bod:string,legs:string) {
    console.log("create new bot");
    const body = JSON.stringify({
      creator: creator,
      botname: botname,
      passcode: passcode,
      parts: {
        head: head,
        body: bod,
        armR: armR,
        armL: armL,
        legs: legs
      },
      description: description
    });
    console.log("BODY OF REQUEST : ");
    console.log(body);
    let headers = new Headers();
    headers = new Headers({'Content-Type':'application/json'});
    console.log(headers);
    let options = new RequestOptions({headers:headers});
    console.log(options);
    return this.http
      .put(Config.url + 'api/bot/', body, options)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      } )
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw(error.json())
      });
  }

  editBot(botId:string,botname:string,description:string,creator:string,passcode:string,head:string,armL:string,armR:string,bod:string,legs:string){
    console.log("edit bot from id: " + botId);

    const body=JSON.stringify({
      creator: creator,
      botname: botname,
      passcode: passcode,
      parts: {
        head: head,
        body: bod,
        armR: armR,
        armL: armL,
        legs: legs
      },
      description: description
    });
    console.log("body : ");
    console.log(body);
    let headers = new Headers();
    headers = new Headers({'Content-Type':'application/json'});
    console.log("headers : ");
    console.log(headers);
    let options = new RequestOptions({headers:headers});
    console.log("options : ");
    console.log(options);
    return this.http.post(Config.url + 'api/bot/edit/' + botId, body, options)
      .map((response: Response) => {
      console.log("response from server : ");
        console.log(response.json());
        return response.json();
      } )
      .catch((error: Response) => {
      console.log("error from server : ");
        console.log(error);
        return Observable.throw(error.json())
      });

  }

  deleteBot(id:string){
    console.log("write new delete req");
    let headers = new Headers();
    headers = new Headers({'Content-Type':'application/json'});
    console.log("headers : ");
    console.log(headers);
    let options = new RequestOptions({headers:headers});
    console.log("options : ");
    console.log(options);
    return this.http
      .delete(Config.url + 'api/bot/' + id, options)
      .map((response: Response) => {
        console.log("response from server : ");
        console.log(response.json());
        return response.json();
      } )
      .catch((error: Response) => {
        console.log("error from server : ");
        console.log(error);
        return Observable.throw(error.json())
      });
  }
}

