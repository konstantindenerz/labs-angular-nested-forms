import {Component, Inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Context, PATH} from '../../context';
import {PATH_FACTORY_PROVIDER} from '../../path.factory';

const id = 'subsubform';

@Component({
  selector: 'app-sub-sub-form',
  templateUrl: './sub-sub-form.component.html',
  styleUrls: ['./sub-sub-form.component.scss'],
  providers: [
    PATH_FACTORY_PROVIDER(id)
  ]
})
export class SubSubFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(private parent: FormGroupDirective,
              private context: Context,
              @Inject(PATH) paths: string,
              formBuilder: FormBuilder, private ngZone: NgZone) {
    console.log(id, paths);
    this.formGroup = formBuilder.group({
      test: ['', Validators.required],
      bubu: ['']
    });
    Promise.resolve().then(() => {
      parent.form.addControl('subsubform', this.formGroup);
    });
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.formGroup.reset({test: '42'});
        });
      }, 2000);
    });
  }

  ngOnDestroy(): void {
    Promise.resolve().then(() => {
      this.parent.form.removeControl('subsubform');
    });
  }
}
