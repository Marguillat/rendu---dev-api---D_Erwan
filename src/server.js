const express = require('express')
const app = express()
const port = 3000

//routers
const identificationRouter = require('./routers/identification')
const homeRouter = require('./routers/homeRouter')
const bedroomRouter = require('./routers/bedroom')

app.use(express.json())
app.use(express.urlencoded({extended:false})) // permet de passer des data en post

// Routes

app.use('/',homeRouter)
app.use('/identification',identificationRouter)
app.use('/bedroom',bedroomRouter)


app.listen(port, () => {
  console.log(`App started listening on port ${port}`)
})