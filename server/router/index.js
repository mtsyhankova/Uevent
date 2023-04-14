const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 24 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activation/:link', userController.activation)
router.get('/refresh', userController.refresh)
router.post('/updUser', userController.updUser)

// router.get('/getMembers', authMiddleware,userController.getUsers)

module.exports = router