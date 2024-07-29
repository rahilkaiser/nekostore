"use client"
import {motion} from 'framer-motion';
import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {useWixClient} from "@/hooks/useWixClient";
import {LoginState} from "@wix/sdk";
import {toast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import CustomSpinner from "@/components/CustomSpinner";

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const wixClient: any = useWixClient();



    const router = useRouter();


    const isLoggedIn = wixClient.auth.loggedIn()
    //
    if (isLoggedIn) {
        router.push("/");
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);


        try {
            console.log(formData);
            const res = await wixClient.auth.register({
                email: formData.email,
                password: formData.password,
                profile: {nickname: formData.username}
            })
            console.log(res);

            switch (res?.loginState) {
                case LoginState.SUCCESS:
                    toast({
                        title: "Successfully logged in !",
                        description: "You are now being redirected",
                    })

                    setTimeout(() => {
                        router.push('/login');
                    }, 1000);
                    break;
                case LoginState.FAILURE:
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    })
                    break;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }


    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {isLoading && <div className="fixed inset-0 z-50 w-screen h-screen flex justify-center items-center bg-white/50">
                <CustomSpinner/>
            </div>}
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="bg-white p-8 rounded-lg shadow-lg min-w-[320px]"
            >
                <h1 className="text-xl font-semibold mb-4">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username"
                               className="block text-sm font-medium text-gray-700">Username</label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  transition-all duration-300 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email"
                               className="block text-sm font-medium text-gray-700">E-Mail</label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
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
                            placeholder="Enter your password"
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  transition-all duration-300 sm:text-sm"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        Register
                    </Button>
                    <div className="py-2"><Link className="capitalize text-xs" href={"/login"}>Have <span
                        className="lowercase">an</span> account ? Login </Link></div>
                </form>
            </motion.div>
        </div>
    );
}
