const app = require('./app/app');
const sequelize = require('./db/config/sequelize.config');

const PORT = 3001;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
});
