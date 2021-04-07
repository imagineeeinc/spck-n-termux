#!/usr/bin/env node

const chalk = require('chalk');
const yargs = require("yargs");
const argv = require('yargs/yargs')(process.argv.slice(2)).argv
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

if (argv._.indexOf("init") > -1) {
} else if (argv._.indexOf("build") > -1 || argv._.indexOf("bake") > -1 || argv._.indexOf("b") > -1) {
    console.log(chalk.green.bold("Starting Build Process"))
    startbuild()
} else if (argv._.indexOf("help") > -1) {
    help()
} else if (argv._.indexOf("ver") > -1) {
    console.log(chalk.bold.green("version: " + ver))
} else {
    help()
}
