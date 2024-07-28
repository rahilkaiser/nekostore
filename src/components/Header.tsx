import Link from "next/link";
import {Menu} from "@/components/Menu";
import {NavIcons} from "@/components/NavIcons";

export const Header = () => {




    return (
        <div className="z-50 bg-white sticky top-0 py-8 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {/*Desktop Nav*/}
            <div className="hidden container mx-auto lg:flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <Link href="/" className="hover:text-current">
                        <h2><span className="text-accent">N</span>EKOSTORE</h2>
                    </Link>
                    <Link href="/">Homepage</Link>
                    <Link href="/list">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <NavIcons/>
            </div>


            {/*    Mobile NAV*/}
            <div className="flex container mx-auto lg:hidden justify-between items-center">
                <div className="flex items-center gap-8">
                    <Link href="/" className="hover:text-current">
                        <h2><span className="text-accent">N</span>EKOSTORE</h2>
                    </Link>
                </div>
                <div className="flex items-center gap-[26px]">
                    <div className="relative cursor-pointer">
                        <Menu/>
                    </div>
                </div>
            </div>

        </div>
    );
};
