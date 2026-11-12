function fetchGreeting() {
    return fetch('/api/greeting')
            .then(response => response.text())
            .then(text => {
                console.log(text);  
                return text;
            })
//   const response = await fetch('/api/greeting');
//   const text = await response.text();
//   console.log(text);
//   return text;
}
