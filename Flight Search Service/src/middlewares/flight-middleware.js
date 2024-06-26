const {ClientErrors} = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
  if (

    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: 'missing required fields for creating flight.',
      err: 'Missing required fields'
    })
  }
  next();
}

module.exports = {
  validateCreateFlight
}