import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import usePet from "../Hooks/usePet";

const PetDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { data: pet, isLoading, error } = usePet(id);  
   
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return ( 
        <div className="details">
            {pet && (
                <>
                    <img src={pet.images} alt="" />
                    <h2>Details {id} with {pet.name}</h2>    
                    <h3>{pet.name} - {pet.animal} - {pet.breed}</h3>
                    <button>Adopt {pet.name}</button>
                    <h4>{pet.description}</h4>
                    <button onClick={() => navigate(-1)}>Back</button>
                </>
            )}
        </div>
    );
}
 
export default PetDetails;