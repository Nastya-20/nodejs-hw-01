import fs from "node:fs/promises";
import { PATH_DB } from '../contacts/contacts.js';

export const writeContacts = async (contacts) => {
    try {
        const data = JSON.stringify(contacts, null, 2);
        await fs.writeFile(PATH_DB, data, 'utf-8');
    } catch (err) {
        console.error('Error writing contacts:', err);
        throw err;
    }
};
