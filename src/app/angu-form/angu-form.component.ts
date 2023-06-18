import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {UniquevalidatorService} from './unique-validator.service';
import {UpdateCheck, isChangedFormValue, markFormGroupTouched} from '@utils';

@Component({
  selector: 'app-angu-form',
  templateUrl: './angu-form.component.html',
  styleUrls: ['./angu-form.component.scss']
})
export class AnguFormComponent implements OnInit {
  myForm: FormGroup;
  paramId = false;

  changed: boolean = false;
  oldValues: any;
  isChangedFormValueF = isChangedFormValue;

  constructor(private uniquevalidatorService: UniquevalidatorService) {}

  ngOnInit() {
    this.initForm();

    if (this.paramId) {
      this.patchFormValue();
      this.oldValues = {...this.myForm.value};
      this.changed = UpdateCheck(this.myForm, this.changed);
    }
  }

  initForm(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email], (control: AbstractControl) =>
        this.uniquevalidatorService.asyncValidator()(control)
      )
    });

    // this.myForm
    //   .get('firstName')
    //   ?.valueChanges.pipe(distinctUntilChanged())
    //   .subscribe((name: any) => {
    //     console.log(this.myForm);
    //   });
  }

  patchFormValue(): void {
    this.myForm.patchValue({
      firstName: 'Tauhidul',
      lastName: 'Islam',
      email: 'john@gmail.com'
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit() {
    if (!this.myForm.valid) {
      markFormGroupTouched(this.myForm);
      console.log('form invalid');
      return;
    }
    console.log(this.myForm.value);
  }

  click() {
    const value = isChangedFormValue(this.myForm, this.oldValues);
    alert(value);
  }
}
