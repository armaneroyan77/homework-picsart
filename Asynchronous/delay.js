function delay(message, time){
    console.log(`wait ${time} ms for response message:`);
    
    setTimeout(() => {
        console.log(message);
    }, time)
}

delay("Hello", 2000);