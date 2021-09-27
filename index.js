var express = require('express');
var app = express();
var PORT = 8000;
var router = require('./src/router');

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
app.use("/", router);
