// WIP

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const pointsForNIterations = (initial, n) => {
  if (n === 0) return initial
  return pointsForNIterations(Math.pow(initial, n - n) + 1, n - 1)
}

rl.on("line", line => {
  const n = parseInt(line, 10)

  let r = 0

  for (let i = 0; i < n; i++) {
    r += Math.pow(4, n) + 1
    console.log(r)
  }
  //console.log(pointsForNIterations(Math.pow(2, 2) + 1, n))
})
