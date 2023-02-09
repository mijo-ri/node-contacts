import dotenv from 'dotenv';
import express from 'express';

import contactsRoutes from './routes/contacts.js';

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// endpoints
app.use(contactsRoutes);

// start server
const PORT = process.env.PORT;
app.listen(
    PORT,
    () => console.log(`Server is running in ${process.env.NODE_ENV} mode on: http://localhost:${PORT}`)
);