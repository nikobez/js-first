import {Router} from 'express'
import {getAll,postFile} from '../controllers/servers.js'

const router = Router()

// router.get ('/api/server',(req,res) => {
//     res.json({test: 42})
// })

router.get ('/api/server', getAll)
router.post('/api/upload2/', postFile)

export default router