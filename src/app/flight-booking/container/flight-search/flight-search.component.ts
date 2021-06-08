import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { DummyFlightService } from '../../data-access/dummy-flight.service';
import { FlightService } from '../../data-access/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    // { provide: FlightService, useClass: DummyFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights
      );

  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
    console.log(this.selectedFlight);
  }
}
