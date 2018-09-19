var express = require("express");

var router = express.Router();

var db = require('../models');


module.exports = function (app) {
    // Create all our routes and set up logic within those routes where required.
    app.get("/", function (req, res) {
        res.redirect('/burgers');
    });

    app.get("/burgers", function (req, res) {
        db.burger.findAll({}).then(function (data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);

            res.render("index", hbsObject);
        });
    });

    app.post("/burgers/create", function (req, res) {

        console.log(req.body);
        db.burger.create({
            burger_name: req.body.ca, 0
        
            }).then(function (result) {
                // Send back the ID of the new quote
                // console.log(
                //     id: result.insertId)
                res.redirect('/burgers')
                // console.log(req.body.burger_name, req.body.devoured);
            });
    });

    app.put("/burgers/update/:id", function (req, res) {

        db.burger.update({
            devoured: 1

        },
            {
                where: {
                    id: req.params.id
                }
            }
        }).then(function () {
            res.redirect("/");
        });
});

app.delete("/burgers/delete/:id", function (req, res) {
    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        res.redirect("/");
    });
});



};

    // router.delete("/api/burger/:id", function (req, res) {
    //     var condition = "id = " + req.params.id;

    //     burger.delete(condition, function (result) {
    //         if (result.affectedRows == 0) {
    //             // If no rows were changed, then the ID must not exist, so 404
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         }
    //     });
    // });

    // Export routes for server.js to use.

