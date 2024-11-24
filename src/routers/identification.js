const express = require("express")
const router = express.Router()
const hal = require("../utils/hal")
const bcrypt = require("bcrypt")
const db = require('../../database')
const { createJWT } = require("../utils/jwt")


function auth(firstname,lastname){
  let currentInspector = db.inspectors.find((inspector)=>(
    inspector.firstname == firstname && inspector.lastname == lastname
  ))
  
  if (currentInspector === undefined){
    return false
  }
  return true
}

router.post('/', (req,res,next)=>{
  const data = req.body
  let message = "Vous n'êtes pas l'inspecteur ?!" 

  if(auth(data.firstname,data.lastname)){
    res.status(200)
      .json({
        "_links":{
          "self": hal.halLinkObject('/identification'),
          "crime-scene": hal.halLinkObject('/bedroom'),
        },
        "jwt": createJWT(data.lastname),
        "msg": "Utilisez cette Autorization JWT afin d'accéder à la scene de crime"
      })
  }else{
    res.status(401)
      .json({"msg":message})
  }
})

module.exports = router