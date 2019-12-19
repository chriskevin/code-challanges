const readline = require("readline")

const ignoreDuplicate = (s, c) => (s.charAt(s.length - 1) === c ? s : s + c)

const compressApaxian = name => name.split("").reduce(ignoreDuplicate, "")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", line => {
  console.log(compressApaxian(line))
})
