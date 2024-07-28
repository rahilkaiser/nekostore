"use client"
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
    return (
        <div className="overflow-x-scroll flex gap-6 scrollbar-hide overflow-y-hidden">
            <div className="flex gap-4 md:gap-8 ">
                <Link href="/list?cat=test" className="flex shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="flex flex-col">
                        <div className="relative bg-slate-100 h-80 aspect-square rounded-md overflow-clip">
                            <Image
                                src="https://i.etsystatic.com/44851741/r/il/59ff3a/5982554456/il_fullxfull.5982554456_lqij.jpg"
                                alt="" fill sizes="20vw" className="object-cover hover:scale-105 duration-500" />
                        </div>
                        <h3 className="mt-4 font-medium ">Category Name</h3></div>
                </Link>
            </div>

        </div>
    );
};
