const express = require('express')
const mysql = require('mysql')
const randomName = require('node-random-name')

const port = 3000

const app = express()

const config = {
    host: "db",
    user: "root",
    password: "password",
    database: "fullcycle"
}

const connection = mysql.createConnection(config)

app.get('/', ( req, res ) => {
    const name = randomName()
    connection.query(`INSERT INTO people(name) VALUES('${name}')`, ( err, results ) => {
    if(err) throw err;
   })

   connection.query('SELECT * FROM people', ( err, results) => {
    if(err) throw err
    res.send(`<h1> Full Cycle Rocks! </h1> ${results.map(row => row.name).join('<br>')}`)
   })
    
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})