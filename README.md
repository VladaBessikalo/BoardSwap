# BoardSwap 🎲 

BoardSwap is a community-driven online marketplace for board game and puzzle lovers. Whether you’re looking to clear out your shelf or discover your next favorite game, BoardSwap makes buying and selling fun, easy, and social.

This is the final project for the HackYourFuture curriculum we did as a cohort using the [MERN stack](https://www.mongodb.com/resources/languages/mern-stack) by following the agile methodology with our team and a group of mentors 👨‍💻👩‍💻👨‍💻👩‍💻. A quick guide to what we built:

Demo:
`https://c50-group-b.hackyourfuture.tech/`

## 1. ✨ Features

- User Authentication - Sign up, log in, and log out securely.

- Browse Items - Explore all available board games and puzzles on the homepage.

- Share with Friends - Share any listing directly via WhatsApp or copy a link to send it anywhere.

- Sell Your Games - Add items for sale with just a few clicks. Upload images, provide details, and wait for the right buyer.

- Buy with Ease - Add items to your cart, complete an order form, and process payments smoothly.

- User Dashboard - Manage your personal profile, view your items, and track order history.


## 🗂️ 2. Code structure

```
client
├── public
└── src
|   └── __tests__
|   └── __testUtils__
|   └── components
|   └── context
|   └── hooks
|       └── useFetch
|       └── useForm
|   └── pages
|       └── Home
|       └── Item
|       └── NotFound
|       └── Order
|       └── User
|   └── routes
|       └── AppRoutes
|       └── PrivateRoute
|   └── util
|   index.jsx
cypress
|   └── fixtures
|   └── integration
|   └── plugins
|   └── support
server
└── src
    └── __tests__
    └── __testUtils__
    └── controllers
    └── db
    └── models
    └── routes
    └── util
    index.js
```

## 🛠️ 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `vite` || To bundle our React app and create a static app to host. See [docs](https://vite.dev/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `Material UI (MUI)` || Component library for sleek, accessible UI design. See [docs](https://mui.com/)
- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)

### 3.4 Media & Asset Management

- `Cloudinary` || – Image hosting and transformation service. Used to upload and manage listing images. See [docs](https://cloudinary.com/documentation)

### 3.5 Deployment & CI/CD

- `Heroku` || Hosting for the full-stack app.


## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.
