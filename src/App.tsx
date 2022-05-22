import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';

function App() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPeople(): Promise<void> {
			const res = await fetch('https://swapi.dev/api/people/?format=json');
			const data = await res.json();
			setPeople(data.results);
		}

		async function fetchPlanets(): Promise<void> {
			const res = await fetch('https://swapi.dev/api/planets/');
			const data = await res.json();
			setPlanets(data.results);
		}

		fetchPeople();
		fetchPlanets();

		console.log('data', people);
		console.log('data', planets);

		function loadingScreen(): void {}
	}, []);

	return (
		<div className="App">
			<Router>
				<NavbarComponent />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/people">
						<Peoples />
					</Route>
					<Route path="/planets"></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
