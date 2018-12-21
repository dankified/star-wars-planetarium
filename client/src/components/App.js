import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Planets from './Planets';
import Planet from './Planet';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			planets: []
		}
	}

	async componentDidMount() {
		let { data } = await axios.get('/planets');
		this.setState({
			planets: data
		})
	}

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={() => <Planets planets={this.state.planets}/>} />
					<Route path="/planets/:planetName" component={Planet} />
				</div>
			</Router>
		)
	}
}

export default App;