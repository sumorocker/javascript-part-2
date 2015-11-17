//find the longest word in an array of words and return it, Question 1

function longestWord (arrayOfWords){
     var sortedArray = arrayOfWords.sort(
         function(a,b){
            if (a.length >= b.length){
                return -1;
            }        
            else {
                return 1;
            }
        });
    return sortedArray[0];    
}
console.log(longestWord(["Nora","Allan"]));    


