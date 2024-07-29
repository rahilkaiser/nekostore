"use client"
import {motion} from 'framer-motion';
import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {useWixClient} from "@/hooks/useWixClient";
import {toast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import CustomSpinner from "@/components/CustomSpinner";

export default function ResetPassword() {
    const [formData, setFormData] = useState({email: ''});
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
            console.log(formData.email)

            const res = await wixClient.auth.sendPasswordResetEmail(
                formData.email,
                `${window.location.origin}/login`
            )
            toast({
                title: "Password reset has been sent.",
                description: "Please check your E-mail.",
            })

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
                <h1 className="text-xl font-semibold mb-4">Reset Your Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  transition-all duration-300 sm:text-sm"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        Reset Password
                    </Button>
                    <div className="py-2">
                        <Link className="capitalize text-xs" href={"#"}>Go back to login </Link></div>
                </form>
            </motion.div>
        </div>
    );
}
