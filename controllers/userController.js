// OK
const db = require("../models");

module.exports = {
    getUserName: function (req, res) {
        console.log(req.params.user)
        db.User
        .findOne({userName: req.params.user})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            // console.log(`getUserName query: ${JSON.parse(query)}`)

    },
    // saveNote: (req, res) => {
    //     console.log(`findAndUpdate Query: ${req.body}`)
    //     db.Users
    //     .findOneAndUpdate({userName: req.params.user}, {$set: {notes: req.body.notes}}, {new: true})
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
}