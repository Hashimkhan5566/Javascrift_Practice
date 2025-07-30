//concatenation //

let fruits = ["mango", "orange", "amrood", "stablish"];

let cars = ["ferrari","mehran","toyota","mercedes","luxury","audo"];

console.log(fruits.concat(cars));

// reverse array //

let cars$ = ["audo","suzuki","lambda","cary","corio"];

console.log(cars$.reverse(cars$));

// slice //

let car = ["mercedes", "mehran", "suzuki" , "luxury" , "tokyo" , "tesla"];


console.log(car.slice(1,3));

// splice //

let car_pak = ["mehran ","suzuki" , "perrari ","autorickshaw ","toyota ","japaniauto ","chinaauto "];

console.log(car_pak.splice(1 ,3, "suzuki","mehran"));


// sort the array

let book = ["islamiyat ","english ","maths ","science ","urdu ","computer "];

console.log(book.sort().reverse());



//number sort

let number = [1,100,23,38,384,40982];

number.sort(function(a, b){
    return a - b;
})

console.log(number);
