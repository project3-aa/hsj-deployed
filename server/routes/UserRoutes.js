const express     = require('express');
const router      = express.Router();
const User        = require('../models/User');
const bcrypt      = require('bcryptjs');
const passport    = require('passport');


// Sign Up Route
router.post('/signup', (req, res, next) => {
    console.log(req.body)
  const userNameVar = req.body.username;
  const password = req.body.password;

  if (!userNameVar || !password) {
      console.log('no creds')
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username:userNameVar }, (err, foundUser) => {

      if(err){
          res.status(500).json({message: "Username check went bad."});
          return;
      }

      if (foundUser) {
          console.log('already taken')
          res.status(400).json({ message: 'Username taken. Choose another one.' });
          return;
      }

      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const aNewUser = new User({
          username:userNameVar,
          password: hashPass
      });

      aNewUser.save(err => {
          if (err) {
              console.log('ahhhhhh')
              res.status(400).json({ message: 'Saving user to database went wrong.' });
              return;
          }
          
          // Automatically log in user after sign up
          // .login() here is actually predefined passport method
          req.login(aNewUser, (err) => {

              if (err) {
                  res.status(500).json({ message: 'Login after signup went bad.' });
                  return;
              }
          
              res.status(200).json({message: 'successfully logged in'});
          });
      });
  });
});

// ----------------------------------------------------------------------------
// Login Route

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
          res.status(500).json({ message: 'Something went wrong authenticating user' });
          return;
      }
  
      if (!theUser) {
          // "failureDetails" contains the error messages
          // from our logic in "LocalStrategy" { message: '...' }.
          res.status(401).json(failureDetails);
          return;
      }

      // save user in session
      req.login(theUser, (err) => {
          if (err) {
              res.status(500).json({ message: 'Session save went bad.' });
              return;
          }

          // We are now logged in (that's why we can also send req.user)
          console.log('---WOW WE LOGGED IN HOW COOL DUDE---', req.user);
          res.status(200).json(theUser);
      });
  })(req, res, next);
});

// ---------------------------------------------------------------------
// logout Route

router.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

// ---------------------------------------------------------------------
// getuser Route for the frontend

router.get('/getcurrentuser', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.user) {
        let newObject = {};
        newObject.username = req.user.username;
        newObject._id = req.user._id;

        res.status(200).json(newObject);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

//-----------------------------------------------------------------------
// Favorite Route
  // Code Goes Here

module.exports = router;
