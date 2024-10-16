const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const {v4 : uuidv4} = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));
app.use(express.static(path.join(__dirname, "/public/assets")));
app.use(express.urlencoded({extended : true}));

let posts = [];

app.listen(port, () => {
    console.log(`Listening to port : ${port}`);
});

app.get('/', (req, res) => {
    res.render("home.ejs", {posts});
});

app.post('/', (req, res) => {
    let content = req.body.content;
    let id = uuidv4();
    let newPost = {id, content};
    posts.push(newPost);
    res.redirect("/");
})