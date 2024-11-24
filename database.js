class Inspector {
  constructor(firstname,lastname){

    this.id = Inspector.incrementId()
    this.firstname = firstname
    this.lastname = lastname
  }

  static incrementId() {
      if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
      else this.latestId++
      return this.latestId
  }
}

class Suspect {
  constructor(firstname,lastname,role,evidence){

    this.id = Suspect.incrementId()
    this.firstname = firstname
    this.lastname = lastname
    this.role = role
    this.evidence = evidence
  }

  static incrementId() {
      if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
      else this.latestId++
      return this.latestId
  }
}

class Evidence {
  constructor(object, description) {
    this.id = Evidence.incrementId(); 
    this.object = object; 
    this.description = description; 
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1 // Si un ID est existe déjà sur la Class
    else this.latestId++
    return this.latestId
}
}

//tables///////////////////////////////////////////////////
const inspectors = [
  new Inspector("Johnny","English"),
]

const suspects = [
  new Suspect("Jean", "Dupont", "Père", "Il est le premier à avoir trouvé le corps. C'est un boucher."),
  new Suspect("Marie", "Dupont", "Mère", "Coach sportif. A l'index gauche tout rouge, du sang peut être ?"),
  new Suspect("Sophie", "Dupont", "Fille", "11 ans, ne comprends pas trop toute cette agitation"),
  new Suspect("Émile", "Dupont", "Oncle", "Il pense avoir entendu, deux voix se disputer au moment des faits"),
];

const evidences = [
  new Evidence('couteau','Couteau de cuisine ensenglanté avec une grosse empreinte de doigt sur la lamme'),
  new Evidence('morceau de plastique','un morceau de plastique de forme connique, il pourrait ressembler à un talon cassé'),
  new Evidence('drap','un Drap taché de sang retrouvé sur le sol, certainement tombé lors de la chute du jardinier')
]

const jail = []


module.exports = {inspectors,suspects,evidences,jail}