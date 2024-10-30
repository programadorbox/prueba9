// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user.routes');
const sequelize = require('./config/db.config');

app.use(cors());
app.use(express.json());

app.use(userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
