const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const usersRouter = require('./routes/api/usernames');
const profilesRouter = require('./routes/api/profiles');
const preferenceRouter = require('./routes/api/preferences');
const userTypesRouter = require('./routes/api/userTypes');

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/api/usernames', usersRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/preferences', preferenceRouter);
app.use('/api/userTypes', userTypesRouter);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
