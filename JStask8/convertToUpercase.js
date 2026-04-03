/*
    Convert all names in an array to uppercase.
    ["anna", "john"] → ["ANNA", "JOHN"]
 */

const arr = ["anna", "john"];
convertedArray = arr.map(e => e.toUpperCase());
console.log(convertedArray);
