import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: false
})
export class CityPipe implements PipeTransform {

  transform(value: string, format: string): unknown {
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
      return short;
    }

    return long;
  }

}
