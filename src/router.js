const { response } = require('express');
var express = require('express');
const Todo = require('./data');
var router = express.Router();
var jsonParser = express.json()

router.get('/list', (req, res) => {
    Todo.all((err, todos) => res.status(200).json(todos));

})

router.post('/add', jsonParser, (req, res) => {
    Todo.add(req.body.item);
    res.json({
        message: `Success`
    })
})

router.post('/update', jsonParser, (req, res) => {
    Todo.update(req.body.id, req.body.item, (err, data) => {
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
    Todo.delete(req.body.id, (err) => {
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