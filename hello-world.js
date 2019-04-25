const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const https = require('https');

var index = express();

const port = 8080;

//adding middleware
index.use(cors());


//defining default routes
index.use('/',(req,res)=>{
    res.send({
        responseCode: '0000',
        responseMessage: 'Success',
        responseDescription:'Test Page, Application Boot successful!!'
    });
})

//start the app on importing
index.listen(port,()=>{
  console.log('Port started successfully on : '+port);
})
