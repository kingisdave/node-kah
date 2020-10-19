const express = require('express');
const userController = require('../controllers/user.controller');
const updateController = require('../controllers/update.controller');

const app = express();
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/edit', updateController.editUser);

module.exports = router;
