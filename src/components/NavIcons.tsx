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
import {CartModal} from "@/components/CartModal";
import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {motion} from "framer-motion";
import Cookies from "js-cookie";
import {useWixClient} from "@/hooks/useWixClient";
import CustomSpinner from "@/components/CustomSpinner";
import {useCartStore} from "@/hooks/useCartStore";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {wixClientServer} from "@/lib/wixClientServer";
import {useAuthStore} from "@/hooks/useAuthStore";

export default function NavIcons() {
    const router = useRouter();
    const wixClient: any = useWixClient();
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {cart, getCart, count} = useCartStore();
    const {isLoggedIn, setIsLoggedIn} = useAuthStore();

    useEffect(() => {
        setIsLoggedIn(wixClient.auth.loggedIn());
        getCart(wixClient);

        }, [wixClient, getCart, count]
    );

    async function handleProfile() {

        if (!isLoggedIn) {
            router.push("/login");
        }
    }


    async function handleLogout() {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        await wixClient.auth.logout().then(
            (logoutUrl) => {
                setIsLoggedIn(false);
                router.push("/login")
                setIsLoading(false);
            }
        );

    }

    return (<>
            {isLoading ?
                <div className="fixed inset-0 z-50 w-screen h-screen flex justify-center items-center bg-white/50">
                    <CustomSpinner/>
                </div>
                :
                <div className={`flex items-center gap-[26px] relative`}>

                    {/*Search Icon*/}
                    <CgSearch
                        onClick={() => setSearchVisible(!searchVisible)}
                        className="text-[26px] cursor-pointer hover:text-accent duration-300 "></CgSearch>

                    {searchVisible && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            className="absolute left-0 top-12 w-full   ">
                            <Input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search..."
                                className="px-4 py-2 border rounded shadow-lg w-64 transform-all duration-300 bg-white/50 text-black placeholder:text-black"
                                style={{transform: searchVisible ? 'translateX(0)' : 'translateX(-100%)'}}
                            />
                        </motion.div>
                    )}

                    {/*Profile Icon*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div onClick={handleProfile}>
                                <CgProfile
                                    className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgProfile>
                            </div>
                        </DropdownMenuTrigger>
                        {isLoggedIn && <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                router.push("/profile")
                            }}>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="cursor-pointer">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>}
                    </DropdownMenu>

                    {/*Belli Icon*/}
                    <CgBell
                        onClick={() => {
                            router.push("/notification")
                        }}
                        className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgBell>

                    {/*Shopping Cart*/}
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="relative cursor-pointer ">
                                <CgShoppingBag className="text-[26px] hover:text-accent duration-300"/>
                                <div
                                    className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-bold pointer-events-none">{count}
                                </div>
                            </div>
                        </SheetTrigger>
                        <SheetContent className={"flex flex-col"}>
                            <SheetHeader>
                                <SheetTitle>Shopping Cart </SheetTitle>
                            </SheetHeader>

                            <CartModal/>

                        </SheetContent>
                    </Sheet>
                </div>
            }</>
    );
};
