import { database } from './database/config';
import { app } from './routes';

/** Start the app */
const runApp = async () => {
    await database.connect();
    app.listen(3000, () => console.log(`Listening on port 3000`));
}

runApp()