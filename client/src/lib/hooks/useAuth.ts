import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { httpAgent } from "../utils/httpAgent";
import type { User } from "../types/user";

export const useAuth = () =>{
    const queryClient = useQueryClient();


    const {data: currentUser, isLoading: isLoadingUser} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
           const result = await httpAgent.get<User>("/auth/user-info");

           return result.data
        }
    })


    const login = useMutation({
        mutationFn: async ({email, password}: {email: string, password: string}) => {
            await httpAgent.post("/login?useCookies=true", {email, password});
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })


    return {currentUser, isLoadingUser, login}
}