import Pet from "./Pet"; 
const Search = ({pets}) => {
    return ( 
        <>  
            <div className="search">
                    {!pets.length ? (
                        <h1>no pets found</h1>
                    ) : (
                        pets.map(pet => (
                            <Pet
                                key={pet.id} 
                                id = {pet.id}
                                animal={pet.animal} 
                                name={pet.name}   
                                breed={pet.breed}  
                                images={pet.images}
                                location={pet.city}
                            />
                        ))
                    )}
            </div>
        </>
     );
}
 
export default Search;