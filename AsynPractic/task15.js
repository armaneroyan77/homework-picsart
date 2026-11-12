function doHeavyMath() {
  for(let i = 0; i < 1000000; i++) {}
  console.log('Calculations finished');
}

console.log('Work started');
// Execute doHeavyMath here so that 'Work finished' is logged BEFORE the calculations.
setTimeout(doHeavyMath, 0);
console.log('Work finished, you can click buttons now');