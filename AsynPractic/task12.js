async function getDashboard() {

const respons = await Promise.all([fetch('/api/weather'),fetch('/api/news')]);
//   const weather = await fetch('/api/weather');
//   const news = await fetch('/api/news');
  console.log('Data collected');
}

