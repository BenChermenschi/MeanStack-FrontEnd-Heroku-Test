
import {Routes} from "@angular/router";
import {VisitorWorksLijstComponent} from "./visitor-works-lijst/visitor-works-lijst.component";

export const VISITOR_WORKS_ROUTES:Routes=[
  {path: '', redirectTo: 'lijst', pathMatch:'full'},
  {path: 'lijst', component: VisitorWorksLijstComponent}
];
