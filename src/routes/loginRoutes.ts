// NOTE: When a file starts with a capital letter in typescript,
// it means the the file will be exported

import { Router, Request, Response } from "express";

const router = Router();

// Will have all the properties that Request interface has
interface TypedRequest extends Request {
  body: { [key: string]: string | undefined };
}

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email: </label>
            <input name="email" />
        </div>
        <div>
            <label>Password: </label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
    </form>
`);
});

router.post("/login", (req: TypedRequest, res: Response) => {
  // properties would be the names that we provided on those two inputs
  // email and password
  // body property is undefined if bodyParser middleware is removed
  const { email, password } = req.body;
  console.log(`Email: ${email}, password: ${password}`);

  if (
    email &&
    password &&
    email === "admin@gmail.com" &&
    password === "password"
  ) {
    // mark this person as logged in


    // redirect to the root route
    res.json({
      email: email.toUpperCase(),
      password: password.toUpperCase(),
    });
  } else {
    res.status(422).send("Email or password is not valid");
  }
});

export { router };
