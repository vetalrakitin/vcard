import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/component";
import {AboutComponent} from "./about/component";
import {ContactsComponent} from "./contacts/component";
import {ProjectsComponent} from "./projects/component";
import {FeedbackComponent} from "./feedback/component";

//import {e404Component} from "./404.component";

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'about',        component: AboutComponent},
    {path: 'projects',        component: ProjectsComponent},
    {path: 'contacts',        component: ContactsComponent},
    {path: 'feedback',        component: FeedbackComponent},
    //{path: '**',        component: e404Component}
];

export const routing = RouterModule.forRoot(routes);