const User = require('../models/user-model');

createUser = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        });
    }

    const user = new User(body);

    if (!user) {
        return res.status(400).json({ success: false, error: err });
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'User created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User created!',
            });
        });
}

getUserById = async(req, res) => {
    await User.findOne({ id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` });
        }
        return res.status(200).json({ success: true, data: user });
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUserById
}