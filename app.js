
const express = require('express');

const app = express();
app.use('/', (req, res, next)=> {
    console.log('this always runs');
    next();
});
app.use('/add-product', (req, res, next)=> {
    console.log('in the next midleware')
    res.send('<h1>The "Add product" page</h1>');
});
app.use('/', (req, res, next)=> {
    console.log('in the next midleware')
    res.send('<h1>Hello From Express</h1>');
});

app.listen(3000);
