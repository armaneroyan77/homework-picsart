const timeoutID = setTimeout(() => {
    console.log("Exucated");

}, 5000);

setTimeout(() => {
    clearTimeout(timeoutID);
    console.log("setTimeout is stoped!");
}, 2000);