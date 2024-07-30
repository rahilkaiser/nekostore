"use client"
import {useToast} from "@/components/ui/use-toast";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Profile() {
    const {toast} = useToast();
    const [email, setEmail] = useState("");

    const SaveChangesNotify = async () => {

        toast({
            duration:8000,
            className: "bg-green-200",
            title: "Success !",
            description: "User was successfully updated!",
        })
    };

    return (
        <div className="container mx-auto flex flex-col justify-center items-center h-96">
            Profile Page
        </div>
    );
}
