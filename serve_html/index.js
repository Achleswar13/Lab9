const port = 3000,
express = require("express"), 
app =express(),
hc = require("./controllers/hc");

//app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
express.urlencoded({
    extended: false
})
);
app.get('/home', (req,res)=>{
    res.render('home')
});
app.get("/images/:image", hc.reswithimg);

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});