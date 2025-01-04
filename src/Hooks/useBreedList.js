import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ANIMALS = ['dog', 'cat', 'rabbit', 'bird'];
const fetchBreedList = async({queryKey})=>{
    const animal = queryKey[1];

    if (!animal) return [];
    
    if (!ANIMALS.includes(animal)) {
        throw new Error(`Invalid animal type: ${animal}`);
    }

    try {
        const response = await axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        return response.data.breeds || []; 
    } catch (error) {
        throw new Error(`Failed to fetch breeds: ${error.message}`);
    }
};
const useBreedList = (animal) => {
    const results = useQuery({
        queryKey: ['breeds', animal],
        queryFn: fetchBreedList,
        enabled: !!animal && ANIMALS.includes(animal), 
        staleTime: Infinity, 
        cacheTime: Infinity, 
    });

    return [results?.data ?? [], results.status];
}
export default useBreedList;