
function warriorCreator(name, gender){ 
        this.name = name;
        this.gender = gender;
        this.level = 1;
        this.weapon = "wooden sword";
        this.power = Math.random()* 100;
        this.fight = function(){
            console.log('he runs with a' +this.weapon)
    };
        this.faceoff = function(opponent){
            if(this.power < opponent.power){
                console.log(this.name+ " has defeated " + opponent.name);
            }
            else{
                console.log(this.name+ " has been defeated by " + opponent.name)
            }
        };
}

var character1 = new warriorCreator("allan", "M");
var character2 = new warriorCreator("steve", "M" );


console.log(character1.faceoff(character2));