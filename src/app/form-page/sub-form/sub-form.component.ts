import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {Context, PATH} from '../context';
import {PATH_FACTORY_PROVIDER} from '../path.factory';

const id = 'subForm';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss'],
  providers: [
    PATH_FACTORY_PROVIDER(id)
  ]
})
export class SubFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup = {} as any;
  @Input() name: string = id;

  constructor(private parent: FormGroupDirective,
              private context: Context,
              @Inject(PATH) paths: string,
              private formBuilder: FormBuilder) {
    console.log(id, paths);
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      foo: [],
      bar: []
    });
    this.formGroup.reset((this.context.value as any)[this.name]);
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
