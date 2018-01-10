import {Component, Input, OnInit} from '@angular/core';
import {Part} from "../../../../../../models/part.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parts-list-item',
  templateUrl: './parts-list-item.component.html',
  styleUrls: ['./parts-list-item.component.css']
})
export class PartsListItemComponent implements OnInit {
  @Input()part:Part;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  selectPart(){
    this.router.navigate(['visitor/parts/view'],{queryParams:{part:this.part.id}})
  }

}
