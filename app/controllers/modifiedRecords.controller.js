const db = require("../models");
const ModifiedRecord = db.modifiedRecords;
const Op = db.Sequelize.Op;

// Delete a Tutorial with the specified id in the request
exports.create = (req, res) => {

    //Saving the record to retrieve later
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        tutorial_id:req.body.tutorial_id,
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    ModifiedRecord.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

    console.log(req.body);
};

exports.findAll = (req, res) => {
    const tutorial_id = req.params.id;

    ModifiedRecord.findAll({ where: { tutorial_id: tutorial_id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
