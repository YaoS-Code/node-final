const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Welcome to Root!');
})

app.get('/aboutMe', function(req, res) {   
    console.log("about Me request");
    res.send('Welcome to About Me!');
 })

app.listen(port, ()=>{
    console.log(`Final Exam listening at http://localhost:${port}`);
})



