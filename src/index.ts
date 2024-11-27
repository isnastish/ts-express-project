import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser, { BodyParser } from "body-parser";

const app = express();
const port: number = 5050;

// use body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
