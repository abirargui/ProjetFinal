const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 3000


const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
  });
  
  connection.connect();
  
  app.use(bodyParser.json());
  app.post('/inscription', (req, res) => {
    const { nom, prenom, email, datenais, telephone, datedemboche, role, motdepasse } = req.body;
    const query = 'INSERT INTO users (nom, prenom, email, datenais, telephone, datedemboche, role, motdepasse) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [nom, prenom, email, datenais, telephone, datedemboche, role, motdepasse], (error, results, fields) => {
      if (error) {
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
      } else {
        res.json({ message: 'Inscription réussie' });
      }
    });
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})