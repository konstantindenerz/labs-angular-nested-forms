import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-sub-sub-form',
  templateUrl: './sub-sub-form.component.html',
  styleUrls: ['./sub-sub-form.component.scss']
})
export class SubSubFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(private parent: FormGroupDirective, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      test: ['', Validators.required],
      bubu: ['']
    });
    Promise.resolve().then(() => {
      parent.form.addControl('subsubform', this.formGroup);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    Promise.resolve().then(() => {
      this.parent.form.removeControl('subsubform');
    });
  }
}
