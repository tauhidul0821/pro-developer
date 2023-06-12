import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {debounce} from 'lodash';
import {Observable, of, Subject, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

export enum EUserFoundType {
  EXIST_IN_cPAY = 'EXIST_IN_cPAY',
  EXIST_IN_CENTRALIZED_CUSTOMER = 'EXIST_IN_CENTRALIZED_CUSTOMER',
  NONE = 'NONE'
}

export type UserCheekResponse = {
  isExist: boolean;
  userExistType: EUserFoundType;
  userInfo: any;
  customerExistType: EUserFoundType;
  customer: any;
};

@Injectable({
  providedIn: 'root'
})
export class UniquevalidatorService {
  static path = {
    merchantPath: 'admin/merchants',
    userExist: 'auth/users/is-exists'
  };

  constructor(private httpClient: HttpClient) {}

  checkEmailValidator(isEdit: boolean, paramsValue = null): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      if (
        paramsValue &&
        control.value &&
        paramsValue.trim().toLocaleLowerCase() === control.value.trim().toLocaleLowerCase()
      ) {
        return of(null);
      }

      return timer(1000).pipe(
        distinctUntilChanged(),
        switchMap(() => {
          return this.httpClient.get(`${UniquevalidatorService.path.merchantPath}/${control.value}/exist`).pipe(
            map((res: any) => {
              if (res && !isEdit) {
                // tslint:disable-next-line:no-shadowed-variable
                return this.httpClient
                  .post(UniquevalidatorService.path.userExist, {email: control.value})
                  .pipe(
                    map((res: any) => {
                      if (res.isExist) {
                        // this.setUserFoundKeyClock(false, res?.userInfo);
                        return {uniqueValidator: true};
                      } else {
                        // this.clearUserFoundKeyClock(false);
                      }
                    })
                  )
                  .subscribe();
              } else if (res && isEdit) {
                // this.setUserFoundKeyClock(false, res?.userInfo);
                return {uniqueValidator: true};
              } else {
                // this.clearUserFoundKeyClock(false);
                return null;
              }
            })
          );
        })
      );
    };
  }

  asyncValidator() {
    return (control: any): Observable<any> => {
      const value = control.value; // Get the form control value
      console.log('first chat GPT');
      const firstApiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Replace with your first API endpoint
      const secondApiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Replace with your second API endpoint

      return timer(1000).pipe(
        distinctUntilChanged(),
        switchMap(() => {
          return this.httpClient.get(firstApiUrl).pipe(
            switchMap((response: any) => {
              console.log('first API res, ', response);
              if (response.id === 1) {
                // Call the second API if the response is true
                return this.httpClient.get(secondApiUrl).pipe(
                  map((secondApiResponse: any) => {
                    console.log('secondApiResponse :- ', secondApiResponse);
                    if (secondApiResponse.id === 1) {
                      return {asyncError: true}; // Return an error object if the second API response is true
                    } else {
                      return null; // Return null if the second API response is false
                    }
                  })
                );
              } else {
                return of(null); // Return null if the first API response is false
              }
            })
          );
        })
      );
    };
  }
}
