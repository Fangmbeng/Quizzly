const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, 'src/templates/views'));

app.get('/', (req, res) => {
  res.render('register', {username:'Brandon'})
})

//Import function from routes module
const initRoutes = require('./src/routes');
//Execute function with app as argument
initRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
