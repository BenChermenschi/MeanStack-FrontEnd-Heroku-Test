import { Component, OnInit } from '@angular/core';
import {Part} from "../../../../../models/part.model";
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {Stats} from "../../../../../models/stats.model";
import {FormControl, FormGroup} from "@angular/forms";
import {PartService} from "../../../../../services/part.service";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isNumber} from "util";

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent implements OnInit {
  //TODO EDIT AFMAKEN
  myForm:FormGroup;
  emptyManufacturer:Manufacturer = new Manufacturer("","","","");
  emptyStats:Stats = new Stats(0,0);
  emptyPart:Part = new Part("","",this.emptyManufacturer,"",this.emptyStats,"","");
  manufacturers:Manufacturer[];
  part:Part;
  stats:Stats;
  types:any[];
  prevManufacturer:Manufacturer;
  id:any;

  constructor(private partService:PartService,private manufacturerService:ManufacturerService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.initVars();
    this.setMyForm();
    this.getPart();
    this.getManufacturers();
  }

  initVars(){
    this.stats = this.emptyStats;
    this.part = this.emptyPart;
    this.types= ["HEAD","BODY","ARM-R","ARM-L","LEGS"];
    this.prevManufacturer= this.emptyManufacturer;

  }

  setMyForm(){
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

  getPart(){
    const id = +this.route.queryParams.subscribe((params: Params)=> {
      let id = params['part'];
      console.log("id");
      console.log(id);
      this.id=id;
      if (id != null){
        console.log("go to part service");
        this.partService.vindPartAtId(id).subscribe(
          (onderdeel:Part)=>{
            this.part = onderdeel;
            this.prevManufacturer = onderdeel.manufacturer;

            console.log("recieved part : ");
            console.log(this.part);

            this.myForm.setValue({
              partname:this.part.partname,
              description:this.part.description,
              manufacturer:this.part.manufacturer.id,
              type:this.part.type,
              set:this.part.set,
              damageRating:this.part.stats.damageRating,
              armorRating:this.part.stats.armorRating

            });
          }
        )
      }
    });
  }

  getManufacturers(){
    this.manufacturerService.vindAlleManufacturers().subscribe(
      (manufacturers:Manufacturer[])=>{
        this.manufacturers = manufacturers;
      }
    );
  }

  onCancel(){
    this.router.navigate(['visitor/parts/view'],{queryParams:{part:this.id}})
  }

  submit(){
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

    if (ready == true){
    this.partService.editPart(
      this.id,
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
    );
    alert("success");
      this.router.navigate(['visitor/parts/view'],{queryParams:{part:this.id}})
    }else {
      alert("something went wrong, are all fields filled in?");
    }
  }



}
