import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
@Component({
  selector: 'app-list-manufacturers',
  templateUrl: './list-manufacturers.component.html',
  styleUrls: ['./list-manufacturers.component.css']
})
export class ListManufacturersComponent implements OnInit {
  manufacturers:Manufacturer[];
  constructor(private manufacturerService:ManufacturerService) { }

  ngOnInit() {
    this.manufacturerService.vindAlleManufacturers().subscribe(
      (manufacturers:Manufacturer[])=>{
        this.manufacturers = manufacturers;
      });
  }

}
