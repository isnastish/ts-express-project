import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

class Server {
  app: express.Express = express();

  constructor() {
    // use body parser middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // cookie session middleware
    // in order for request.session property to exist
    this.app.use(cookieSession({ keys: ["some-key"] }));

    // route middleware
    this.app.use(router);
  }

  serve(port: number): void {
    this.app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  }
}

const server = new Server();
server.serve(5050);
