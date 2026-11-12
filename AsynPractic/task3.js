const { use } = require("react");

async function loadData() {
    try{
        const response = await fetch('/api/user');
        if(!response.ok()){
             throw new Error("the respons data is invalid!");
        }
        const user = await response.json();

        const userID = await fetch(`/api/posts/${user.id}`);

        if(!userID.ok){
            throw new Error("the respons data is invalid!");
        }
        const postsResponse = await userID.json();
        console.log('Posts: ', postsResponse);
        
    }
    catch(err){
        console.log(err); 
    }


//   fetch('/api/user')
//     .then(res => res.json())
//     .then(user => {
//       return fetch(`/api/posts/${user.id}`);
//     })
//     .then(res => res.json())
//     .then(posts => console.log('Posts:', posts));
}