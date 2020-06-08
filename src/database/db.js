//Import SQLite3 dependency
const sqlite3 = require("sqlite3").verbose();

//start database object
const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {
    //create table

    /* db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

    //insert data on table
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
        "https://images.unsplash.com/photo-1480359014333-3935abd88252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, Lâmpadas"
    ];

    function afterInsertData(err){
        if(err){
            return console.log(err);
        }

        console.log("Cadastrado com sucesso\n" + this);
        }

    db.run(query, values, afterInsertData); */

    // //Return data from the tables

    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log("Aqui estão seus registros\n");
    //     console.log(rows);
    // })

    // //Delete data inserted on a table
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso");
    // });
});

module.exports = db;