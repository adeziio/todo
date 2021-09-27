var express = require('express');
var router = express.Router();
let todoList = [];
var jsonParser = express.json()

router.get('/list', async (req, res) => {
    try {
        res.json({
            todoList: todoList
        })
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("Server error")
    }
})

router.post('/add', jsonParser, (req, res) => {
    try {
        let item = req.body.todo;
        if (!todoList.includes(item)) {
            todoList.push(req.body.todo);
            res.json({
                message: `Successfully added ${item}`
            })
        }
        else {
            res.json({
                message: `${item} already exists`
            })
        }
    }
    catch (error) {
        return res.status(500).send("Server error")
    }
})

router.post('/remove', jsonParser, (req, res) => {
    try {
        let item = req.body.todo;
        if (todoList.includes(item)) {
            todoList = todoList.filter(todo => todo !== item)
            res.json({
                message: `Successfully removed ${item}`
            })
        }
        else {
            res.json({
                message: `${item} does not exists`
            })
        }
    }
    catch (error) {
        return res.status(500).send("Server error")
    }
})

module.exports = router;