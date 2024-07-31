import create from 'zustand';
import {useWixClient} from "@/hooks/useWixClient";

interface AuthState {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}



export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: () => {

        const wixClient: any = useWixClient();
        return wixClient.auth.loggedIn()
    },
    setIsLoggedIn: (loggedIn: boolean) => {
        set({ isLoggedIn: loggedIn })

    },
}));
