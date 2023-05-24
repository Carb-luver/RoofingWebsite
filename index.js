

function sum(limit){
    let count = 0;
    for(let i=0; i<=limit; i++){
        if(i%3===0 || i%5===0){
            count = count + i;
        }
    }
    return count;
}

var thanx = "Thank you for your input";
alert(thanx);

var originalNum = 56;
var numToBeAdded = 45; 
var newNum = originalNum + numToBeAdded;

var question = "What's your name?";
var answer = "Megan";
prompt(question, answer);

var pets = [];
pets[2] = "dog";
pets[5] = "cat";
pets[6] = "giraffe";

//deletes last element from the array and assigns it to variable pets6
var pets6 = pets.pop.toUpperCase;
pets.shift();
pets.unshift("fish", "kangaroo");
pets.splice(2,0,"duck");

var pets6LowerCase = pets6.toLowerCase();

var babySnuggles = "All i want to do is give this little baby snuggles a kiss.  He makes the sun shine and the moon glow.  The world would have no beauty without his sweet fluffiness.  He is so majestic; it puts nobles and wise men to shame."
var snuggleIndex = babySnuggles.indexOf("his");
var snuggleLastIndex = babySnuggles.lastIndexOf("his");

while (babySnuggles.indexOf("his")){
    var snuggleIndex = babySnuggles.indexOf(" his ");
    babySnuggles = babySnuggles.slice(0, snuggleIndex) + "baby snuggles'" + babySnuggles.slice(snuggleIndex+4);
}

var now = new Date();
var theDay = now.getDay;
var theTime = now.getTime;

