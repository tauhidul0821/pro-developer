import {pairwise, startWith, takeWhile} from 'rxjs/operators';
import {UntypedFormGroup} from '@angular/forms';

export function UpdateCheck(formGroup: UntypedFormGroup, changed: boolean): boolean {
  let changeOrNot = false;
  formGroup.valueChanges
    .pipe(
      takeWhile(() => !changed),
      startWith(formGroup.value),
      pairwise()
    )
    .subscribe(([old, value]) => {
      let change = false;
      Object.keys(old).forEach((k) => {
        change = change || old[k] != value[k];
      });
      changed = change;
      changeOrNot = change;
      return changed;
    });

  return changeOrNot;
}

export function isChangedFormValue(formGroup: UntypedFormGroup, oldValues: any): boolean {
  let change = false;
  Object.keys(oldValues).forEach((k) => {
    change = change || oldValues[k] != formGroup.value[k];
  });
  return change;
}
