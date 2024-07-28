import Link from "next/link";
import Image from "next/image";
import {useWixClient} from "@/hooks/useWixClient";
import {wixClientServer} from "@/lib/wixClientServer";

export const CategoryList = async () => {

    const wixClient: any = await wixClientServer();

    const categories = await wixClient.collections.queryCollections().find();

    return (


        <div className="overflow-x-scroll w-full scrollbar-hide overflow-y-hidden">
            <div className="flex gap-4 md:gap-6 ">

                {categories.items.map((item) => (

                    <Link key={item._id} href={`/list?cat=${item.slug}`} className="flex mr-20 shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                        <div className="flex flex-col">
                            <div className="relative bg-slate-100 h-80 aspect-square rounded-md overflow-clip">
                                <Image
                                    src={item.media?.mainMedia?.image?.url || ""}
                                    alt="" fill sizes="20vw" className="object-cover hover:scale-105 duration-500"/>
                            </div>
                            <h3 className="mt-4 font-medium ">{item.name}</h3></div>
                    </Link>
                ))}

            </div>

        </div>

    );
};
