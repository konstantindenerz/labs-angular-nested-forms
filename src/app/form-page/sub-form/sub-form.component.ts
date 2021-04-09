import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(private parent: FormGroupDirective, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      foo: ['', Validators.required],
      bar: ['']
    });
    Promise.resolve().then(() => {
      parent.form.addControl('subform', this.formGroup);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    Promise.resolve().then(() => {
      this.parent.form.removeControl('subform');
    });
  }
}
