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


//longest name and alphabetized email addresses Question 2


var name1 = {
        name : "Span",
        email: "spantheman@hotmail.com"
        };

var name2 = {
    name : "Stanley",
    
    email: "stantheman@hotmail.com"
    };

var name3 = {
    name : "Susie",
    email: "susieQ@hotmail.com"
    };

var arrayOfPeople =[
     name1,
     name2,
     name3
    ];

function longestWord(arrayOfPeople){
    var sortedArrayByLength = arrayOfPeople.sort(
         function(a,b){

            if (a.name.length < b.name.length){
                return -1;
            }        
            else {
                return 1;
            }
        });
    
    return sortedArrayByLength;    
}

function alphaEmails (arrayOfPeople){
    var sortedArrayByLetter = arrayOfPeople.sort(
        function(a,b){
            if (a.email < b.email){
                return -1;
            }
            else{
                return 1;
            }
        });
    return sortedArrayByLetter;
}

console.log(longestWord(arrayOfPeople));
console.log(alphaEmails(arrayOfPeople));
    




