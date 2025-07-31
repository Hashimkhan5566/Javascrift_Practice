// // Task 1: Manage a Shopping List (Arrays + Array Methods)
// Create an array for your shopping list:

// Add 3 items (like "milk", "bread", etc.)

// Add 1 more item at the end.

// Remove the first item.

// Check how many items are left.

// Find the index of a specific item in the list.

let shopping = ["bread","milk","colddrinks"];

console.log(shopping.push("cold_drinks"));

console.log(shopping.shift());

console.log(shopping);

console.log(shopping.indexOf("cold_drinks"));

// Task 2: Favorite Movies (Array of Strings)
// Make an array with 5 of your favorite movies:

// Replace the second movie with a new one.

// Sort the list alphabetically.

// Reverse the order of the list.

// Check if a specific movie is in the list.

let favorite_moves = ["sher","man_mast_malang","dewangi","tere_bin","khudgarzi"];
let update = favorite_moves.join(" ").replace("sher", "pak_drama");
console.log(update);

console.log(favorite_moves.sort());
console.log(favorite_moves.reverse());

console.log(favorite_moves.includes("man_mast_malang"));

console.log(favorite_moves);


// Task 3: Username Formatter (String + String Methods)
// Create a username string:

// Make it all lowercase.

// Count how many characters it has.

// Extract the first 3 characters.

// Replace a certain word with another.

let str = ("HASHIM_KHAN ");

console.log(str.length);
console.log(str.slice(0,3));
console.log(str.replace("KHAN","KHANI"));
console.log(str.toLowerCase());

// // Task 4: Sentence Splitter (String → Array)
// Take a sentence like:

// “I love learning JavaScript every day”

// Count the total number of words. // 28

// Convert the sentence into an array of words.

// Remove the word "every".

// Join the remaining words back into a sentence.

let string = ("i love javascrift every day.");
let convert = string.split();
let filter = convert.filter(convert => convert!=="jani");
let final = filter.join("");

console.log(string.length);
console.log(final);

// Task 5: Daily Temperatures (Array of Numbers)
// You have an array of 7 temperatures (e.g., for a week):

// Find the highest and lowest temperature.

// Add today's temperature.

// Remove the temperature of Day 1.

// Calculate how many temperatures are above 30.

// 💡 Combine .push(), .shift(), .Math.max(), and loop/logic.

let array = [34,45,40, 49,16,18,23];
let highest = Math.max(34,45,49,16,18,23,40);
let lowest = Math.min(34,45,40, 49,16,18,23);
console.log(highest);
console.log(lowest);

array.push(30);

console.log(array);

array.shift();
console.log(array);