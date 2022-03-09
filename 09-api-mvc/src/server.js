require('dotenv/config');
const app = require('./app');

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
