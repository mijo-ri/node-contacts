import express from "express";

import contacts from '../data/contacts.js';

const router = express.Router();

// get contacts
router.get('/contacts', (req, res) => {
    res.status(200).send(contacts);
});

// get contact by id
router.get('/contacts/:id', (req, res) => {
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

export default router;