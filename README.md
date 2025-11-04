[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/k8zC9Rrd)
# NodeJS - Cookies Exercise

**Goal:** Create a working login form using NodeJS and Express. Use EJS for the frontend.

## Instructions

1. Set up your server using NodeJS and Express.
2. Create an in-memory database of users with the username as 'admin' and password is 'admin12345'. You can just store the database inside your route for now.
3. Make sure you have these routes and pages:

   - Home page (`/`) - Can just have dummy text (*GET*)
   - Login page (`/login`) - Login form (*GET* and *POST*)
   - My Profile (`/profile`) - Can just have dummy text (protected page) (*GET*)

4. A user who is not logged in cannot access the `/profile` page and will be redirected to the `/login` page.
5. On the login page, you will have a form with a username and a password field. When a user logs in, the login information will be sent to `/login` route as a POST request. If the login is valid, the server will send back a cookie to the browser with the username.
6. Create a logout *GET* request route (`/logout`) that will clear the cookie and redirect to the `/login` page if visited.
7. Once you are done, push your changes to `dev` and merge `dev` to `master` branch.
