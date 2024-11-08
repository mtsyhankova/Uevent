const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const bodyParser = require('body-parser')
const multer = require('multer')
const router = new Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.replace(' ', '-'))
    }
})


const uploadOptions = multer({ storage: storage })

router.post('/registration',
    // uploadOptions.single('image'),
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 24 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activation/:link', userController.activation)
router.get('/refresh', userController.refresh)
router.post('/updUser', uploadOptions.any('avatar'), userController.updUser)
// router.get('/getMembers', authMiddleware,userController.getUsers)

module.exports = router