import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../../../../../models/manufacturer.model";
import {Stats} from "../../../../../models/stats.model";
import {Part} from "../../../../../models/part.model";
import {PartService} from "../../../../../services/part.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view-part',
  templateUrl: './view-part.component.html',
  styleUrls: ['./view-part.component.css']
})
export class ViewPartComponent implements OnInit {
  emptyManufacturer:Manufacturer;
  emptyStats:Stats;
  part:Part;
  id:any;
  constructor(private route:ActivatedRoute,private partService:PartService,private router:Router) { }

  ngOnInit() {
    this.emptyManufacturer = new Manufacturer("","","","");
    this.emptyStats = new Stats(0,0);
    this.part = new Part("","",this.emptyManufacturer,"",this.emptyStats,"","");
    const id = +this.route.queryParams.subscribe((params: Params)=> {
       this.id = params['part'];
      console.log("id");
      console.log(this.id);
      if (this.id != null){
        console.log("go to part service");
        this.partService.vindPartAtId(this.id).subscribe(
          (onderdeel:Part)=>{
            this.part = onderdeel;
          }
        )
      }
    });
  }

  goToEdit(){
    console.log("part id before navigating to edit : ");
    console.log(this.id);
    this.router.navigate(['visitor/parts/edit'],{queryParams:{part:this.id}})
  }


}
