function is_safe_int(value){

     return (
        typeof value === "number" &&
        Number.isFinite(value) &&
        Number.isSafeInteger(value)
    );

}

console.log(is_safe_int("df"));
console.log(is_safe_int(NaN));
console.log(is_safe_int(3.23));
console.log(is_safe_int(32342394892341938403349));
console.log(is_safe_int(null));
console.log(is_safe_int(23));





