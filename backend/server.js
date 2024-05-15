const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port = 3000


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apptimesheet'
  });

  
  connection.connect();
  
  app.use(bodyParser.json());

// Route pour l'inscription
app.post('/inscription', (req, res) => {
    const { nom, prenom, email, datenais, telephone, dateemboche, role, motdepasse } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return res.status(400).send('Utilisateur déjà enregistré.');
        }

        // Hash le mot de passe et insérer l'utilisateur
        bcrypt.hash(motdepasse, 10, (err, hash) => {
            if (err) throw err;

            const newutilisateurs = {
                nom,
                prenom,
                email,
                datenais,
                telephone,
                dateemboche,
                role,
                password: hash
            };

            db.query('INSERT INTO utilisateurs SET ?', newutilisateurs, (err, result) => {
                if (err) throw err;
                res.status(201).send('Utilisateur inscrit avec succès.');
            });
        });
    });
});

// Route pour la connexion
app.post('/connexion', (req, res) => {
    const { email, motdepasse } = req.body;

    db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(400).send('Utilisateur non trouvé.');
        }

        const utilisateurs = results[0];
        bcrypt.compare(motdepasse, utilisateurs.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                return res.status(400).send('Mot de passe incorrect.');
            }

            const token = jwt.sign({ id: utilisateurs.id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        });
    });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})