/*
## Task 1 - Declaring an Array
*/

FavouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses",]
ProfitFromFirstSevenDays = [1, 2, 4, 8, 16, 32, 64]
Friends = ["Chris", "Lizzie", "Ben", "Tao", "Liz", "Patrick", "Tim", "James", "Joseph", "Max", ]

/* 
## Task 2 - Reading Array Values
Using bracket notation and the correct index, for each person...
  
  👉 Console.log the month in which you were born.
  
  👉 Console.log the month your mother was born.
  
  👉 Console.log your favorite month.
*/

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
 let myBirthMonth = options[4];
 let mumBirthMonth = options[8];
 let favMonth = options[3];

console.log(myBirthMonth);
console.log(mumBirthMonth);
console.log(favMonth);

/*
## Task 3 - Looping and Accessing

We can use the useful loops we learned to access the items in an array.

```js
let englishNumbers = ["one", "two", "three", "four", "five"];
```

👉 Declare an index variable and assign it the value of 0.

👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.

👉 Have the while loop run until the index is equal to or greater than the array's length property.
*/

let englishNumbers = ["one", "two", "three", "four", "five"];
let index = 0;

/*
let arr = [10, 20, 30, 40];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
  */

while (index ==> englishNumbers.length) {
    console.log(englishNumbers[index]);
    index++;
  }


