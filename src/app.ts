import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const users: Record<string, string> = {
  admin: "admin123",
};

const requireLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.cookies;
  if (!username || !users[username]) {
    res.clearCookie("username");
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req: Request, res: Response) => {
  res.render("index", { user: req.cookies.username || "" });
});

app.get("/login", (req: Request, res: Response) => {
  if (req.cookies.username && users[req.cookies.username]) {
    return res.redirect("/profile");
  }
  res.render("login", { error: null });
});

app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .render("login", { error: "Username or password is required." });
  }
  const expected = users[username];
  if (!expected || expected !== password) {
    return res
      .status(401)
      .render("login", { error: "Invalid username or password." });
  }
  res.cookie("username", username, { httpOnly: true });
  res.redirect("/profile");
});

app.get("/profile", requireLogin, (req: Request, res: Response) => {
  res.render("profile", { user: req.cookies.username });
});

app.get("/logout", (req: Request, res: Response) => {
  res.clearCookie("username");
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
