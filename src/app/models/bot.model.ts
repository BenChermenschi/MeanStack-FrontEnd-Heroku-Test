

import {Part} from "./part.model";

export class Bot{
  id:string;
  botname:string;
  passcode:string;
  creator:string;
    head:Part;
    body:Part;
    armR:Part;
    armL:Part;
    legs:Part;
  description:string;

  constructor(id:string,botnaam:string,passcode:string,creator:string,head:Part,body:Part,armR:Part,armL:Part,legs:Part,description:string){
    this.id=id;
    this.botname=botnaam;
    this.passcode=passcode;
    this.creator=creator;
    this.head=head;
    this.body=body;
    this.armR=armR;
    this.armL=armL;
    this.legs=legs;
    this.description=description;
  }

}
