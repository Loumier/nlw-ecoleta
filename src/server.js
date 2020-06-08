const express = require("express");
const server = express();

const db = require("./database/db.js");

//setup public folder
server.use(express.static("public"));
server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Ecoleta"});
});

server.get("/create-point", (req, res) => {
    console.log(req.query);

    return res.render("create-point.html", {saved: true});
});

server.post("/savepoint", (req, res) => {
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items 
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?
    );`;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];
 
    console.log(req.body);

    function afterInsertData(err){
        if(err){
            return console.log(err);
        }

        console.log("Cadastrado com sucesso\n" + this);

        return res.render("create-point.html", {saved: true});
        }

    db.run(query, values, afterInsertData);

    return res.send("ok");
})

server.get("/search", (req, res) => {

    const search = req.query.search;

    if(search == ""){
        return res.render("search-results.html", {total: 0});
    }

    db.all(`SELECT * FROM places WHERE city LIKE "${search}"`, function(err, rows){
        if(err){
            return console.log(err);
        }

        console.log("Aqui estão seus registros\n");
        console.log(rows);
        return res.render("search-results.html", {places: rows, foundObjects: rows.length});
    })    
});

server.listen(3050);