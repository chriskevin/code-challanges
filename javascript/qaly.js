const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const qaly = []

rl.on("line", line => {
  const [q, y] = line.split(" ").map(parseFloat)

  if (y) qaly.push(parseFloat(q * y))
})
rl.on("close", () => {
  console.log(
    qaly.reduce((acc, x) => parseFloat((acc + x).toFixed(10)), 0).toFixed(3)
  )
})
