import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Config} from "./config";
import {Manufacturer} from "../models/manufacturer.model";

@Injectable()
export class ManufacturerService {

  constructor(private http:Http) { }


  vindAlleManufacturers(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.get(Config.url + 'api/manufacturer')
      .map((response: Response) =>{
        const waardes = response.json();

        let manufacturers: Manufacturer[] = [];
        for(let waarde of waardes.obj){
          var manufacturer = new Manufacturer(waarde._id,waarde.name,waarde.description,waarde.prefix);

          console.log(manufacturer);
          manufacturers.push(manufacturer);
        }
        console.log(manufacturers);
        return manufacturers;
      })
      .catch((error:Response)=>Observable.throw(error));
  }

  //vind op id
  vindManufacturerAtId(id:string){
    return this.http.get(Config.url + 'api/manufacturer/'+id)
      .map((response:Response)=>{
        const waarden = response.json();
        const waarde = waarden.obj[0];
        console.log("waarde");
        console.log(waarde);
        var manufacturer= new Manufacturer(waarde.id,waarde.name,waarde.description,waarde.prefix);
        return manufacturer;
      }).catch((error:Response)=> Observable.throw(error));
  }

  //create
  createManufacturer(name:string,description:string,prefix:string){
    console.log("create");
    const body = JSON.stringify({
      name:name,
      description:description,
      prefix:prefix
    });

    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.put(Config.url + 'api/manufacturer', body, {headers: headers})
      .map((response: Response) => {
          console.log(response.json());
        }
      )
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw(error.json())
      })
  }

  editManufacturer(id:string,name:string,description:string,prefix:string){
    console.log("edit");
    const body = JSON.stringify({
      name:name,
      description:description,
      prefix:prefix
    });

    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(Config.url + 'api/manufacturer/'+ id, body, {headers: headers})
      .map((response: Response) => {
          console.log(response.json());
        }
      )
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw(error.json())
      })
  }

}
