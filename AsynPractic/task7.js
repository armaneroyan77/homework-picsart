button.addEventListener('click', async (event) => {
    try{
        const data = await fetch('/api/click-stats'); // we need to wait for this!
        if(!data.ok){
            throw new Error("Posts data request failed");
        }
        console.log('Saved');   
    }
    catch(err){
        console.log(err);
    }
});

// button.addEventListener('click', (event) => {
//   const data = fetch('/api/click-stats'); // we need to wait for this!
//   console.log('Saved');
// });