import { createServer } from 'http';
import app from './app';

const main = async () => {
  const port = process.env.PORT || 3000;
  createServer(app).listen(
    port,
    // tslint:disable-next-line
    () => console.log(`Service running on port ${port}`)
  );
};

main()
  // tslint:disable-next-line
  .catch(e => () => console.log(`Failed to start service ${e}`));
