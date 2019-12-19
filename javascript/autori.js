const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const shortVariation = s =>
  s
    .split("-")
    .map(x => x.charAt(0))
    .join("")

rl.on("line", line => {
  console.log(shortVariation(line))
})
