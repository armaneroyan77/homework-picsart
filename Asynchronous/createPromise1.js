const p = Promise.reject(() => {console.log("Server Error");
});

p.catch(f => {
    f();
})