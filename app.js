const express = require('express');
const dbHelpers = require('./db');
const routes = require('./routes/product'); 

const app = express();  
const PORT = process.env.PORT || 8000; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', routes);


dbHelpers.connectToDb()
  .then(() => {
    console.log('Database Connected..');
    app.listen(PORT, (err) => {
      if (err) {
        console.log('ERROR WHILE STARTING SERVER: ', err);
      }
      console.log('Server started on port:', PORT);
    });
  })
  .catch((err) => {
    if (err) {
      console.log('ERROR WHILE CONNECTING TO DATABASE: ', err);
    }
  });
