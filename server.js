import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
const root = resolvers;

app.get("/", (req, res) => {
  res.send("GraphQL Server");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => {
  console.log("App listening on port 8082!");
});
