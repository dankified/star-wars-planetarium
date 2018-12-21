import React from 'react';
import { Link } from 'react-router-dom';

const Planets = (props) => {
	return (
		props.planets.map(planet => {
			return (
				<Link to={`/planets/${planet.name}`}>
					<h1>Name: {planet.name}</h1>
					<h2>Population: {planet.population}</h2>
				</Link>
			)
		})
	)
} 

export default Planets;