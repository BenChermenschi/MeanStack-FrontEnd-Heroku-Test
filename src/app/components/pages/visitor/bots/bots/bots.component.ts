import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToBotList(){
    this.router.navigate(['/bots/list']);
  }

}
