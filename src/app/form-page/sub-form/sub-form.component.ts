import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup = {} as any;
  @Input() name: string = 'subForm';

  constructor(private parent: FormGroupDirective, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      foo: [''],
      bar: ['']
    });
    Promise.resolve().then(() => {
      this.parent.form.addControl(this.name, this.formGroup);
    });
  }

  ngOnDestroy(): void {
    Promise.resolve().then(() => {
      this.parent.form.removeControl(this.name);
    });
  }
}
