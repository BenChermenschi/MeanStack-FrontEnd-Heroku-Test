import {Routes} from "@angular/router";
import {ListPartsComponent} from "./list-parts/list-parts.component";
import {CreatePartComponent} from "./create-part/create-part.component";
import {EditPartComponent} from "./edit-part/edit-part.component";
import {ViewPartComponent} from "./view-part/view-part.component";

export const PARTS_ROUTES:Routes=[
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'list', component: ListPartsComponent},
  {path: 'create',component: CreatePartComponent},
  {path: 'edit',component: EditPartComponent},
  {path: 'view',component: ViewPartComponent}
];
