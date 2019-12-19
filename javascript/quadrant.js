const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const isQ1 = ([x, y]) => x > 0 && y > 0
const isQ2 = ([x, y]) => x < 0 && y > 0
const isQ3 = ([x, y]) => x < 0 && y < 0
const isQ4 = ([x, y]) => x > 0 && y < 0

const whatQuadrant = point => {
  if (isQ1(point)) return 1
  else if (isQ2(point)) return 2
  else if (isQ3(point)) return 3
  else if (isQ4(point)) return 4
}

const point = []

rl.on("line", line => {
  const coord = parseInt(line, 10)
  point.push(coord)
})
rl.on("close", () => {
  console.log(whatQuadrant(point))
})
