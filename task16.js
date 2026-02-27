function isPrimitiv(val) {
       return (
        val === null ||                     
        typeof val === "string"    ||
        typeof val === "number"    ||          
        typeof val === "bigint"    ||
        typeof val === "boolean"   ||         
        typeof val === "undefined" ||
        typeof val === "symbol"           
     );
}

console.log(isPrimitiv(null));
console.log(isPrimitiv(12));
console.log(isPrimitiv(Array));
console.log(isPrimitiv([12, 3]));
console.log(isPrimitiv(undefined));



