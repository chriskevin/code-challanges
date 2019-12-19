// WIP

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const winLoseStates = n => {
  const xs = [0, 1, 0, 1, 1, 1, 1, 0]

  for (let i = 8; i < 200; i++) {
    if (xs[i - 1] != 1 || xs[i - 3] != 1 || xs[i - 4] != 1) {
      xs[i] = 1
    } else {
      xs[i] = 0
    }
  }

  return xs
}

rl.on("line", line => {
  console.log(winLoseStates().join())
  console.log(winLoseStates(line)[line] === 1 ? "Alice" : "Bob")
  //console.log(takeTwo(alice, [...Array(line).keys()]))
})
