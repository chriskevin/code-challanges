// WIP

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const remainingData = (capacity, usages) =>
  usages.reduce((remaining, x) => Math.max(capacity + remaining - x, 0), 0)

const data = []

rl.on("line", line => {
  data.push(parseInt(line, 10))
})
rl.on("close", () => {
  const [capacity, ...usages] = data
  console.log(remainingData(capacity, usages))
})
