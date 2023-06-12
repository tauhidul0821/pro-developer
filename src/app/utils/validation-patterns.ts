import {AbstractControl, UntypedFormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';

export function markFormGroupTouched(formGroup: UntypedFormGroup): void {
  (Object as any).values(formGroup.controls).forEach((control) => {
    control.markAsDirty(); // or control.markAsTouched();
    control.updateValueAndValidity();
    if (control instanceof UntypedFormGroup) {
      markFormGroupTouched(control);
    }
  });
}
