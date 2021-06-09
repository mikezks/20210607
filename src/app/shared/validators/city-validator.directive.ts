import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const allowedCities = [
      'Graz', 'Hamburg', 'Wien'
    ];

    if (control?.value && allowedCities.indexOf(control.value) === -1) {
      return {
        city: true
      };
    }

    return null;
  }
}
