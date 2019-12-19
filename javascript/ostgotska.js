const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const occurences = (regexp, s) => s.match(regexp).length

const words = s => s.split(" ")

const percentageOf = (total, part) => parseFloat((part / total) * 100)

const isOstgotska = s =>
  percentageOf(words(s).length, occurences(/\w*ae\w*/gi, s)).toFixed(2) >= 40.0

rl.on("line", line => {
  console.log(
    isOstgotska(line) ? "dae ae ju traeligt va" : "haer talar vi rikssvenska"
  )
})
