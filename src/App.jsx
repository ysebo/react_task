import { useEffect } from 'react';
import { useState } from 'react'
function App() {
  const [data, setData] = useState([]);
	const [searchThing, setSearchThing] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const gamesOfChildhood = [
      { id: 1, name: 'Plant Zombies 2' },
      { id: 2, name: 'Assasin Creed 2' },
      { id: 3, name: 'Need For Speed Most Wanted' },
      { id: 4, name: 'GTA San Andreas' },
      { id: 5, name: 'Warcraft:Frozen Throne' },
    ];
    setData(gamesOfChildhood);
  };
    fetchData();
},[]);

  return (
    <div></div>
	);
}

export default App