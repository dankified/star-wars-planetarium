const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/planets', async (req, res) => {
	let { data } = await axios.get('https://swapi.co/api/planets');
	res.send(data.results);
})

app.get('/planets/:planetName', async (req, res) => {
	let { data } = await axios.get('https://swapi.co/api/planets');
	let planet = data.results.find(planet => planet.name.toLowerCase() === req.params.planetName.toLowerCase());
	planet ? res.send(planet) : res.send({message: "Planet not found"});
})

app.listen(5000, () => console.log("App is up!"));