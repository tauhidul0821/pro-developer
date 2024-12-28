## JavaScript Advance Topic

- callback, promise, try/catch, async/await, javaScript Inheritances, Destructuring,( reduce, spread/rest, call/apply/bind ), ( which one console fist: promise , callback, or other task, )

## CSS Advance Topic

- content-box vs. border-box, Units: px, em, rem, %, vh, vw,
  Flexbox, CSS Grid, Media Queries, Transitions and Animations, CSS Functions, nesting, mixins, extends, Advanced Grid and Flexbox Patterns,

## Angular Advance Topic

- Signals , observable, rxjs, createComponent, lazy loading, Dynamic Components, Change Detection Strategy, Custom Pipes, Custom Validators and Async Validators, Angular Animations, Router Guards, State Management like: NgRx, Custom Decorators, Advanced Routing Techniques: outlets , nested routing , dynamic route configuration, Micro-Frontend Architecture, Standalone APIs,

## TypeScript Advance Topic

- mapped types
- Conditional Type Distributivity
- template literal types
- TypeScript comes with many built-in utility types, such as Partial, DeepPartial, Pick, Omit, Record, Required,Readonly and more.
- generics type/ type guards, intersection types,
- discriminated unions types
- TypeScript infers types where possible to reduce boilerplate.
- Template Literal Type Inference
- Branded Types.
- Exact Object Types with keyof and never
- as const Assertions
- Exhaustiveness Checking

## NodeJs Advance Topic

- simple REST API, get, post, put, delete, patch
- SQL/NoSQL setup
- gRPC, GraphQL,
- login/logout, jwt, authgard
- photo/file upload/download
- real time communication : WebSockets, Server-Sent Events (SSE), WebRTC ,
- data with pagination
- node with Kafka

```ts
// Combine infer with template literals for parsing and type extraction.

type ExtractUserId<T> = T extends `user-${infer U}` ? U : never;

type UserId = ExtractUserId<'user-12345'>; // "12345"
```

## Database Advance Topic

- Database Transactions
-

