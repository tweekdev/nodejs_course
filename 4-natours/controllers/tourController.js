const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

// Check if ID is valid
exports.checkID = (req, res, next, val) => {
  if (val * 1 > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }
  next();
};

// Check if post tour body is valid
exports.checkTourBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Please provide a name for the tour',
    });
  }
  if (!price) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Please provide a price for the tour',
    });
  }
  next();
};

// Get all tours
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

// Get single tour
exports.getSingleTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

// Insert new tour
exports.insertTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// Edit tour
exports.editTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour...',
    },
  });
};

// Delete tour
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
