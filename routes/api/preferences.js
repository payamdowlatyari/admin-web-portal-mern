const router = require('express').Router();
let Preference = require('../../models/preference.model');

router.route('/').get((req, res) => {
    Preference.find()
        .then(preferences => res.json(preferences))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const optimization = req.body.optimization;
    const percentage = Number(req.body.percentage);

    const newPreference = new Preference({ optimization, percentage });

    newPreference.save()
        .then(() => res.json('Preference added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;