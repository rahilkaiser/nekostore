"use client"
import {motion} from 'framer-motion';
import {ChangeEvent, useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {useWixClient} from "@/hooks/useWixClient";
import {LoginState, Tokens} from "@wix/sdk";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import CustomSpinner from "@/components/CustomSpinner";
import {useAuthStore} from "@/hooks/useAuthStore";

export default function Login() {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    const { setIsLoggedIn} = useAuthStore();

    const wixClient: any = useWixClient();
    const {toast} = useToast()
    const router = useRouter();


    // const isLoggedIn = wixClient.auth.loggedIn()
    //
    // if (isLoggedIn) {
    //     router.push("/");
    // }


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await wixClient.auth.login({
                email: formData.email,
                password: formData.password
            })

            switch (res?.loginState) {
                case LoginState.SUCCESS:
                    toast({
                        duration: 1000,
                        title: "Successfully logged in !",
                        description: "You are now being redirected",
                    })
                    await wixClient.auth.getMemberTokensForDirectLogin(res?.data.sessionToken).then((tokens:Tokens) => {

                        setIsLoading(false)

                        Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
                            expires: 2,
                        });

                        wixClient.auth.setTokens(tokens);
                        router.refresh()
                        setIsLoggedIn(wixClient.auth.loggedIn())
                        router.replace('/');
                    });


                    break;
                case LoginState.FAILURE:
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    })
                    setIsLoading(false)
                    break;
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {isLoading &&
                <div className="fixed inset-0 z-50 w-screen h-screen flex justify-center items-center bg-white/50">
                    <CustomSpinner/>
                </div>}

            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="bg-white p-8 rounded-lg shadow-lg min-w-[320px]"
            >
                <h1 className="text-xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email"
                               className="block text-sm font-medium text-gray-700">E-mail</label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your username"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  transition-all duration-300 sm:text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block text-sm font-medium text-gray-700">Password</label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  transition-all duration-300 sm:text-sm"
                        />
                    </div>
                    <div className="py-2"><Link className="capitalize text-xs" href={"/reset-password"}>Forgot
                        Password ?</Link></div>
                    <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        Log in
                    </Button>
                    <div className="py-2"><Link className="capitalize text-xs" href={"/register"}>Dont <span
                        className="lowercase">have an</span> account ? </Link></div>
                </form>
            </motion.div>
        </div>
    );
}
