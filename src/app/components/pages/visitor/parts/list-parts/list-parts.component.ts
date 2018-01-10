import { Component, OnInit } from '@angular/core';
import {PartService} from "../../../../../services/part.service";
import {Part} from "../../../../../models/part.model";


@Component({
  selector: 'app-list-parts',
  templateUrl: './list-parts.component.html',
  styleUrls: ['./list-parts.component.css']
})
export class ListPartsComponent implements OnInit {
  parts:Part[];
  constructor(private partService:PartService) { }

  ngOnInit() {
    this.partService.vindAlleParts().subscribe(
      (parts:Part[])=>{
        this.parts = parts;
      });
  }

}
