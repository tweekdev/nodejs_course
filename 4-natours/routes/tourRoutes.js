const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkTourBody, tourController.insertTour);

router
  .route('/:id')
  .get(tourController.getSingleTour)
  .patch(tourController.editTour)
  .delete(tourController.deleteTour);

module.exports = router;
