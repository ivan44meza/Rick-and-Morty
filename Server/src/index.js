const http = require("http");
const data = require("./utils/data.js")

http
.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	if (String(req.url).includes("/rickandmorty/character")){

		const characterId = String(req.url).split("/").pop()

		const character = data.filter(char => char.id === Number(characterId))[0]

		res.writeHead(200, {"Content-type": "application/json"})
		res.end(JSON.stringify(character))
	}
})
.listen(3001, "localhost")