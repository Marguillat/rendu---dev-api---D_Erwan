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
  
  console.log(currentInspector);
  

  if (currentInspector === undefined){
    return false
  }

  return true
}

router.post('/', (req,res,next)=>{
  const data = req.body
  let message = "Vous n'êtes pas l'inspecteur ?!"

  console.log(data);
  

  if(auth(data.firstname,data.lastname)){
    res.status(200)
      .json({
        "_links":{
          "_self": hal.halLinkObject('/identification')
        },
        "jwt": createJWT(data.lastname)
      })
  }else{
    res.status(401)
      .json({"msg":message})
  }
})

module.exports = router