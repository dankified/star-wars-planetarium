import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Planet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			planet: {}
		}
	}

	async componentDidMount() {
		let planetName = this.props.match.params.planetName;
		let { data } = await axios.get('/planets/'+planetName);
		this.setState({planet: data});
	}

	render() {
		return (
			<div>
				<Link to="/">Back to Planets</Link>
				<h1>Planet Name: {this.state.planet.name}</h1>
				<h1>Planet Population: {this.state.planet.population}</h1>
				<h1>Terrain: {this.state.planet.terrain}</h1>
				<h1>Climate: {this.state.planet.climate}</h1>
			</div>
		)
	}
}

export default Planet;