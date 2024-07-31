"use server"

import {wixClientServer} from "@/lib/wixClientServer";


export const updateUser = async (
    {
        memberId,
        username,
        email,
        phoneNumber,

    }: {
        memberId:string;
        username: string;
        email: string;
        phoneNumber: string;
    }
) => {
    const wixClient:any = await wixClientServer();

    try {
        const res = await wixClient.members?.updateMember(
            memberId,
            {
                contact:{
                    phones: [phoneNumber] || undefined,
                },
               loginEmail: email || undefined,
                profile:{
                    nickname : username || undefined,
                }
            }
        );

        console.log("!WWWWWWW",res);
    } catch (err) {
        console.log(err);
    }
}

export const resetPassword = async  (
    {
        email
    } : {
        email:string
    })=> {
    const wixClient:any = await wixClientServer();

    console.log("USSER", email);
    try {
        const res = await wixClient.auth.sendPasswordResetEmail(
            email,
            `${window.location.origin}/login`
        );
    } catch (error) {
        console.log(error);
    }
}