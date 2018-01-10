import {ListManufacturersComponent} from "./list-manufacturers/list-manufacturers.component";
import {CreateManufacturerComponent} from "./create-manufacturer/create-manufacturer.component";
import {Routes} from "@angular/router";
import {EditManufacturerComponent} from "./edit-manufacturer/edit-manufacturer.component";
import {ViewManufacturerComponent} from "./view-manufacturer/view-manufacturer.component";

export const MANUFACTURERS_ROUTES:Routes=[
  {path:'',redirectTo:'list', pathMatch:'full'},
  {path:'list', component: ListManufacturersComponent},
  {path:'create', component: CreateManufacturerComponent},
  {path: 'edit', component: EditManufacturerComponent},
  {path:'view', component: ViewManufacturerComponent}

];
