import dotenv from 'dotenv';
import express from 'express';
import contacts from './data/contacts.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();


/**
 * Middleware
 */
app.use(express.json());


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
    () => console.log(`Server is running in ${process.env.NODE_ENV} mode on: http://localhost:${PORT}`)
);