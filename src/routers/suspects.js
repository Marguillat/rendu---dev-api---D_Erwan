const express = require('express')
const router = express.Router()
const hal = require('../utils/hal')
const {suspects} = require('../../database')

router
  .get('/',(req,res,next)=>{
    res.json({
      "_links":{
        "self":hal.halLinkObject('/suspects'),
        "home":hal.halLinkObject('/'),
        "crime-scene": hal.halLinkObject('/bedroom'),
        "identification":{...hal.halLinkObject('/identification'),"method":["POST"]},
        "jail":{...hal.halLinkObject('/jail'),"method":["POST","DELETE"]},
      },
      "_embeded":suspects
    })
  })

module.exports = router