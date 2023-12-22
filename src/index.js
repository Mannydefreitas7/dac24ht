const express = require('express')
const {create} = require("express-handlebars");
//Loads the handlebars module
const handlebars = require('express-handlebars');
const app = express()
const hbs = create({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'

});
const port = 8000


//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
app.set('views', '../src/views')
app.use(express.static('../src/public'))
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', hbs.engine);

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout: 'index'});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})