const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const bodyParser = require('body-parser')
const multer = require('multer')
const router = new Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    }, 
    filename: function(req, file, cb){
        const fileName = file.originalname.replace(' ','-')
        cb(null, fileName+'-'+Date.now)
    }
})

const uploadOptions = multer({storage: storage})

router.post('/registration',
    uploadOptions.single('image'),
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 24 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activation/:link', userController.activation)
router.get('/refresh', userController.refresh)
router.post('/updUser', userController.updUser)
router.post('/uploadImg', userController.uploadImg)
// router.get('/getMembers', authMiddleware,userController.getUsers)

module.exports = router