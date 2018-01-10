import {Component, Input, OnInit} from '@angular/core';
import {Manufacturer} from "../../../../../../models/manufacturer.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manufacturer-list-item',
  templateUrl: './manufacturer-list-item.component.html',
  styleUrls: ['./manufacturer-list-item.component.css']
})
export class ManufacturerListItemComponent implements OnInit {
  @Input() manufacturer:Manufacturer;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  selectManufacturer(){
    this.router.navigate(['visitor/manufacturers/view'],{queryParams:{manufacturer:this.manufacturer.id}})
  }

}
