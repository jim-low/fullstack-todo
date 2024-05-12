(async function() {
  const result = await fetch("http://localhost:5000/")
  const { superSecretCode: data } = await result.json()

  const answer = Number(data.split("").map(parseInt).filter(x => x).reduce((a, b) => a + b).toString().split("").reverse().join(""))
  console.log(data)
  console.log(answer)
})()
