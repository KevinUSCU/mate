const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

const check = "\u2713"
const cross = "\u2717"
let passing
let failing

function describe(description, fn) {
  passing = 0
  failing = 0
  console.log(`\n${description}`)
  fn()
  console.log(`${chalk.green(`${passing} passing`)}\n${chalk.red(`${failing} failing`)}`)
}

function it(description, fn) {
  try { 
    fn()
    console.log(`${chalk.green(check)} ${description}\n`)
    passing++
  }
  catch(e){
    failing++
    console.log(`${chalk.red(cross)} ${description}\n  Assertion Error: ${e.message}\n`);
  }
}

module.exports = {
  describe,
  it
}
