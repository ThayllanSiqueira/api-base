import app from './app';
// const app = require('./app');

// const port = process.argv[2] || 3000;
const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(port);
});
