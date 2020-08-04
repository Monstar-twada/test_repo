/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-04 16:14
 */
const fs = require('fs-extra')
const { resolve } = require('path')
const chalk = require('chalk')

const FG_UI_DIRECTORY = resolve(__dirname, '../../first-group-ui/dist')
const PLUGINS_DIR = resolve(__dirname, '../static/plugins/first-group-ui/')

function copyFirstGroupUI () {
  console.log(chalk.green('=== Copy first-group-ui to node_modules from directory[/first-group-ui]=================='))
  try {
    fs.copySync(FG_UI_DIRECTORY, PLUGINS_DIR)
    console.log(chalk.green('Success!'))
  } catch (e) {
    console.error(e)
    console.log(chalk.red('Failed!'))
  }
  console.log(chalk.green('=== Copy first-group-ui End=================='))
}

module.exports = {
  copyFirstGroupUI
}
