import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export const ProductList = () => {
    return (
        <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61GPVnjyt8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>

                    <Image
                        className="absolute object-cover rounded-md"

                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71rWxE39MnL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Akatsuki T-Shirt</span>
                    <span className="font-semibold">49 €</span>
                </div>
                <div className="text-sm text-primary">
                    My Description
                </div>
                <Button className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 text-xs hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">Add to Cart</Button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61GPVnjyt8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>

                    <Image
                        className="absolute object-cover rounded-md"

                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71rWxE39MnL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Akatsuki T-Shirt</span>
                    <span className="font-semibold">49 €</span>
                </div>
                <div className="text-sm text-primary">
                    My Description
                </div>
                <Button className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 text-xs hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">Add to Cart</Button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61GPVnjyt8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>

                    <Image
                        className="absolute object-cover rounded-md"

                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71rWxE39MnL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Akatsuki T-Shirt</span>
                    <span className="font-semibold">49 €</span>
                </div>
                <div className="text-sm text-primary">
                    My Description
                </div>
                <Button className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 text-xs hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">Add to Cart</Button>
            </Link>

            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61GPVnjyt8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>

                    <Image
                        className="absolute object-cover rounded-md"

                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71rWxE39MnL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                        alt="" fill sizes="25vw"/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Akatsuki T-Shirt</span>
                    <span className="font-semibold">49 €</span>
                </div>
                <div className="text-sm text-primary">
                    My Description
                </div>
                <Button className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 text-xs hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">Add to Cart</Button>
            </Link>

        </div>
    );
};
