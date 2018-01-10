import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Config} from "./config";
import {Part} from "../models/part.model";
import {Stats} from "../models/stats.model";
import {Manufacturer} from "../models/manufacturer.model";

@Injectable()
export class PartService {

  constructor(private http:Http) { }


  vindAlleParts(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.get(Config.url + 'api/part')
      .map((response: Response) =>{
        const waardes = response.json();

        let parts: Part[] = [];
        for(let waarde of waardes.obj){
          var part = new Part(waarde._id,waarde.partname,waarde.manufacturer,waarde.type,waarde.stats,waarde.description,waarde.set);


          console.log(part);
          parts.push(part);
        }
        console.log(parts);
        return parts;
      })
      .catch((error:Response)=>Observable.throw(error));
  }


  //vind op id
  vindPartAtId(id:string){
    return this.http.get(Config.url + 'api/part/id/'+id)
      .map((response:Response)=>{
        const waarden = response.json();
        const waarde = waarden.obj[0];
        console.log("waarde");
        console.log(waarde);
        var manufacturer = new Manufacturer(waarde.manufacturer._id,waarde.manufacturer.name,waarde.manufacturer.description,waarde.manufacturer.prefix);
        var part = new Part(waarde.id,waarde.partname,manufacturer,waarde.type,waarde.stats,waarde.description,waarde.set);
        return part;
      }).catch((error:Response)=> Observable.throw(error));
  }

  createPart(partname:string,description:string,set:string,manufacturer:string,type:string,damageRating:number,armorRating:number){
    console.log("create parts");
    const body = JSON.stringify({
      partname:partname,
      manufacturer:manufacturer,
      type:type,
      set:set,
      stats:{
        armorRating:armorRating,
        damageRating:damageRating
      },
      description:description
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
    return this.http
      .put(Config.url + 'api/part/add/', body, options)
      .map((response: Response) => {
      console.log("response from server : ");
        console.log(response.json());
        return response.json();
      } )
      .catch((error: Response) => {
      console.log("error response from server : ");
        console.log(error);
        return Observable.throw(error.json())
      });

  }


  editPart(partId:string,partname:string,description:string,set:string,manufacturer:string,type:string,damageRating:number,armorRating:number){
    console.log("create parts");
    const body = JSON.stringify({
      partname:partname,
      manufacturer:manufacturer,
      type:type,
      set:set,
      stats:{
        armorRating:armorRating,
        damageRating:damageRating
      },
      description:description
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
    return this.http
      .post(Config.url + 'api/part/' + partId, body, options)
      .map((response: Response) => {
        console.log("response from server : ");
        console.log(response.json());
        return response.json();
      } )
      .catch((error: Response) => {
        console.log("error response from server : ");
        console.log(error);
        return Observable.throw(error.json())
      });

  }


}
