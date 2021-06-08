import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'London',
        to: 'New York',
        date: '',
        delayed: false
      }
    ]).pipe(
      tap(_ => console.log('Dummy Flight Service in use'))
    );
  }
}
