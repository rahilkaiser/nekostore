"use server"

import {wixClientServer} from "@/lib/wixClientServer";
import Cookies from "js-cookie";
import {Tokens} from "@wix/sdk";


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

    try {
        const res = await wixClient.auth.sendPasswordResetEmail(
            email,
            `${window.location.origin}/login`
        );
    } catch (error) {
        console.log(error);
    }
}

export const setupCookiesToLogin = async (
    {token} :{token:Tokens}
) => {

    Cookies.set("refreshToken", JSON.stringify(token.refreshToken), {
        expires: 2,
        secure: true,
        sameSite: "Lax",
        path: "/",
    });
}