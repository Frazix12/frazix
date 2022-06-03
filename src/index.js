#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:frazixgaming22@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("        Code With Frazix"),
  handle: chalk.white("@Frazix12"),
  github: chalk.gray("https://github.com/") + chalk.green("Frazix12"),
  youtube: chalk.gray("https://youtube.com/") + chalk.green("CodeWithFrazix"),
  web: chalk.cyan("https://frazix.tk/"),
  npx: chalk.red("npx") + " " + chalk.white("frazix"),

  labelGitHub: chalk.white.bold("     GitHub:"),
  labelYouTube: chalk.white.bold("    YouTube:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelYouTube}  ${data.youtube}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am a freelance and a full-stack developer.")}`,
    `${chalk.italic(
      "I have experience working with the WEB,Discord bot's & Some Bash Scripts."
    )}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
