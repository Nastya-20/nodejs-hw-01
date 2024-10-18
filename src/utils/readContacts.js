import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);
    }catch (err) {
        console.error('Error reading contacts:', err);
        throw err;
    }
};
