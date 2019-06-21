//this script is to be the backbone for the site.


//Components
class Teams {
    constructor(object){
        this.name = object.name;
        this.players = object.players;
    }

    displayName(){
        console.log(this.name);
    }

    displayPlayers(){
        for (var i = 0; i < this.players.length; i++){
            this.players[i] = new Player(this.players[i]);
        }
    }
}

class Player{
    constructor(object){
        this.name = object.name;
        this.number = object.number;
        this.goals = object.goals;
        this.saves = object.saves;
    }

    display(cb){
        console.log(cb);
    }
}

let tigers = {
    name: "USA",
    players: [{name:"Kickerboi", number: 3, goals: 36, saves: 0}, {name:"Goaliboi",number:7,goals:1,saves:80}, {name:"Pointboi", number:12, goals: 79, saves: 3},{ name:"Floppyboi",number:8,goals:0,saves:0}]
}

tigers = new Teams(tigers);
tigers.displayName();
tigers.displayPlayers();
// tigers.players[2].display(tigers.players[2].name);
console.log(tigers.players[3]);