#!/usr/bin/env node

const chalk = require('chalk');
const yargs = require("yargs");
const argv = require('yargs/yargs')(process.argv.slice(2)).argv
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const {settings} = require('cluster');

var opts = {
    speck_project_name:"helloworld"
}

if (argv._.indexOf("init") > -1) {
init(argv._[1])
} else if (argv._.indexOf("pull") > -1) {
    pull()
} else if (argv._.indexOf("ver") > -1) {
    console.log(chalk.bold.green("version: " + ver))
} else {
    help()
}

function init(name) {
var setings = opts
setting.speck_project_name = name
fs.writeFile('spckntermux.json', JSON.stringify(settings), function (err) {
  if (err) return console.log(err);
});
}
function pull() {
var opt = get_from_json()
    fse.copySync(path.join("./storage/shared/Android/data/io.spck/files/" + opt.speck_project_name, process.cwd() + "/"), { overwrite: true }, function (err) {
        if (err) {
            console.log(chalk.red(err))
        } else {
            //console.log(chalk.green.bold("Done Setup!"))
        }
    });
}

function get_from_json() {
var dir = path.join(process.cwd() + "/spckntermux.json");
        var obj
        try {
            var data = fs.readFileSync(dir, 'utf8');
            obj = data
        } catch(e) {
            console.log(chalk.red.bold('Error:', e.stack));
        }
        try {
            obj = JSON.parse(obj)
        } catch(err) {
            console.error(err)
        }
    return obj
}
