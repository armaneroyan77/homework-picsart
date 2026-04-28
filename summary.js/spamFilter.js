
// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

function filterSpam(text, badWords){
    const words = text.split(" ");
    const uniqueBadWords = new Set(badWords);

    words.forEach((word, index) => {
        if(uniqueBadWords.has(word)){
            words[index] = "***";
        }
    });

    return words.join(" ");
}
// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"

