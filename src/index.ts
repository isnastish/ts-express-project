import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser, { BodyParser } from "body-parser";
import cookieSession from "cookie-session";

const app = express();
const port: number = 5050;

// use body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// cookie session middleware
// in order for request.session property to exist
app.use(cookieSession({ keys: ["some-key"] }));

// route middleware
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
