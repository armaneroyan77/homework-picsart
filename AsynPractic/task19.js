function savePlayerSettings(settings) {

    return fetch('/api/settings', { method: 'POST', body: settings })
            .then(() => console.log("settings saved"))
            .catch(err => console.log('Save error'))

//   try {
//     await fetch('/api/settings', { method: 'POST', body: settings });
//     console.log('Settings saved');
//   } catch (err) {
//     console.log('Save error');
//   }
}
