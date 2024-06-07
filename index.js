import express from "express"
import bodyParser from "body-parser"
import path from "path";
import { fileURLToPath } from "url";
const app = express()
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


let blogs = []
app.get("/", (req, res)=>{
    res.render("index.ejs")
})
app.get("/blog", (req, res)=>{
    res.render("blog.ejs", {blogs: blogs});
    
})
app.get("/newblog", (req, res)=>{
    res.render("newBlog.ejs");
})
app.get("/blogSnippet", (req, res)=>{
    res.render("partials/blogSnippet", {blogs: blogs});
})

app.get("/about", (req, res)=>{
    res.render("about.ejs");
})
app.post("/blog", (req, res)=>{
    const data = req.body;
    blogs.push(data);``
    res.render("newBlog.ejs");
})

app.post("/clear", (req, res)=>{
    blogs = [];
    res.render("blog.ejs", {blogs: blogs})
})

app.listen(port, ()=>{
    console.log("Connection established succesfully");
})