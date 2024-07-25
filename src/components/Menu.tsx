"use client"

import {FaHamburger} from "react-icons/fa";
import {useState} from "react";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
            <CiMenuFries size={50}/>
            {open && (
                <div className="">
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )}
        </div>
    );
};
