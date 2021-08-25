const express = require('express');
const PORT = 3002;
const app = express();
app.get('/', (req,res)=>{
    res.send('The app is running')
})

app.listen(PORT, ()=> {
    console.log(`the app is listen on port ${PORT}`);
});