"use client"

import {FaHamburger} from "react-icons/fa";
import {useState} from "react";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {useCartStore} from "@/hooks/useCartStore";

export const Menu = () => {
    const [open, setOpen] = useState(false);
    const {count} = useCartStore();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent "/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/" className="hover:text-current">
                        <h2><span className="text-accent">N</span>EKOSTORE</h2>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                        <Link href="/">Home</Link>
                        <Link href="/list">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/">Logout</Link>
                        <Link href="/">Cart({count})</Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};
