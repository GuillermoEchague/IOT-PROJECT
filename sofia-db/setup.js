"use strict";

const debug = require("debug")("sofia:db:setup");
const inquirer = require("inquirer");
const chalk = require("chalk");
const db = require("./");

const prompt = inquirer.createPromptModule();

async function setup() {
  const answer = await prompt([
    {
      type: "confirm",
      name: "setup",
      message: "This will destroy your databse, are you sure?",
    },
  ])

  if(!answer.setup) {
    return console.log('Nothing happend :)')
  }

  const config = {
    database: process.env.DB_NAME || "sofia",
    username: process.env.DB_USER || "platzi",
    password: process.env.DB_PASS || "platzi",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: (s) => debug(s),
    setup: true,
  };

  await db(config).catch(handleFatalError);

  console.log("Success:");
  process.exit(0);

  function handleFatalError(err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
}

setup();
