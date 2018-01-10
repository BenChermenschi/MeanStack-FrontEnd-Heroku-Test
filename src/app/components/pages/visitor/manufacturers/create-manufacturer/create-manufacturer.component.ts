import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ManufacturerService} from "../../../../../services/manufacturer.service";

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.css']
})
export class CreateManufacturerComponent implements OnInit {

  myForm:FormGroup;


  constructor(private manufacturerService:ManufacturerService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name:new FormControl(),
      description: new FormControl(),
      prefix: new FormControl()
    });

  }

  onCancel(){
    this.clearForm()
  }

  clearForm(){
    this.myForm.reset();
  }

  submit(){
    console.log(this.myForm);

    this.manufacturerService.createManufacturer(
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.prefix
    ).subscribe(result=>{console.log(result); alert("success")},
      error=>console.log(error))
  }
}
