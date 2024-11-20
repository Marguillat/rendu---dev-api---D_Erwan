class Court {
    constructor( name, available = true){

        this.id = Court.incrementId()
        this.name = name
        this.available = available
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
        else this.latestId++
        return this.latestId
    }
}

class User{
    constructor(pseudo, mdp = '', isAdmin = false){
        this.id = User.incrementId()
        this.pseudo = pseudo
        this.mdp = mdp
        this.isAdmin = isAdmin
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
        else this.latestId++
        return this.latestId
    }
}

class Reservation {
    constructor(id_user, id_court,day_reservation, time_reservation){
        this.id = User.incrementId()
        this.id_user = id_user
        this.id_court = id_court
        this.day_reservation = day_reservation
        this.time_reservation = time_reservation
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
        else this.latestId++
        return this.latestId
    }
}

let courts = [
    new Court("A",true),
    new Court("B",true),
    new Court("C",false),
    new Court("D"),
]

let users = [
    new User('pipi'),
    new User('ppoupou'),
    new User('admybad','admybad',true),
]

// let reservations = [
//     new Reservation(1,1,),

// ]

console.log(courts,users)
