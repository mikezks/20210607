import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {validateCity, validateCityWithParam} from "../../../shared/validators/city-validator";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        params => this.id = +params.get('id')
      );

    this.editForm = this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParam([
          'Graz', 'London'
        ])
      ]],
      to: ['Hamburg', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      date: [new Date().toISOString()]
    }, { updateOn: 'blur' });

    this.editForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(console.log);
  }

  save(): void {
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
    console.log('value', this.editForm.value);
  }
}
