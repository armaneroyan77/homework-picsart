const p = Promise.resolve(() => {setTimeout(() => {console.log("Data loaded")}, 2000)});

p.then(f => {
    f();
})