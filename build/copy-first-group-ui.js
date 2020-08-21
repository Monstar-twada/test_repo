/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-04 16:14
 */
const fs = require('fs-extra')
const { resolve } = require('path')
const chalk = require('chalk')

const FG_UI_DIRECTORY = resolve(__dirname, '../../first-group-ui')
const PLUGINS_DIR = resolve(__dirname, '../static/plugins/first-group-ui')
const NODE_MODULES_UI = resolve(__dirname, '../node_modules/first-group-ui')

function copyFirstGroupUI () {
  console.log(chalk.green(`=== Copy first-group-ui to==================`))
  console.log(chalk.green(`=== ${NODE_MODULES_UI}==================`))
  try {
    // to plugins
    fs.copySync(FG_UI_DIRECTORY + '/dist', PLUGINS_DIR)
    // to node_modules
    fs.copySync(FG_UI_DIRECTORY + '/package.json', NODE_MODULES_UI + '/package.json')
    fs.copySync(FG_UI_DIRECTORY + '/dist', NODE_MODULES_UI + '/dist')
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
