let count = 100000;
function f(){
    console.log(count--);
    setInterval(f, 1000);
}

setInterval(f, 1000);
