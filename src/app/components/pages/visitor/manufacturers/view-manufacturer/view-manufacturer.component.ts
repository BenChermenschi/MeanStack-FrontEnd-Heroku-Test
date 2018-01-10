import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {ManufacturerService} from "../../../../../services/manufacturer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view-manufacturer',
  templateUrl: './view-manufacturer.component.html',
  styleUrls: ['./view-manufacturer.component.css']
})
export class ViewManufacturerComponent implements OnInit {
  manufacturer:Manufacturer;
  id:any;
  constructor(private route:ActivatedRoute,private manufacturerService:ManufacturerService,private router:Router) { }

  ngOnInit() {
    this.manufacturer = new Manufacturer("","","","");
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
          }
        )
      }

}
);
  }
  //TODO EDIT NAVIGATIE FIXEN
  goToEdit(){
    this.router.navigate(['visitor/manufacturers/edit'],{queryParams:{manufacturer:this.id}});
  }
}
