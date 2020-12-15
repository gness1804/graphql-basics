const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8080, () => {
  console.log('serving on port 8080.');
});
