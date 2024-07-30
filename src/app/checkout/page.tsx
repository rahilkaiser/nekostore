"use client"
import {useToast} from "@/components/ui/use-toast";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function CheckoutUnavailable() {
    const {toast} = useToast();
    const [email, setEmail] = useState("");

    const handleNotify = async () => {

        toast({
            duration:8000,
            className: "bg-green-200",
            title: "Success !",
            description: "Thank you for subscribing. We will notify you once we are ready to launch our new checkout system.",
        })
    };

    return (
        <div className="container mx-auto flex flex-col justify-center items-center h-96">
            <h1 className="text-lg md:text-2xl font-bold mb-4">Temporarily Unavailable</h1>
            <p>Thank you for your interest in our products! We are currently upgrading our system to bring you a better and more seamless checkout experience...</p>
            {/* Further details and form as described above */}
            <form onSubmit={handleNotify} className="mt-4 flex">
                <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button onClick={handleNotify}>Keep Me Updated</Button>
            </form>
        </div>
    );
}
