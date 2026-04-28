
// Input
const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };

const wSet = new WeakSet();
function processNotification(notif){
    if(wSet.has(notif)){
        return "Already processed, ignoring";
    }

    wSet.add(notif);
    return `Processed: ${notif.text}`;
}

// Expected Output
console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"

