import React, { useState, useEffect } from 'react';

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople(): Promise<void> {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets(): Promise<void> {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();

    console.log("data", people)
    console.log("data", planets)

    function loadingScreen(): void {
      
    }
  }, [])



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
