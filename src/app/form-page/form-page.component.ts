import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom.validators';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  formGroup: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.items = new FormArray([]);
    this.formGroup = formBuilder.group({
      first: ['', Validators.required],
      second: [''],
      items: this.items,
    }, {validators: [CustomValidators.subFormValidator]});
  }

  ngOnInit(): void {
  }

  add(): void {
    const group = this.formBuilder.group({
      test: ['test', Validators.required],
    });
    this.items.push(group);
  }

  deleteLatest(): void {
    this.items.removeAt(this.items.length - 1);
  }
}
