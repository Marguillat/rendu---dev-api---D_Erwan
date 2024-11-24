const express = require('express')
const router = express.Router()
const hal = require('../utils/hal')
const {jail,suspects} = require('../../database')
const {checkTokenMiddleware} = require('../utils/jwt')

let jailmsg = "il n'y a personne ici pour l'instant"

router
  .get('/',checkTokenMiddleware,(req,res,next)=>{
    res.json({
      "_links":{
        "self":hal.halLinkObject('/jail'),
        "home":hal.halLinkObject('/'),
        "suspects":hal.halLinkObject('/suspects'),
        "crime-scene": hal.halLinkObject('/bedroom'),
      },
      "jail":(jail.length != 0 ? jail : jailmsg)
    })
  })

  .post('/',checkTokenMiddleware,(req,res,next)=>{
    let idSuspect = req.body.idSuspect
    let suspectInDetention = suspects.find((suspect)=>(suspect.id == idSuspect))
    
    if(req.body.idSuspect !== undefined && suspectInDetention !== undefined){
      if (!jail.some((prisonner) => (prisonner.id == suspectInDetention.id))){ //empèche d'envoyer deux fois la meme personne en prison
        jail.push(suspectInDetention)
      }
      res.json({
        "_links":{
          "self":hal.halLinkObject('/jail'),
          "home":hal.halLinkObject('/'),
          "suspects":hal.halLinkObject('/suspects'),
          "crime-scene": hal.halLinkObject('/bedroom'),
        },
        msg:`Inspecteur, vous venez de mettre ${suspectInDetention.firstname} ${suspectInDetention.lastname} en détention, êtes vous sur de vous ?`,
        "jail":(jail.length != 0 ? jail : jailmsg)
      })
    }else{
    res
      .status(406)
      .json({
        msg:"Le suspect envoyé n'existe pas !"
      })

    }
    
  })

  .delete('/',checkTokenMiddleware,(req,res,next)=>{
    let idSuspect = req.body.idSuspect
    let suspectInDetention = suspects.find((suspect)=>(suspect.id == idSuspect))
    
    if(jail.length !== 0){
      jail.splice(
        jail.findIndex((prisonner)=>prisonner.id == idSuspect),//index à supprimer
        1 //nombre d'élément à supprimer
      )
      res.json({
        "_links":{
          "self":hal.halLinkObject('/jail'),
          "home":hal.halLinkObject('/'),
          "suspects":hal.halLinkObject('/suspects'),
          "crime-scene": hal.halLinkObject('/bedroom'),
        },
        msg:`Inspecteur, vous venez d'enlever ${suspectInDetention.firstname} ${suspectInDetention.lastname} de détention, êtes vous sur de vous ?`,
        "jail":(jail.length != 0 ? jail : jailmsg)
      })
    }else{
      res
        .send("le centre de détention est déjà vide")
        .status(406)
    }
  })

module.exports = router