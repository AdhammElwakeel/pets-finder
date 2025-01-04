import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePet = (id) => {
    const fetchPet = async () => {  
        try {
            const response = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
            return response.data.pets[0]; 
        } catch (error) {
            throw new Error(`Failed to fetch pet: ${error.message}`);
        }
    };

    return useQuery({
        queryKey: ['pet', id],
        queryFn: fetchPet,
        enabled: Boolean(id)  
    });
}

export default usePet;