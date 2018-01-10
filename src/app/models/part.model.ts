

import {Stats} from "./stats.model";
import {Manufacturer} from "./manufacturer.model";

export class Part{
  id:string;
  partname:string;
  manufacturer:Manufacturer;
  type:string;
  stats:Stats;
  description:string;
  set:string;

  constructor(id:string,partname:string,manufacturer:Manufacturer,type:string,stats:Stats,description:string,set:string){
    this.id=id;
    this.partname=partname;
    this.manufacturer=manufacturer;
    this.type=type;
    this.stats=stats;
    this.description=description;
    this.set=set;
  }

}
