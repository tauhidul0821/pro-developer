import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {asyncValidator} from './validation-service';
import {UniquevalidatorService} from './unique-validator.service';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-angu-form',
  templateUrl: './angu-form.component.html',
  styleUrls: ['./angu-form.component.scss']
})
export class AnguFormComponent implements OnInit {
  myForm: FormGroup;
  osdj;

  constructor(private http: HttpClient, private uniquevalidatorService: UniquevalidatorService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email], (control: AbstractControl) =>
        this.uniquevalidatorService.asyncValidator()(control)
      )
    });

    this.myForm
      .get('firstName')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((name: any) => {
        console.log(this.myForm);
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit() {
    if (!this.myForm.valid) {
      this.myForm.dirty;
      this.myForm.touched;
      console.log('form invalid');
      return;
    }
    console.log(this.myForm.value);
  }
}
