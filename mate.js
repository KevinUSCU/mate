const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

const check = "\u2713"
const cross = "\u2717"
let passing
let failing
const pending = { describes: 0, its: 0 }

function describe(description, fn) {
  passing = 0
  failing = 0
  pending.describes = 0
  pending.its = 0
  console.log(`\n${description}`)
  fn()
  if (pending.its > 0) console.log(`${pending.its} tests pending`)
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

function xdescribe(description) {
  pending.describes++
  if (pending.describes > 0) console.log(`${pending.describes} test suites pending`)
}

function xit(description) {
  pending.its++
}

module.exports = {
  describe,
  it,
  xdescribe,
  xit
}
