const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.use(express.static('public'))



const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    const persona = {
        name: "bismarck",
        surname: "meneses",
    };
    res.render('home', { persona })
});

app.get('/list', function (req, res) {
    const fruitslist = [
        {
            name: "laranja",
            price: 0.50
        },
        {
            name: "manga",
            price: 0.45
        },
        {
            name: "limão",
            price: 0.30
        }];
    res.render('list', { fruitslist })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))