import { useEffect, useState } from 'react'
import "./App.css"; 

const fetchGames = async () => {
  const gamesOfChildhood = [
    { id: 1, name: 'Plant Zombies 2' },
    { id: 2, name: 'Assasin Creed 2' },
    { id: 3, name: 'Need For Speed Most Wanted' },
    { id: 4, name: 'GTA San Andreas' },
    { id: 5, name: 'Warcraft:Frozen Throne' },
  ];
  return gamesOfChildhood;
};
const filterGames = (games, query) => {
  return games.filter(game =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );
};

function App() {
  const [data, setData] = useState([]);
  const [searchThing, setSearchThing] = useState("");
  useEffect(() => {
    const loadData = async () => {
      const games = await fetchGames(); 
      setData(games);
    };
    loadData();
  }, []);
  const filteredData = filterGames(data, searchThing);
  return (
    <div className='searchComponent'>
        <input
          type='text'
          placeholder='Search game...'
          value={searchThing}
          onChange={e => setSearchThing(e.target.value)}
        />
       <ul>
        {filteredData.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App