"use strict"
let phrase = `vida solo hay una`;
let numWord = 2;
let count = 0;
let space = ` `;
let start = 0;
let end = phrase.length;
for (let i = 0; i<phrase.length; i++){
    if(phrase[i]==space){
        count++;
    
    if (count===numWord-1){
        start = i;
    
    }
    if (count===numWord){
        end = i;
    }
}
}
alert (phrase.substring(start,end));