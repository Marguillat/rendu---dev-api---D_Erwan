const express = require('express')
const router = express.Router()
const hal = require('../utils/hal')
const {checkTokenMiddleware} = require('../utils/jwt')
const {evidences} = require('../../database')

router
  .get('/',checkTokenMiddleware,(req,res,next)=>{
    res.json({
      "_links":{
        "_self":hal.halLinkObject('/bedroom'),
        "evidences":hal.halLinkObject('/bedroom/evidences')
      },
      "msg":[
        "Vous entrez dans la chambre où s'est produit le meurtre",
        "Au sol, une énorme tache de sang s'écoulant du corps sans vie de l'homme de ménage",
        "🩸🩸😵",
        "Les preuves présentent dans la pièce ont déjà été récupérées par l'équipe scientifique",
        "Vous pouvez y accéder via /bedroom/evidences"
      ]
    })
  })

  .get('/evidences',checkTokenMiddleware,(req,res,next)=>{
    let evidencesData = evidences.map((elem)=>{
      return {
        "_links":{
          "self":hal.halLinkObject(`/bedroom/evidences/${elem.object}`)
        },
        "object_name":elem.object
      }
    })

    res.json({
      "_links":{
        "_self":hal.halLinkObject('/bedroom/evidences'),
        "bedroom":hal.halLinkObject('/bedroom'),
        "evidences-description": hal.halLinkObject('/bedroom/evidences/{object_name}')
      },
      "_embeded":{
        "evidences":evidencesData
      },
      "msg":"Pour inspecter les preuves suivez le lien 'evidences-description' ",
    })
  })

module.exports = router