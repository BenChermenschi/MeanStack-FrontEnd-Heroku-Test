import {Component, Input, OnInit} from '@angular/core';
import {Part} from "../../../../../../models/part.model";

@Component({
  selector: 'app-partcard',
  templateUrl: './partcard.component.html',
  styleUrls: ['./partcard.component.css']
})
export class PartcardComponent implements OnInit {
  @Input() part:Part;

  constructor() { }

  ngOnInit() {
  }

}
