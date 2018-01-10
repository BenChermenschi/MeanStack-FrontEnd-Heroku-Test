import {Routes} from "@angular/router";
import {VisitorHomeComponent} from "./visitor-home/visitor-home/visitor-home.component";
import {VisitorWorksComponent} from "./visitor-works/visitor-works/visitor-works.component";
import {VISITOR_WORKS_ROUTES} from "./visitor-works/visitor-works.routing";
import {BotsComponent} from "./bots/bots/bots.component";
import {BOTS_ROUTES} from "./bots/bots.routing";
import {ManufacturersModule} from "./manufacturers/manufacturers.module";
import {ManufacturersComponent} from "./manufacturers/manufacturers/manufacturers.component";
import {MANUFACTURERS_ROUTES} from "./manufacturers/manufacturers.routing";
import {PartsComponent} from "./parts/parts/parts.component";
import {PARTS_ROUTES} from "./parts/parts.routing";


export const VISITOR_ROUTES:Routes=[
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component: VisitorHomeComponent},
  {path:'bots', component: BotsComponent, children:BOTS_ROUTES},
  {path:'manufacturers', component: ManufacturersComponent, children: MANUFACTURERS_ROUTES},
  {path:'parts',component:PartsComponent,children:PARTS_ROUTES}

];
