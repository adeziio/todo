const express = require('express');
const Data = require('./data');
const router = express.Router();
const jsonParser = express.json();

// GET
router.get('/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    Data.all((err, todos) => {
        res.status(200).json(todos)
    });
})

router.get('/add', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.query.item) {
        Data.add(req.query.item);
        res.json({
            status: "Success"
        })
    }
    else {
        res.json({
            status: "Failed",
            message: "Please provide a parameter value for the key item"
        })
    }
})

router.get('/delete', jsonParser, (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.query.id || req.query.item) {
        if (req.query.id) {
            Data.deleteById(req.query.id, (err) => {
                if (err) {
                    res.status(404, "Id not found").send();
                } else {
                    res.json({
                        status: "Success"
                    })
                }
            });
        }
        else if (req.query.item) {
            Data.deleteByItem(req.query.item, (err) => {
                if (err) {
                    res.status(404, "Item not found").send();
                } else {
                    res.json({
                        status: "Success"
                    })
                }
            });
        }
    }
    else {
        res.json({
            status: "Failed",
            message: "Please provide a parameter value for the key id or item"
        })
    }
})

router.get('/update', jsonParser, (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.query.id && req.query.item) {
        Data.update(req.query.id, req.query.item, (err, data) => {
            if (err) {
                res.status(404, "Id or Item not found").send();
            }
            else {
                res.json({
                    status: "Success"
                })
            }
        });
    }
    else {
        res.json({
            status: "Failed",
            message: "Missing values for id or item"
        })
    }
})

// POST
router.post('/add', jsonParser, (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.body.item) {
        Data.add(req.body.item);
        res.json({
            status: "Success"
        });
    }
    else {
        res.json({
            status: "Failed",
            message: "Please provide a parameter value for the key item"
        })
    }
})

router.post('/delete', jsonParser, (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.body.id) {
        Data.deleteById(req.body.id, (err) => {
            if (err) {
                res.status(404, "Id not found").send();
            } else {
                res.json({
                    status: "Success"
                })
            }
        });
    }
    else if (req.body.item) {
        Data.deleteByItem(req.body.item, (err) => {
            if (err) {
                res.status(404, "Item not found").send();
            } else {
                res.json({
                    status: "Success"
                })
            }
        });
    }
    else {
        res.json({
            status: "Failed",
            message: "Please provide a parameter value for the key id or item"
        })
    }
})

router.post('/update', jsonParser, (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.body.id && req.body.item) {
        Data.update(req.body.id, req.body.item, (err, data) => {
            if (err) {
                res.status(404, "Id or Item not found").send();
            }
            else {
                res.json({
                    status: "Success"
                })
            }
        });
    }
    else {
        res.json({
            status: "Failed",
            message: "Missing values for id or item"
        })
    }
})

module.exports = router;