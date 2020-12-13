const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
  }),
);

app.listen(3000, () => {
  console.log('serving on port 3000.');
});
