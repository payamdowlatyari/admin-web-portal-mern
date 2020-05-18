const router = require('express').Router();
let Username = require('../../models/user.model');

router.route('/').get((req, res) => {
  Username.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUsername = new Username({ username });

  newUsername.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;