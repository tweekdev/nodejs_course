const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.insertUser);

router
  .route('/:id')
  .get(userController.getSingleUser)
  .patch(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;
