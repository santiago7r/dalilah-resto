
const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilah');

const app = express();
const port = 8080;

app.use(express.json());
app.use('/', routes);

const testDB = async () => {
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testDB();


app.listen(port, () => {
console.log(`Started application on port ${port}`)
});
