const express = require("express")
const router = express.Router()
const hal = require("../utils/hal")

router
  .get('/',(req,res,next)=>{
    res
      .status(200)
      .json({
        "_links":{
          "self" : hal.halLinkObject('/'),
          "crime-scene": hal.halLinkObject('/bedroom'),
          "suspects":hal.halLinkObject('/suspects'),
          "identification":{...hal.halLinkObject('/identification'),"method":["POST"]},
          "jail":{...hal.halLinkObject('/jail'),"method":["POST","DELETE"]},
        },
        "msg":[
          "Bonjour inspecteur, aujourd'hui vous êtes chargé de résoudre un meurtre qui s'est passé au domicile d'une famille du quartier.",
          "Avant de rentrer sur la scene de crime vous devez vous présenter au poste d'identification afin qu'ils vous remettent votre badge 🪪 JWT 🪪 que vous garderez sur vous tout au long de l'enquette",
          "L'ensemble des suspects sont en dehors de la maison donc pas besoin de badge pour les voir.",
          "Quand vous aurez trouvé le coupage, il vous faudra le mettre en détention, là par contre, votre badge JWT est nécessaire."
        ],
        
      })
  })

module.exports = router