const router = require('express').Router();
const Profile = require('../../models/profile.model');

router.route('/').get((req, res) => {
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const username = req.body.username;
  const make = req.body.make;
  const model = req.body.model;
  const cost = Number(req.body.cost);
  const society = Number(req.body.society);
  const environment = Number(req.body.environment);
  const location = Number(req.body.location);
  const provider = req.body.provider;
  const start = Date.parse(req.body.start);
  const end = Date.parse(req.body.end);

  const newProfile = new Profile({
    username,
    make,
    model,
    cost,
    society,
    environment,
    location,
    provider,
    start,
    end
  });

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json('Profile deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.username = req.body.username;
      profile.make = req.body.make;
      profile.model = req.body.model;
      profile.cost = Number(req.body.cost);
      profile.society = Number(req.body.society);
      profile.environment = Number(req.body.environment);
      profile.location = Number(req.body.location);
      profile.provider = req.body.provider;
      profile.start = Date.parse(req.body.start);
      profile.end = Date.parse(req.body.end)
      profile.save()
        .then(() => res.json('Profile updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;