"use client"
import {useState, useEffect} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import CustomSpinner from "@/components/CustomSpinner";
import {GetMyMemberResponse} from "@wix/members_members";
import {useRouter} from "next/navigation";
import {resetPassword, updateUser} from "@/lib/actions";
import {wixClientServer} from "@/lib/wixClientServer";
import {useWixClient} from "@/hooks/useWixClient";
import {router} from "next/client";

export default function UserProfile({currentUser}: { currentUser: any }) {
    const {toast} = useToast();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const wixClient: any = useWixClient();

    if(!wixClient.auth.loggedIn()) {
        router.push("/login");
    }

    useEffect(() => {
        setUsername(currentUser.member?.profile?.nickname || "");
        setEmail(currentUser.member?.loginEmail || "");
        setPhoneNumber(
            (currentUser.member?.contact?.phones &&
                currentUser.member?.contact?.phones[0]) ||
            "+49"
        );
        console.log("CURRENTUSER", currentUser)
    }, [currentUser]);

    const handleSaveChanges = async () => {
        try {
            setIsLoading(true)
            const res = await updateUser({
                memberId: currentUser.member?.contactId,
                username: username,
                email: email,
                phoneNumber: phoneNumber,
            }).then(() => {
                setIsLoading(false)

                toast({
                    duration: 8000,
                    className: 'bg-green-200',
                    title: 'Success!',
                    description: "Successfully updated",
                });

            });


        } catch (err) {
            console.log(err);
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        }
    };

    const handleResetPassword = async (e, email) => {

        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await wixClient.auth.sendPasswordResetEmail(
                currentUser.member?.loginEmail,
                `${window.location.origin}/login`
            ).then(
                () => {
                    setIsLoading(false)
                    toast({
                        duration: 8000,
                        className: "bg-yellow-200",
                        title: "Reset Password",
                        description: "Password reset link sent to your email!",
                    });
                }
            )
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        }
    };

    return (
        <div className="container mx-auto p-8 flex flex-col items-center">
            {isLoading &&
                <div className="fixed inset-0 z-50 w-screen h-screen flex justify-center items-center bg-white/50">
                    <CustomSpinner/>
                </div>}
            <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>

            <div className="w-full max-w-xs">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <Input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}
                       className="mb-4 transition-all duration-300"/>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}
                       className="mb-4 transition-all duration-300"/>
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                </label>
                <Input id="phoneNumber" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                       className="transition-all duration-300 mb-4"/>
                <Button onClick={handleSaveChanges}
                        className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                    Save Changes
                </Button>

                <Button onClick={(event) => {handleResetPassword(event, currentUser)}}
                        className="w-full mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Reset Password
                </Button>
            </div>
        </div>
    );
}
