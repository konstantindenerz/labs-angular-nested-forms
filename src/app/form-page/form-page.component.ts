import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom.validators';
import {Context} from './context';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, context: Context) {
    this.formGroup = formBuilder.group({
      first: ['', Validators.required],
      second: ['']
    }, {validators: [CustomValidators.subFormValidator]});
    this.formGroup.reset(context.value);
  }

  ngOnInit(): void {
  }

}
