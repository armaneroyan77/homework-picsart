async function showData() {
  let response = await fetch('/api/data');
  if(!response.ok){
    throw new Error("Posts data request failed");
  }
  let data = await response.json(); 
  console.log(data);
}