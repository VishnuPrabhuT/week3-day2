for (let i = 0; i < 10; i++) {
    console.log(i);
}

var entity = "Monster";
var life = 10;
while (life != 0) {
    console.log(`Keep ${entity} on screen`);
    life--;
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

entity = "Monster";
life = 10;
do {
    console.log(`Keep ${entity} on screen`);
    life--;
} while (life != 0);

entity = "Monster";
life = 10;
do {
    console.log(`Keep ${entity} on screen`);
    life--;
} while (life > 10);

var fruits = ["apples", "oranges", "pears"];

fruits.push("grapes");

fruits;

fruits.pop();

fruits;

fruits.shift();

fruits;

fruits.unshift("apples");

fruits;

fruits.splice(1, 0, "grapes", "kiwi");

fruits;

var favFruits = fruits.slice(2);

favFruits;

fruits.sort();

fruits.reverse();

var beenThereList = ["new York City", "London", "Rome"];
var bucketList = ["Shanghai", "Santiago"];
var myList = beenThereList.concat(bucketList);
myList;


alert("This is alert box");

confirm("Do you want to save changes?");

prompt("Enter preferred loan period in years", "15");

