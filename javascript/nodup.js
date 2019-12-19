const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const noDuplicateWords = s =>
  s.split(" ").some((x, i, xs) => xs.indexOf(x) !== xs.lastIndexOf(x))
    ? "no"
    : "yes"

rl.on("line", line => {
  console.log(noDuplicateWords(line))
})
