import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.css']
})
export class CreateManufacturerComponent implements OnInit {

  myForm:FormGroup;


  constructor(private manufacturerService:ManufacturerService,private router:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name:new FormControl(),
      description: new FormControl(),
      prefix: new FormControl()
    });

  }

  onCancel(){
    this.clearForm();
    this.router.navigate(['visitor/manufacturers/list']);
  }

  clearForm(){
    this.myForm.reset();
  }

  submit(){
    console.log(this.myForm);
    let valid = true;
    if (this.myForm.value.name === null || this.myForm.value.name === '') {
      valid = false;
    }
    if  (this.myForm.value.description === null || this.myForm.value.description === '') {
      valid = false;
    }
    if (this.myForm.value.prefix === null || this.myForm.value.prefix === '') {
      valid = false;
    }

    if (valid === true){
    this.manufacturerService.createManufacturer(
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.prefix
    ).subscribe(result => {console.log(result); alert('success'); this.router.navigate(['/visitor/manufacturers/list']);},
      error=>console.log(error));
    }else{
      alert('error occurred, have you filled in all fields ?');
    }
  }
}
