import { useState } from "react"; 
import Pet from "../Components/Pet";
import useBreedList from "../Hooks/useBreedList";
import Search from "./Search";
import usePetsSearch from "../Hooks/usePetsSearch";

const SearchParm = () => {
    const animals = ['dog', 'cat', 'rabbit', 'lion', 'tiger'];
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [breedList] = useBreedList(animal); 

    const {data} = usePetsSearch({
        animal,
        breed,
        location
    });
    
    const pets = data?.pets ?? [];

    const handleBreedChange = (e) => {
        setBreed(e.target.value);
    };
    return ( 
        <>
            <div className="search-params">
                <form
                    onSubmit={(e) => {
                       e.preventDefault();
                    }}>
                    <label htmlFor="location">
                        <input 
                            type="text" 
                            value={location}  
                            id="location"
                            onChange={(e) => setLocation(e.target.value)} 
                            placeholder="enter City"   
                        />
                    </label>
                    <label htmlFor="animal">
                        Animal
                        <select
                            value={animal} 
                            onChange={(e) => setAnimal(e.target.value)}
                            id="animal"
                        >
                            <option value="">
                                Select an Animal
                            </option>
                            {animals.map(animal =>
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            )}
                        </select>
                    </label>
                    <label htmlFor="breed">
                        Breed
                        <select
                            disabled={!breedList.length}
                            id="breed"
                            value={breed}
                            onChange={handleBreedChange}
                        >
                            <option value="">Select a Breed</option>
                            {breedList.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            <Search pets={pets} />
            </div>
        </>
    );
};

export default SearchParm;