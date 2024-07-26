"use client"
import {CgBell, CgProfile, CgSearch, CgShoppingBag} from "react-icons/cg";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export const NavIcons = () => {
    const router = useRouter();
    const isLoggedIn = false;

    function handleProfile() {
        if(!isLoggedIn) {
            router.push("/login");
            console.log("dnjkf")
        }
    }


    return (
        <div className="flex items-center gap-[26px]">

            {/*Search Icon*/}
            <CgSearch
                onClick={() => {
                }}
                className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgSearch>

            {/*Profile Icon*/}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div onClick={handleProfile}>
                    <CgProfile  className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgProfile>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => {
                        router.push("/profile")
                    }}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/*Belli Icon*/}
            <CgBell
                onClick={() => {
                    router.push("/notification")
                }}
                className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgBell>

            {/*Shopping Cart*/}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="relative cursor-pointer ">
                        <CgShoppingBag className="text-[26px] hover:text-accent duration-300"/>
                        <div
                            className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-bold pointer-events-none">3
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel >Shopping Cart</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <div className="flex px-2 justify-between items-center">
                        <div><span className=" font-semibold">Subtotal</span></div>
                        <div><span className=" font-semibold">0 €</span></div>
                    </div>
                    <div className="px-2 text-primary/80 text-sm">
                        <p>Shipping and taxes calculated at checkout</p>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <Button
                            onClick={() => {
                                router.push("/checkout");
                            }}
                            className="bg-white text-black border border-primary hover:bg-white">
                            View Cart
                        </Button>
                        <Button onClick={() => {
                            router.push("/checkout");
                        }}>
                            Checkout
                        </Button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
