import express from 'express'

const PORT = 3333
const application = express()

application.get('/', (wreq,wres) => {
    wres.send('<h1>Express server</h1>')

})

application.listen(PORT, () => {
    console.log(`Express server started on port ${PORT} ...`)
})