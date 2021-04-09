import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static subFormValidator(control: AbstractControl): ValidationErrors | null {
    const model = control.value;
    if (model.subForm && model.secondSubForm) {
      if (model.subForm.foo && !model.secondSubForm.foo ||
        !model.subForm.foo && model.secondSubForm.foo
      ) {
        return {error: 'Both foos should be defined'};
      }
    }
    return null;
  }
}
