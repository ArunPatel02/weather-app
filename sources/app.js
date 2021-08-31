const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicpath =  path.join(__dirname , '../public'); // static express path of directory

app.use(express.urlencoded())

//using handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname , '../templates/views'));
hbs.registerPartials(path.join(__dirname , '../templates/partials'))

app.use(express.static(publicpath)) // using  static path for serving all the file in public folder

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/about", (req, res)=>{
    // res.send("i am your about page");
    res.render('about');
})

app.get("/weather", (req, res)=>{
    // res.send("i am your weather page");o
    res.render('weather');
})

app.get("/login", (req, res)=>{
    // res.send("i am your weather page");
    res.render('login');
})

app.post("/login", (req, res)=>{
    console.log(req.body.name);

    res.render("index")
})

app.get("*", (req, res)=>{
    // res.send("404 page does not found");
    res.render('errorpage');
})


app.listen(port , ()=>{
    console.log(`app is listing at http://localhost:${port}`);
})