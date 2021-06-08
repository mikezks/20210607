import { Pipe, PipeTransform } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, format?: string): Observable<string> {
    let long: string;
    let short: string;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Flughafen Hamburg Helmut Schmidt';
        break;
      default:
        long = short = value;
    }

    if (format === 'short') {
      return of(short);
    }

    return of(long).pipe(
      /*delay(3000),
      tap(console.log)*/
    );
  }

}
