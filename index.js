const express = require('express');
const app = express();
const PORT = 1337;

app.use(express.json());

/**
 * Data
 */
const contacts = require('./data/contacts');


/**
 * Endpoints
 */

// get contacts
app.get('/contacts', (req, res) => {
    res.status(200).send(contacts);
});

// get contact by id
app.get('/contacts/:id', (req, res) => {
    const { id } = req.params;

    // find contact
    const contact = contacts.find(item => item.id == id);

    // contact not found
    if (!contact) {
        res.status(404).send({ message: 'Contact not found' });
    }

    // everything is ok
    res.status(200).send(contact);
});


/**
 * Start server
 */
app.listen(
    PORT,
    () => console.log(`server is running on: http://localhost:${PORT}`)
);