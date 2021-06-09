import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightSearchComponent} from "./container/flight-search/flight-search.component";
import {FlightEditComponent} from "./container/flight-edit/flight-edit.component";

const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
