async function getUser() {

    try{

        const response = await fetch('/api/user');

        if(!response.ok){
            throw new Error("the respons data is invalid!");
        }

        const data = await response.json();
        console.log("User: ", data);
    }
    
    catch(err){
        console.log("Fetch error", err);
    };
    
    // fetch('/api/user')
    //     .then(response => response.json())
    //     .then(data => console.log('User:', data));
}


getUser();