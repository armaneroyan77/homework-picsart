async function loadProfile() {
  let user = await fetch('/api/profile');
  console.log('Profile loaded');
}