import {NextRequest, NextResponse} from "next/server";
import {createClient, OAuthStrategy} from "@wix/sdk";

export const middleware = async (req:NextRequest) => {

    // Creates a visitor token such that users that are not logged in can add items to the cart
    // Visitor token will be added as a Cookie

    const cookies = req.cookies;

    const res = NextResponse.next()

    const refreshToken = cookies["refreshToken"];

    if (refreshToken) {
        console.log("RefreshToken is available");
        return res;
    }

    const wixClient = createClient({
        auth: OAuthStrategy({clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID}),
    });

    const tokens = await wixClient.auth.generateVisitorTokens();

    res.cookies.set("refreshToken" as any, JSON.stringify(tokens.refreshToken) as any, { maxAge: (60*60*24*10) } as any);

    return res;
}