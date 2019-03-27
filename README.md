This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To start app type

`
yarn && yarn start
`

## Specifications:

- When navigating to '/' (homepage), send GET request to API url and display all users received from the response in a table. Columns can be user id, name, email and city (you can add more).

- When clicking on user name in the table navigate to `/users/{id}` where id will be the id of clicked user.
Example: user: { id: 1, name: 'John', ... }, clicking on 'John' in table should navigate to `/users/1`

- When the page at /users/{id} loads, retreive the id from url and send GET request to https://jsonplaceholder.typicode.com/users/{id} to retrieve user data and display it on the page (you can display the same values from the table).

- The page where all users are displayed ('/') should have a button 'Create' that will navigate to /users/create. This page should have a form with name and email fields and a submit button. When clicking on submit, validate all data (both fields required and email matching an email pattern) and send POST request to https://jsonplaceholder.typicode.com/users with data { name: ..., email: ... }. Note that request should be submited via Javascript and not by form itself. After you receive a response, navigate back to homepage ('/').

- Page at /users/{id} should have 'Edit' and 'Delete' buttons as well.

- Clicking on 'Delete' should send DELETE request to https://jsonplaceholder.typicode.com/users/{id} where id will be the id of displayed user. After sending DELETE request, navigate back to homepage.

- Clicking on 'Edit' will navigate to /users/{id}/edit. Edit page should contain a form with name and email, same like the form for creating a user. Similarly like at /users/{id}, retrieve user data by sending GET request to API and update the form fields with returned user data. When clicking on submit, take values from the form and send a PUT/PATCH request to https://jsonplaceholder.typicode.com/users/{id} with data { name: ... email: ... } to update the user. Form should be validated before submiting (both fields required and email matching an email pattern).

Bonus if you include some nice styling and demonstrate your design skills.