async function getAvatar(username) {

    try{
        const response = await fetch(`/api/users/${username}`);
        if(!response.ok) throw new Error("Posts data request failed");
        const user = await respons.json();
        console.log('Avatar:', user.avatarUrl);
        return user.avatarUrl;
    }
    catch(err){
        console.error(err);
    }

//   return fetch(`/api/users/${username}`)
//     .then(response => response.json())
//     .then(user => {
//       console.log('Avatar:', user.avatarUrl);
//       return user.avatarUrl;
//     });
}