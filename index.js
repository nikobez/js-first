import express from 'express'
import path from 'path'
//import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/servers.js'
import multer from 'multer'

var upload = multer({ dest: './data/' })

const PORT = 3333
const application = express()
const __dirname = path.resolve()

application.set('view engine',"ejs")
application.set('views', path.resolve(__dirname,'templates'))

//application.use(express.static(path.resolve(__dirname,'static')))
//application.use(requestTime)
//application.use(logger)

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'static'))
// })

application.use(serverRoutes)

application.post('/api/upload', upload.single('userfile'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
   res.status(200)
   res.json({ok: 1})
});

application.get('/', (req, res) => {
    res.render('index', {title: 'Main page', active: 'main', servport: PORT})
})

application.get('/upload', (req, res) => {
    res.render('upload', {title: 'Upload page', active: 'upload', servport: PORT})
})

application.listen(PORT, () => {
    console.log(`Express server started on port ${PORT} ...`)
})