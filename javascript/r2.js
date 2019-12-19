const readline = require("readline")

const r2 = (r1, s) => s * 2 - r1

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", line => {
  const [r1, s] = line.split(" ").map(x => parseInt(x, 10))

  console.log(r2(r1, s))
})
