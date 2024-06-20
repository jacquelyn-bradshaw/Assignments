# Assignment 4 - APIs

## Initialize a Node.js project

To initialize a Node.js project, run the following command in the terminal:

```
npm init -y
```

This creates a `package.json` file

## Install a framework for APIs

To install the framework for my API, run the following command in the terminal:

```
npm install express
```

Add a start and test script to the `package.json` file

```
"scripts": {
    "start": "node assignment-4-APIs/index.js",
    "test": "jest"
},
```

## Install the MySQL library

To install the MySQL library to enable interactions with the MySQL database, run the following command in the terminal:

```
npm install mysql2
```

## Install dotenv module

To install the dotenv module to store your environmental variables in a `.env` file, run the following command in the terminal:

```
npm install dotenv
```

Open the `.env` file
You will need to ensure that for `MYSQL_PASSWORD = password`, `password` matches your personal MySQL password.

## Start the server

To start the server, run the following command in the terminal:

```
npm start
```
