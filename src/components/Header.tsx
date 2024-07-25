import Link from "next/link";
import {Menu} from "@/components/Menu";
import {CgBell, CgProfile, CgSearch, CgShoppingBag} from "react-icons/cg";

export const Header = () => {


    return (
        <div className="bg-white sticky top-0 py-8 z-40 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
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
                <div className="flex items-center gap-[26px]">
                    <CgSearch className="text-[26px] cursor-pointer"></CgSearch>
                    <CgProfile className="text-[26px] cursor-pointer"></CgProfile>
                    <CgBell className="text-[26px] cursor-pointer"></CgBell>

                    <div className="relative cursor-pointer">
                        <CgShoppingBag className="text-[26px]"/>
                        <div
                            className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-bold pointer-events-none">3
                        </div>
                    </div>
                </div>
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