![sddefault](https://github.com/tauhidul0821/pro-developer/assets/10520882/c7c32749-ef85-4de6-a017-9c3445d62f39)

- write code and example here

| list | rxjs                                  | status  |
| ---- | ------------------------------------- | ------- |
| 01   | js promises                           | green   |
| 02   | async await                           | ------- |
| 03   | from Event                            | green   |
| 04   | switchMap                             | ------- |
| 05   | toArray                               | green   |
| 06   | custom Observable                     | ------- |
| 07   | map                                   | ------- |
| 08   | pluck                                 | green   |
| 09   | filter                                | ------- |
| 10   | tap                                   | ------- |
| 11   | take                                  | ------- |
| 12   | retry                                 | ------- |
| 13   | debounceTime and DistinctUntilChanged | ------- |
| 14   | concatMap                             | ------- |
| 15   | Subject and BehaviorSubject           | ------- |
| 16   | replaySubject                         | ------- |
| 17   | asyncSubject                          | ------- |
| 18   | concat and merge                      | ------- |
| 19   | mergeMap                              | ------- |
| 20   | concatMap                             | ------- |
| 21   | switchMap                             | ------- |
| 22   | exhaustMap                            | ------- |
| 23   | shareReplay                           | ------- |
| 24   | combileLatest                         | ------- |
| 25   | zip and forkJoin                      | ------- |
| 26   | catchError throwError                 | ------- |
| 27   | HttpError get form intercepter        | ------- |
| 28   | -------                               | ------- |
| 29   | -------                               | ------- |
| 30   | -------                               | ------- |
| 31   | -------                               | ------- |
| 32   | -------                               | ------- |
| 33   | -------                               | ------- |
| 34   | -------                               | ------- |
| 35   | -------                               | ------- |
| 36   | -------                               | ------- |
| 37   | -------                               | ------- |
| 38   | -------                               | ------- |
| 39   | -------                               | ------- |
| 40   | -------                               | ------- |

## Object.create

```JS
var person = {
    city: 'Dhaka',
    calculateAge: function() {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.yourBirthYear;
        console.log(age);
         return age;
    }
}

// var tuhin = Object.create(person);
// tuhin.name = 'Tuhin';
// tuhin.yourBirthYear = 1994;


var tuhin = Object.create(person, {
    name: {value: 'Tuhin'},
    yourBirthYear: {value: 1994}
});

tuhin.calculateAge();
/**
 * Output: 29
*/

```

```JS

//    Object.assign
const target = {
    a: 1,
    b: 2,
    name: 'tuhin'
}
const source = {
    b: 4,
    c: 5,
    name: 'Khadiza'
}

const returnedTarget = Object.assign(target, source);
console.log(target);
/* Output
    {a: 1, b: 4, name: 'Khadiza', c: 5}
*/

```

## Object.keys

```JS

// Object.keys
const objKeys = Object.keys(source);
console.log('Keys :- ', objKeys);
/*Output:
    ['b', 'c', 'name']
*/
```

## Object.values

```JS

const sales = {
    John: 30,
    Sally: 40,
    Rob: 35,
    Jim: 50,
    Kim: 49
};

function sumSales(obj){
    let sum =0;
    for(let value of Object.values(obj)){
        sum += value;
    }
    return sum;
}

console.log(sumSales(sales));
/* output:
    204
*/

```

## Object.entries

```JS
    const sales = {
        John: 30,
        Sally: 40,
        Rob: 35,
        Jim: 50,
        Kim: 49
    };

function personSales(obj){
    for(let [key, value] of Object.entries(obj)){
        console.log(`${key} had ${value} sales`);
    }
}
```

```JS


// Object.create
    var person = {
        city: 'Dhaka',
        calculateAge() {
            var currentYear = new Date().getFullYear();
            var age = currentYear - this.yourBirthYear;
            console.log(age);
            return age;
        }

        // calculateAge: function() {
        //     var currentYear = new Date().getFullYear();
        //     var age = currentYear - this.yourBirthYear;
        //     console.log(age);
        //     return age;
        // }
    }

    // var tuhin = Object.create(person);
    // tuhin.name = 'Tuhin';
    // tuhin.yourBirthYear = 1994;


    var tuhin = Object.create(person, {
        name: {value: 'Tuhin'},
        yourBirthYear: {value: 1994}
    });

    tuhin.calculateAge();
    /**
     * Output: 29
    */

//    Object.assign
const target = {
    a: 1,
    b: 2,
    name: 'tuhin'
}
const source = {
    b: 4,
    c: 5,
    name: 'Khadiza'
}

const returnedTarget = Object.assign(target, source);
console.log(target);
/* Output
    {a: 1, b: 4, name: 'Khadiza', c: 5}
*/


// Object.keys
const objKeys = Object.keys(source);
console.log('Keys :- ', objKeys);
/*Output:
    ['b', 'c', 'name']
*/

const objValues = Object.values(source);
console.log('Values: ', objValues);
/*Output:
    [4, 5, 'Khadiza']
*/

const objEntries = Object.entries(source);
console.log(objEntries);
/*output:
[ ['b', 4],['c', 5],['name', 'Khadiza'] ]
*/

const sales = {
    John: 30,
    Sally: 40,
    Rob: 35,
    Jim: 50,
    Kim: 49
};

function sumSales(obj){
    let sum =0;
    for(let value of Object.values(obj)){
        sum += value;
    }
    return sum;
}

console.log(sumSales(sales));
/* output:
    204
*/

function personSales(obj){
    for(let [key, value] of Object.entries(obj)){
        console.log(`${key} had ${value} sales`);
    }
}
/* Output:
    John had 30 sales
    Sally had 40 sales
    Rob had 35 sales
    Jim had 50 sales
    Kim had 49 sales
*/


console.log(personSales(sales));


```

```JS
const number = 123456.789;

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// Expected output: "1,23,000"

```
