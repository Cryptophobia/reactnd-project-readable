**Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/aouzounov), or open a pull request on this project.

**Programming assignment for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.**

---

# Readable

> For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

Built with React, Redux and React Router. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
For this assignment there was no starter template provided (apart from the simple backend API).


## Limitations and things that are missing

The assignment did not specify any use of authentication. From the API provided, each user has access to its own set of posts and comments, and can modify or delete any entry.

The focus of the assignment was on functionality, rather than styling, so I did not spend so much time building the UI (no animations, few loading messages, etc). Also, this project has no automated tests.

Lastly, as this was a Redux assignment, it was required that **all** state lives inside Redux, even if it would make more sense to store it locally on a component.


## Stack

* [node.js](https://nodejs.org) (v6.11)
* [npm](https://www.npmjs.com) (5.1.0)
* [create-react-app](https://github.com/facebookincubator/create-react-app) (1.5.2) Tool to bootstrap React applications
* [react](https://facebook.github.io/react) (16.3.2)
* [redux](https://github.com/reactjs/redux) (4.0.0) Manage state
* [react-router](https://github.com/ReactTraining/react-router) (4.2.0) Declarative routing for React
* [react-router-redux](https://github.com/reactjs/react-router-redux) (5.0.7) Keep react-router and redux in sync


## API

This applications consumes data from an API designed by Udacity specifically for the assignment, which can be found on [Udacity's GitHub](https://github.com/udacity/reactnd-project-readable-starter).
A copy of their repository is present here (on `server/` folder) so both could be deployed together.


## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/Cryptophobia/reactnd-project-readable
$ cd reactnd-project-readable/readable
$ npm install
$ cd server/
$ npm install
```

## Development

First, start the API backend. It will be served on `http://localhost:3001/api/`:

```bash
$ cd reactnd-project-readable/server/
$ npm start
```

Then, go back to the root of the project and run the development server in another terminal. 
The app will be served with live reloading on `http://localhost:3000`.

```bash
$ cd reactnd-project-readable/readable/
$ npm start
```

**Note to reviewer:** To make deployment easier, I have modified the backend API server so routes live under a `api/` namespace.
If you use the server inside `server/` folder, it should work as expected. In case you want to use the original
server, please start the front-end server passing the API URL as a variable (like below) or update `.env.development`
with the correct API URL.

```bash
$ REACT_APP_API_SERVER=http://localhost:3001 npm start
```

## Build

Build the app for production to the `build` folder.

```bash
$ cd reactnd-project-readable/readable/
$ npm run build
```


## Lint

Run lint tools.

```bash
$ cd reactnd-project-readable/
$ npm run eslint
```


## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## Contributors

* Anton O ([Cryptophobia](https://github.com/Cryptophobia))


## License

This project is licensed under the MIT License. Check the `LICENSE` file.
