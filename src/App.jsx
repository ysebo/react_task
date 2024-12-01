import { useEffect, useState } from 'react'
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [searchThing, setSearchThing] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const gamesOfChildhood = [
        { id: 1, name: 'Plant Zombies 2' },
        { id: 2, name: 'Assassin Creed 2' },
        { id: 3, name: 'Need For Speed Most Wanted' },
        { id: 4, name: 'GTA San Andreas' },
        { id: 5, name: 'Warcraft: Frozen Throne' },
        { id: 6, name: 'The Witcher 3: Wild Hunt' },
        { id: 7, name: 'Red Dead Redemption 2' },
        { id: 8, name: 'Minecraft' },
        { id: 9, name: 'Overwatch' },
        { id: 10, name: 'Call of Duty: Modern Warfare' }
      ];
      setData(gamesOfChildhood);
    };
    fetchData();
  }, []);
  const filteredData = data.filter(game =>
    game.name.toLowerCase().includes(searchThing.toLowerCase())
  );
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