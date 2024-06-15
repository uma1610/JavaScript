function count() {
let words=document.getElementById("text").value;
console.log(words);
let wordsplit=words.split(" ");
console.log(wordsplit);
let wordcount=wordsplit.length;
console.log(wordcount);
let result1=document.getElementById("result") ;
result.innerHTML = ("Total words:  "+ wordcount);

}
