const express = require('express');
const app = express();
const fileHandler = require('fs');

/*i used app.use() to include any built-in middleware functions that is neededin this app. 
Here i use app.use to include the express.static built-in middleware function. This 
will allow me to serve static resources in the 'public' folder i have made. 
*/

app.use(express.static('public'));

/* The app.get function is used to handle routing. The app.get() method takes the two arguments: 
The path. In this app, the path is ‘/’ the root route of our app. 
A callback function that acts as a route handler. */

app.get('/', function(req, res) {
  fileHandler.readFile('person.json', (err, data) => {
      if (err) res.send('File not found. First post to create file.');
      else
          var name = JSON.parse(data)
          res.send(`Welcome!!! ` + name["name"]); 
          app.use(express.static('public'));
  })
})
/* Below is an additional about route to display the email */
app.get('/anotherabout', function(req, res) {
  fileHandler.readFile('person.json', (err, data) => {
      if (err) res.send('File not found. First post to create file.');
      else
          var email = JSON.parse(data)
          res.send(`Our Email Address is...!!! ` + email["email"]); 
  })
})

/* To get the port number from the environment variables instead of hardcoding it, i use the following code: */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
