async function getNames(users) {
  const promises = users.map(async (user) => {
    let res = await fetch(`/api/name/${user}`);
    if(!res.ok) throw new Error("Posts data request failed");
    return res.text();
  });
  
  // Add Promise.all here:
  const names = await Promise.all[promises];

  console.log(names); 
}