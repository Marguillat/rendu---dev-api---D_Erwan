const express = require('express')
const app = express()
const port = 3000
const identificationRouter = require('./routers/identification')
const homeRouter = require('./routers/homeRouter')

app.use(express.json())
app.use(express.urlencoded({extended:false})) // permet de passer des data en post

// Routes

app.use('/',homeRouter)
app.use('/identification',identificationRouter)


app.listen(port, () => {
  console.log(`App started listening on port ${port}`)
})