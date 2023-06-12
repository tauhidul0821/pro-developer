import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

export function asyncValidator(http: HttpClient): (control: FormControl) => Observable<any> {
  return (control: FormControl): Observable<any> => {
    const value = control.value; // Get the form control value
    const firstApiUrl = 'http://example.com/first-api'; // Replace with your first API endpoint
    const secondApiUrl = 'http://example.com/second-api'; // Replace with your second API endpoint

    return http.get(firstApiUrl).pipe(
      switchMap((response: any) => {
        if (response === true) {
          // Call the second API if the response is true
          return http.get(secondApiUrl).pipe(
            map((secondApiResponse: any) => {
              if (secondApiResponse === true) {
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
  };
}
