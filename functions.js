//find the longest word in an array of words and return it, Question 1

/*
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
    

//determining square of multiple elements of an array using map function Question 3


var numbers = [2,4,6,8];
var mappedNum = numbers.map(squareNum);
                           
function squareNum (numberToBeSquared){
    return numberToBeSquared * numberToBeSquared;
}

console.log(mappedNum);

//determining square of an array of objects and re-inserting it into the object Question 4


var perp1 = {
    name: "Steve",
    num: 1443
}

var perp2 = {
    name: "Bling",
    num: 1239
}
    
var perp3 = {
    name: "Trumpet",
    num: 9308
}

var perps = [perp1, perp2, perp3]

function squaredNum(numbersToBeSquared){
    return numbersToBeSquared.num * numbersToBeSquared.num;
};

function squaredNum(numbersToBeSquared){
	numbersToBeSquared.num = numbersToBeSquared.num * numbersToBeSquared.num;
	return numbersToBeSquared;
}

var squaredPerps = perps.map(squaredNum);

console.log(squaredPerps);

*/

// Operation maker Question 5


function operationMaker (operation){
    
    if(operation === "add"){
        return function adder(n1, n2){
            return n1 + n2;
        }
    }
    else if(operation === "subtract"){
        return function subtracter(n1, n2){
            return n1 - n2;
        }
    }
    else if(operation === "multiply"){
        return function multiplier(n1, n2){
            return n1 * n2;
        }
    }
    else if(operation === "divide"){
        return function divider(n1,n2){
            return n1/n2;
        }
    }

};

var adder = operationMaker("add");
var subtracter = operationMaker("subtract");
var multiplier = operationMaker("multiply");
var divider = operationMaker("divide");

var resultAdd = adder (8,8);
var resultSubt = subtracter(9, 8);
var resultMult = multiplier(5, 5);
var resultDiv = divider(6, 2);

console.log (resultAdd);
console.log (resultSubt);
console.log (resultMult);
console.log (resultDiv);