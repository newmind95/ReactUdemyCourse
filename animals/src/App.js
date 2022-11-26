import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimals = () => {
    const animals = ['cat', 'dog', 'horse', 'bird', 'gator'];
    return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {

    const [animals, setState] = useState([])
    
    const handleAddButton = () => {
        setState([...animals, getRandomAnimals()])
    };

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className="app">
            <button onClick={handleAddButton}>Add Animal</button>
            <div className="animal-list">{renderAnimals} </div>
        </div>
    );
};

export default App;
