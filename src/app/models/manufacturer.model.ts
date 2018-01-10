export class Manufacturer{
  id:string;
  name:string;
  description:string;
  prefix:string;

  constructor(id:string,name:string,description:string,prefix:string){
    this.id=id;
    this.name=name;
    this.description=description;
    this.prefix=prefix;
  }
}
