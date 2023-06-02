import { ValidatorFn, isFormArray } from '@angular/forms';

export const atLeastOneValue: ValidatorFn = function(control) {
  if(!isFormArray(control)) {
    return null;
  }

  if(control.controls.some(el => !!el.value)) {
    return null;
  } else {
    return {  atleastonevalue: true };
  }
}
