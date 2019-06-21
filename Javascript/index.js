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
            console.log(this.players[i]);
        }
    }
}

let tigers = {
    name: "USA",
    players: ["Kickerboi", "Goaliboi", "Pointboi", "Floppyboi"]
}

tigers = new Teams(tigers);
tigers.displayName();
tigers.displayPlayers();