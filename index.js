const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./index.html', 'utf8'));
  });
  
  // Serve the CSS files
  app.use(express.static('./styles.css'));
  
  // Serve the image files
  app.use(express.static('./images'));
  
  app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));