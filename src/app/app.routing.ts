import {RouterModule, Routes} from "@angular/router";
import {VISITOR_ROUTES} from "./components/pages/visitor/visitor.routing";
import {VisitorComponent} from "./components/pages/visitor/visitor/visitor.component";



const APP_ROUTES: Routes = [
  {path:'', redirectTo:'visitor', pathMatch:'full'},
  {path:'visitor', component:VisitorComponent, children:VISITOR_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
