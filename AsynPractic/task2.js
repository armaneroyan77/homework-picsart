async function getSettings() {
    try{

        const respons = await fetch('/api/settings');

        if(!respons.ok){
            throw new Error(`HTTP error, ${respons.status}`);
        }

        const data = await respons.json();
        console.log("User Data", data);
    }

    catch(err){
        console.log('An error occurred:', error);
    }


//   fetch('/api/settings')
//     .then(res => res.json())
//     .catch(error => console.log('An error occurred:', error));
}