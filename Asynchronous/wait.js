function wait(ms){
    return new Promise((resolve) => {
        setTimeout(() => {resolve()}, ms);
    })
}

wait(4000).then(() => {
    console.log("Done");
})

