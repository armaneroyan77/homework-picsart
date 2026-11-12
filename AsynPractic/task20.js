async function getPlayerScore(playerId) {

    try{
        const responsePlayerID = await fetch(`/api/players/${playerId}`);
        if(!responsePlayerID.ok) throw new Error("Posts data request failed");
        const player = await responsePlayerID.json(); 

        const responsGameID = await fetch(`/api/scores/${player.gameId}`);
        if(!responsGameID.ok) throw new Error("Posts data request failed");
        const score = await responsGameID.json();

        console.log(`Current score: ${score.points}`);
    }
    catch(err){
        console.error(err);
    }

//   return fetch(`/api/players/${playerId}`)
//     .then(response => response.json())
//     .then(player => {
//       return fetch(`/api/scores/${player.gameId}`);
//     })
//     .then(response => response.json())
//     .then(score => {
//       console.log(`Current score: ${score.points}`);
//     });
}


