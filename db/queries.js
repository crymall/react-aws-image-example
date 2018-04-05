var pgp = require('pg-promise')({});
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then((data) => {
      res.status(200)
         .json({
           data: data
           message: 'You did it!'
         })
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getAllUsers
}
