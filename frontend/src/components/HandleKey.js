
import dotenv from 'dotenv';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the .env file located outside the project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Start the React application
exec('react-scripts start', (err, stdout, stderr) =>
{
    if (err)
    {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
