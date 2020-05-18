const router = require('express').Router();
let UserType = require('../../models/userType.model');

router.route('/').get((req, res) => {
    UserType.find()
        .then(userTypes => res.json(userTypes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const usertype = req.body.usertype;
    const quantity = Number(req.body.quantity);

    const newUserType = new UserType({
        usertype,
        quantity
    });

    newUserType.save()
        .then(() => res.json('UserType added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    UserType.findById(req.params.id)
        .then(userType => res.json(userType))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    UserType.findByIdAndDelete(req.params.id)
        .then(() => res.json('UserType deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    UserType.findById(req.params.id)
        .then(usertype => {
            usertype.usertype = req.body.usertype;
            usertype.quantity = Number(req.body.quantity);
            usertype.save()
                .then(() => res.json('UserType updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;