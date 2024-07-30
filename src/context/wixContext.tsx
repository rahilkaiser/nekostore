"use client"

import {createClient, OAuthStrategy, Token, Tokens, WixClient} from "@wix/sdk";
import {products, collections} from "@wix/stores";
import Cookies from "js-cookie";
import {createContext, ReactNode} from "react";
import {currentCart} from "@wix/ecom";

let refreshToken = "{}";

try {
    const token = Cookies.get("refreshToken");
    if (token && token != "undefined") {
        refreshToken = JSON.parse(token);
    }
} catch (error) {
    console.error("Failed to parse refreshToken:", error);
}

refreshToken = refreshToken || "{}";

const tokens = {
    refreshToken: refreshToken,
    accessToken: {
        value: "",
        expiresAt: 0
    }
};

const wixClient = createClient({
    modules: {
        products,
        collections,
        currentCart
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID as string,
        tokens: tokens as Tokens,
    })
});
export type WixClient = typeof wixClient;
export const  WixClientContext = createContext<WixClient>(wixClient as WixClient)
export  const WixClientContextProvider = ({children}:{children:ReactNode}) => {
    return <WixClientContext.Provider value={wixClient as WixClient}>{children}</WixClientContext.Provider>

}
