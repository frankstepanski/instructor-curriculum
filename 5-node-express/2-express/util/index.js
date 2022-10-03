
// middleware
const validateGreeting = (req, res, next) => {
    const name = req.params.name;
    if (name.length >= 3) {
      // move to next middleware
      next();
    } else {
     // Express will trigger error handler  
      next({
            status: 400,
            message: "Length is too short",
      });
    }
};

//const greetings = 

const pageNotFound = (req, res, next) => {
    console.log('route not handled')
    res.status(404).send('<h1>404 - not found</h1>')
};

export { validateGreeting, greetings, pageNotFound }