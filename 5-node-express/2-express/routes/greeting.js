const express = require('express')
const greetingRouter = express.Router()
import { validateName, greetings } from './util/index.js';

// define the home page route
router.get('/', (req, res) => {
  res.send('Welcome to the home route')
})
// define the about route
router.get('/greeting', (req, res) => {
  res.send('Hello!!!')
})


// route middleware:
app.get("/hello/:name", validateName, 
        (req, res, next) => {
  const message = `Hello, ${req.params.name}!`;
  res.send(message);
});

app.get("/goodbye/:name", validateName,
        (req, res, next) => {
  const message = `Goodbye, ${req.params.name}.`;
  res.send(message);
});

// cats route
app.get('/cats', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`<h2>My cat ${name} is ${age} years old</h2>`);
});


/*  :profileId is a route parameter. Express will capture whatever
    string comes after `/profile/` in the URL and store it in
    req.params.profileId
*/
app.get('/profile/:profileId', (req, res) => {
  res.json(req.params); // object storing all route parameters
});

// you can also nest route parameters
app.get('/profile/:profileId/user/:userId', (req, res) => {
  res.json(req.params); // object storing all route parameters
});


// query and route parameter together
// localhost:3000/speak/hello?name=frank  (hello => route param; frank => query param)
const greeting = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

app.get('/speak/:greeting', greeting);


// colors route
app.get('/colors', (req, res) => {
  res.json(req.query);
});
export { greetingRouter };