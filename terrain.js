function tileCreator(x,y){
    this.x = x;
    this.y = y;
    this.height = Math.random()*3;
    var types = [ 'Grass','rocks','water'];
    this.type = types[Math.floor(Math.random()*types.length)];
    var conditions = [ 'burning','normal','frozen'];
    this.condition = conditions[Math.floor(Math.random()*conditions.length)];
    this.freeze = function(){
       if(this.condition === "burning"){
          this.condition = "normal";
          return this.condition;
       }
       else if(this.condition === "normal"){
           this.condition = "frozen";
           return this.condition;
       }
       else{
          return this.height + 1;
    }
   }
   this.burn = function(){
       if(this.condition === "normal"){
          this.condition = "burning";
          return this.condition;
       }
       else if(this.condition === "frozen"){
           this.condition = "normal";
           return this.condition;
       }
       else{
          return this.height - 1;
    }
   }
};
   

var tile1 = new tileCreator("a", "b");


console.log(tile1);
console.log(tile1.freeze());

