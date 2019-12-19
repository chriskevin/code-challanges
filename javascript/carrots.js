const readline = require("readline")

const isNumber = x => typeof x == "number" && !isNaN(x)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", line => {
  const [contestants, problems] = line.split(" ").map(x => parseInt(x, 10))

  if (isNumber(contestants, 10) && isNumber(problems, 10)) console.log(problems)
})
