import { app, init } from './app';

const PORT = process.env.PORT || 3000;

init().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(error => console.log('TypeORM connection error: ', error));
