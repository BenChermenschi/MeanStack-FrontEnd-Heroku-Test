import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {PartService} from "../../../../../services/part.service";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
import {Stats} from "../../../../../models/stats.model";

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})

export class CreatePartComponent implements OnInit {
  myForm:FormGroup;
  manufacturers:Manufacturer[];
  stats:Stats
  types:any[];
  constructor(private partService:PartService,private manufacturerService:ManufacturerService) { }

  ngOnInit() {
    this.stats = new Stats(0,0);
    this.manufacturers=[];
    this.types= ["HEAD","BODY","ARM-R","ARM-L","LEGS"];
    this.manufacturerService.vindAlleManufacturers().subscribe(
      (manufacturers:Manufacturer[])=>{
        this.manufacturers = manufacturers;
      }
    );

    this.myForm = new FormGroup({
      partname:new FormControl(),
      description:new FormControl(),
      manufacturer:new FormControl(),
      type:new FormControl(),
      set:new FormControl(),
      damageRating:new FormControl(),
      armorRating:new FormControl()
    });
  }

  onCancel(){
    this.clearForm();
  }

  clearForm(){
    this.myForm.reset();
  }

  submit() {
    console.log(this.myForm);
    var ready = true;
    console.log(this.myForm.value.partname);
    console.log(this.myForm.value.description);
    console.log(this.myForm.value.manufacturer);
    console.log(this.myForm.value.type);
    console.log(this.myForm.value.set);
    console.log(this.myForm.value.damageRating);
    console.log(this.myForm.value.armorRating);

    if(this.myForm.value.partname ==null ||this.myForm.value.partname ==""){
      console.log("partname false");
      ready=false;
    }
    if(this.myForm.value.description == null || this.myForm.value.description ==""){
      console.log("description false");
      ready=false;
    }
    if(this.myForm.value.manufacturer == null || this.myForm.value.manufacturer == ""){
      console.log("manufacturer false");
      ready=false;
    }
    if (this.myForm.value.type == null || this.myForm.value.type == ""){
      console.log("type false");
      ready=false;
    }
    if (this.myForm.value.set == null || this.myForm.value.set ==""){
      console.log("set false");
      ready=false;
    }
    if (this.myForm.value.damageRating == null || this.myForm.value.damageRating == ""){
      console.log("damageRating false");
      ready=false;
    }
    if (this.myForm.value.armorRating == null || this.myForm.value.armorRating ==""){
      console.log("armorRating false");
      ready=false;
    }

    console.log("ready = ");
    console.log(ready);

    enum typesEnum{
      "HEAD","BODY","ARM-R","ARM-L","LEGS"
    }

    this.stats = new Stats(parseInt(this.myForm.value.damageRating),
      parseInt(this.myForm.value.armorRating));

    var damage = parseInt(this.myForm.value.damageRating);
    var armor = parseInt(this.myForm.value.armorRating);

    var type = this.myForm.value.type;
    if(ready == true){
      this.partService.createPart(
        this.myForm.value.partname,
        this.myForm.value.description,
        this.myForm.value.set,
        this.myForm.value.manufacturer,
        type,
        damage,
        armor
      ).subscribe(
        result=>console.log(result),
        error=>console.log(error)
      )
    }


  }
}
