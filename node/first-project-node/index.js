const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:1350px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="nightraid image" />');
});

app.get('/akame', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="akame image" />');
});
