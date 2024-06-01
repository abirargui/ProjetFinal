const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require("./config/db")
const cors = require('cors');
const port = 3000
const userRoutes = require("./routes/userRoute");


app.use(cors()); // Enable CORS
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes)

// Route pour gérer la soumission du formulaire de contact
app.post('/contact', (req, res) => {
    const { nom, email, sujet, message } = req.body;

    if (!nom || !email || !sujet || !message) {
        return res.status(400).send('All fields are required');
    }

    db.query('INSERT INTO contact (nom, email, sujet, message) VALUES (?, ?, ?, ?)', [nom, email, sujet, message], (err, result) => {
        if (err) {
            return res.status(500).send('Error inserting into database');
        }
        return res.status(200).send('Contact information saved successfully');
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})