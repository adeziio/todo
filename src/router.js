const express = require('express');
const Data = require('./data');
const router = express.Router();
const jsonParser = express.json();

router.get('/list', (req, res) => {
    Data.all((err, todos) => {
        res.status(200).json(todos)
    });
})

router.post('/add', jsonParser, (req, res) => {
    Data.add(req.body.item);
    res.json({
        message: `Success`
    })
})

router.post('/update', jsonParser, (req, res) => {
    Data.update(req.body.id, req.body.item, (err, data) => {
        if (err) {
            res.status(404, "Item not found").send();
        }
        else {
            res.json({
                message: `Success`
            })
        }
    });
})

router.post('/delete', jsonParser, (req, res) => {
    Data.delete(req.body.id, (err) => {
        if (err) {
            res.status(404, "Item not found").send();
        } else {
            res.json({
                message: `Success`
            })
        }
    });
})

module.exports = router;