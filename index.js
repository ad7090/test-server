let express = require("express");
let app = express();

const server = require("http").createServer(app);



/////////////////////////////////////////////////////////////////////
server.listen(5000, () => console.log("connect To port:" + 5000));
//*****************************************************************
     