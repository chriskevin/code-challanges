const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const requiredCitations = (articles, impact) =>
  Math.round((impact - 1) * articles + 0.5)

rl.on("line", line => {
  const [articles, impact] = line.split(" ").map(x => parseInt(x, 10))

  console.log(requiredCitations(articles, impact))
})
