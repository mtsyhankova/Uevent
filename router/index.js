const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const companyController = require('../controllers/company-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const bodyParser = require('body-parser')
const multer = require('multer');
const companyModel = require('../models/company-model');
const router = new Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    }, 
    filename: function(req, file, cb){
        cb(null, file.originalname)
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
router.post('/uploadImg', uploadOptions.any('file'), userController.uploadImg)
router.post('/createCo', uploadOptions.any('file'), companyController.createCompany)
router.post('/removeCo', companyController.deleteCompany)
router.post('editCo', uploadOptions.any('file'),companyController.editCompany)
router.get('/getCo', companyController.getCompany)
// router.get('/getMembers', authMiddleware,userController.getUsers)

module.exports = router