import { useQuery } from "@tanstack/react-query";

const usePetsSearch = ({ animal, breed, location }) => {
    return useQuery({
        queryKey: ['pets', animal, breed, location], 
        queryFn: async () => {
            const res = await fetch(
                `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
            );
            if (!res.ok) {
                throw new Error(`Pet search fetch not ok: ${res.status}`);
            }
            return res.json();
        },
        enabled: true, 
    });
};

export default usePetsSearch;