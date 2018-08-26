const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '928236543',
    database : 'smart-brain'
  },
  searchPath: ['knex', 'local'],
});

// let selectVersion = () => db.raw('SELECT version()')
// selectVersion()
//   .then(() => {
//     // debuger; //Kill connection on the database server, IE via pgAdmin 'terminate'.
//     return selectVersion();
//   })
//   .then((res) => {
//     //res is present
//     console.log("yesssssss", res)
//   })
//   .catch((err) => {
//     //Do not reach this point.
//     console.log("noooooooooo", err)
//   });

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('it`s working!!!') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3000, () => {
  console.log('app is running on port 3000');
})
