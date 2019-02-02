const express = require('express');
const path = require('path');
let app = express();
const port = process.env.PORT || 8080 ;
app.use(express.static("dist"));

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(port, ()=>{
 console.log("node app is running on", port);
});