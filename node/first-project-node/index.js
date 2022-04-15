const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

// listening to the port
app.listen(port, () => {
    console.log('✔️ Server started.');
});

// routes

app.get('/', (req, res) => {
    console.log(req);
    console.log(req.query);

    // verify if query object is empty. if yes, i'll show a visual result, if no, i'll show a .json result.
    if (Object.keys(req.query).length !== 0) {
        // ?name=NightRaid&members=10

        // const name = req.query.name;
        // const members = req.query.members;
        const { name, members } = req.query; // Destructuring Assignment

        console.log(name, members);
        return res.json({ name, members }); // = {name: name, members: members}
    } else {
        return res.send('<img style="display:block; margin:auto; max-width:1350px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="nightraid image" /> <p style="text-align: center">Name: NightRaid, Members: 10.</p>');
    }
});

app.get('/akame', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        // ?name=Akame&age=16

        const { name, age } = req.query;
        return res.json({ name, age });
    } else {
        return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="akame image" /> <p style="text-align: center">Name: Akame, Age: 16s.</p>');
    }
});

app.get('/leone', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://vignette.wikia.nocookie.net/cardfight/images/0/0e/Leone.Anime.png/revision/latest?cb=20150409042208" alt="leone image" /> <p style="text-align: center">Name: Leone, Age: 20s.</p>');
});

app.get('/sheele', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://animemotivation.com/wp-content/uploads/2017/07/Sheele-clumsy.png" alt="leone image" /> <p style="text-align: center">Name: Sheele, Age: 20s.</p>');
});

app.get('/mine', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/e8/6f/b3/e86fb346115bc28bcbd296d9f8acc81d.jpg" alt="leone image" /> <p style="text-align: center">Name: Mine, Age: 16s.</p>');
});

app.get('/najenda', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/ed/81/71/ed8171b0d25285f450231ccf0d95daf1.jpg" alt="leone image" /> <p style="text-align: center">Name: Najenda, Age: 20s.</p>');
});

app.get('/chelsea', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95740abd-84e1-40f6-9ea9-9a73ce727d1a/ddcet05-c7d85b7c-139d-4845-bf4d-9e02051780bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1NzQwYWJkLTg0ZTEtNDBmNi05ZWE5LTlhNzNjZTcyN2QxYVwvZGRjZXQwNS1jN2Q4NWI3Yy0xMzlkLTQ4NDUtYmY0ZC05ZTAyMDUxNzgwYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bw299DnBG8l8STg1AWijOwcvRBIgQloDLDxznV80fos" alt="leone image" /> <p style="text-align: center">Name: Chelsea, Age: 20s.</p>');
});

app.get('/tatsumi', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/aa/b4/7a/aab47ae6e05321e72bd358bd9ec935cd.jpg" alt="leone image" /> <p style="text-align: center">Name: Tatsumi, Age: 17s.</p>');
});

app.get('/lubbock', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://assets.mycast.io/characters/lubbock-3593298-normal.jpg?1631121416" alt="leone image" /> <p style="text-align: center">Name: Lubbock, Age: 19.</p>');
});

app.get('/bulat', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/ad/0b/38/ad0b3853d06826b16a9f02717bd8cbc0.jpg" alt="leone image" /> <p style="text-align: center">Name: Bulat, Age: 20s.</p>');
});

app.get('/susanoo', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://assets.mycast.io/actor_images/actor-susanoo-akame-ga-kill-304043_large.jpg?1637123241" alt="leone image" /> <p style="text-align: center">Name: Susanoo, Age: Approx. 1000s.</p>');
});
