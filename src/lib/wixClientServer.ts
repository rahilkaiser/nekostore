import {createClient, OAuthStrategy, Tokens} from "@wix/sdk";
import {collections, products} from "@wix/stores";
import {cookies} from "next/headers"


export const wixClientServer = async () => {
    let refreshToken = "{}";

    try {
        const cookieStore: any = cookies()
        const token = cookieStore.get("refreshToken")?.value;
        if (token) {
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
            collections
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID as string,
            tokens: tokens as Tokens,
        })
    });

    return wixClient;
}