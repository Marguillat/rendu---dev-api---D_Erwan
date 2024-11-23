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

let inspectors = [
  new Inspector("Johnny","English"),
  new Inspector("Johnn","Englis"),
]

module.exports = {inspectors}