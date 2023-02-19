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
| 27   | -------                               | ------- |
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
