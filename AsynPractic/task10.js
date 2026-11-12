async function downloadMovies(movies) {
  try{
    for(const movie of movies){
      const response = await fetch(`/api/download/${movie}`);
      if(!response.ok) throw new Error("Posts data request failed");
      console.log(`Downloaded: ${movie}`);
    } 

    console.log("Done!");
    

  }
  catch(err){
    console.log(err);
    
  }

  // movies.forEach(async (movie) => {
  //   await fetch(`/api/download/${movie}`);
  //   console.log(`Downloaded: ${movie}`);
  // });
  // console.log('Done!');
}
