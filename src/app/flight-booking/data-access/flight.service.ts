import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
