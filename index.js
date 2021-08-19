const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Welcome to Root!');
})

app.listen(port, ()=>{
    console.log(`Final Exam listening at http://localhost:${port}`);
})