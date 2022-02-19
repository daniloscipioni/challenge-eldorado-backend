 const app = require('./app');

 const port = process.env.PORT || 3000;
 
 app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/teste', (req, res) => {
    res.send('teste');
  });

  app.get('/teste2', (req, res) => {
    res.send('teste2');
  });
  app.get('/teste3', (req, res) => {
    res.send('teste3');
  });
  app.get('/teste4', (req, res) => {
    res.send('teste4');
  });

 app.listen(port, () => {
   console.log('Aplicação executando na porta ', port);
 });
 