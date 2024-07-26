import Link from "next/link";
import {FacebookIcon} from "lucide-react";
import {FaFacebookF} from "react-icons/fa";
import {CgFacebook, CgInstagram, CgTikcode, CgYoutube} from "react-icons/cg";
import {BsPaypal, BsTiktok, BsYoutube} from "react-icons/bs";
import {Button} from "@/components/ui/button";
import {SiDiscover, SiMastercard, SiVisa} from "react-icons/si";
import {GrMastercard} from "react-icons/gr";
import {Input} from "@/components/ui/input";

export const Footer = () => {
    return (
        <div className="py-14 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-primary/10 mt-14">
            {/*    TOP*/}
            <div className="flex flex-col lg:flex-row justify-between gap-24">
                {/*    LEFT*/}
                <div className="flex flex-col  gap-4 w-full lg:w-1/4 md:w-1/2">
                    <Link href="/" className="hover:text-current">
                        <h3 className="font-semibold"><span className="text-accent">N</span>EKOSTORE</h3>
                    </Link>
                    <p>Karl-Liebknecht-Straße 13 ,
                        10178 Berlin
                    </p>
                    <span className="font-semibold">info@neko-store.com</span>
                    <span className="font-semibold">+49 30 789 1234</span>
                    <div className="flex gap-6 justify-between">
                        <CgFacebook className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgFacebook>
                        <CgInstagram
                            className="text-[26px] cursor-pointer hover:text-accent duration-300"></CgInstagram>
                        <BsYoutube className="text-[26px] cursor-pointer hover:text-accent duration-300"></BsYoutube>
                        <BsTiktok className="text-[26px] cursor-pointer hover:text-accent duration-300"></BsTiktok>
                    </div>
                </div>
                {/*    CENTER*/}
                <div className="hidden lg:flex w-1/2 justify-between">
                    <div className="flex w-full justify-evenly gap-8 text-[20px]">
                        <div className="flex flex-col gap-2">
                            <Link className="flex-grow" href="/">Company</Link>
                            <span
                                className=" hover:text-accent cursor-pointer text-[18px] font-semibold">About Us</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Careers</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Affiliates</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Blog</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Contact</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link className="flex-grow" href="/">Shop</Link>
                            <span
                                className=" hover:text-accent cursor-pointer text-[18px] font-semibold">New Arrivals</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Accessoires</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Men</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Women</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">All Products</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link className="flex-grow" href="/">Help</Link>
                            <span
                                className=" hover:text-accent cursor-pointer text-[18px] font-semibold">Customer Service</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">My Account</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Find a Store</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Legal & Privacy</span>
                            <span className="font-semibold hover:text-accent cursor-pointer text-[18px]">Gift Card</span>
                        </div>
                        {/*<Link href="/list">Shop</Link>*/}
                        {/*<Link href="/">Help</Link>*/}
                    </div>

                </div>

                {/*    RIGHT*/}
                <div className="flex flex-col gap-4 w-full lg:w-1/4 md:w-1/2 pt-12 md:pt-0">
                    <h3 className="uppercase">Subscribe</h3>
                    <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex-1 flex gap-4">
                            <Input type="text" placeholder="Email Adress" className="p-4 w-3/4 transition-all duration-300 "/>
                            <Button className="w-1/4 bg-accent text-white hover:bg-accent-hover">JOIN</Button></div>
                        <span className=" p-2 font-semibold">Secure Payments</span>
                        <div className="flex justify-evenly">
                        <BsPaypal className="text-[26px] cursor-pointer hover:text-accent duration-300"/>
                            <SiMastercard className="text-[26px] cursor-pointer hover:text-accent duration-300"/>
                            <SiVisa className="text-[26px] cursor-pointer hover:text-accent duration-300"/>

                        </div>
                    </div>
                </div>
            </div>
            {/*BOTTOM*/}
            <div className="flex mt-8">
                <span className="font-semibold flex-grow">©2024 Nekostore</span>
            </div>
        </div>
    );
};
