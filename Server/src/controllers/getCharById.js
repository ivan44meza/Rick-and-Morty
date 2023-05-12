const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
	const {id} = req.params;

	axios(`${URL}${id}`)
	.then(response => response.data)
	.then(({id, status, name, species, origin, image, gender}) => {
		const data = {
			id,
			status,
			name,
			species,
			origin,
			image,
			gender
		}

		if (!id || !status || !name || !species || !origin || !image || !gender){
			return res.status(404).send("Not found")
		} else {
			return res.status(200).json(data)
		}
	})
	.catch(err => res.status(500).send(err.message))
}

module.exports = {
	getCharById
}