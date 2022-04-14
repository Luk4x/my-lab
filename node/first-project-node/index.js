const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('✔️ Server started.');
});

app.get('/', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:1350px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="nightraid image" />');
});

app.get('/akame', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="akame image" />');
});

app.get('/leone', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://static.wikia.nocookie.net/akamegakill/images/a/af/Leonemainpage.png/revision/latest?cb=20170504192046" alt="leone image" />');
});

app.get('/sheele', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://static.wikia.nocookie.net/animevice/images/0/00/Sheele_main_image.png/revision/latest?cb=20150831111813" alt="leone image" />');
});

app.get('/mine', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://static.wikia.nocookie.net/akamegakill/images/0/0d/Mine_main.png/revision/latest?cb=20140824212219" alt="leone image" />');
});

app.get('/najenda', (req, res) => {
    return res.send('<img style="display:block; margin:auto; width:750px;" src="https://static.wikia.nocookie.net/akamegakill/images/8/87/Najenda_main.png/revision/latest?cb=20140824213745" alt="leone image" />');
});
