import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {
  myForm:FormGroup;
  manufacturer:Manufacturer;
  id:any;

  constructor(private manufacturerService:ManufacturerService,private router:Router, private route:ActivatedRoute) { }
  //TODO Manufacturer Edit afmaken
  ngOnInit() {
    this.manufacturer= new Manufacturer("","","","");
    this.initForm();
    this.getManufacturer();
  }

  initForm(){
    this.myForm = new FormGroup({
      name:new FormControl(),
      description: new FormControl(),
      prefix: new FormControl()
    });
  }

  getManufacturer(){
    const id = +this.route.queryParams.subscribe((params: Params)=> {
        let id = params['manufacturer'];
        this.id=id;
        console.log("id");
        console.log(id);
        if (id != null){
          console.log("go to part service");
          this.manufacturerService.vindManufacturerAtId(id).subscribe(
            (leverancier:Manufacturer)=>{
              this.manufacturer = leverancier;

              this.myForm.setValue({
                name:this.manufacturer.name,
                description:this.manufacturer.description,
                prefix:this.manufacturer.prefix
              });
            }
          )
        }

      }
    );
  }

  onCancel(){
    this.router.navigate(['visitor/manufacturers/view'],{queryParams:{manufacturer:this.id}})
  }

  submit(){
    console.log(this.myForm.value);

    var valid = true;
    if(this.myForm.value.name == "") {
      valid = false;
    }
    if (this.myForm.value.prefix == ""){
      valid = false;
    }
    if(this.myForm.value.description == ""){
      valid=false;
    }
    if (valid == true){
    this.manufacturerService.editManufacturer(
      this.id,
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.prefix
    ).subscribe(result=>{console.log(result); alert("success")},
      error=>{console.log(error);alert("an error occurred")});

      this.router.navigate(['visitor/manufacturers/view'],{queryParams:{manufacturer:this.id}})
  }else {
    alert("a problem occured, have you filled in all fields ?");
    }
  }


}
