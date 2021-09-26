var express = require('express');
var app = express();
var PORT = 8000;
var list = require('./api/list');

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
app.use("/api", list);
