import Image from "next/image";
import {ProductList} from "@/components/ProductList";
import {Filter} from "@/components/Filter";
import {wixClientServer} from "@/lib/wixClientServer";
import {Suspense} from "react";
import CustomSpinner from "@/components/CustomSpinner";


export default async function ListPage({searchParams}: { searchParams: any }) {

    const wixClient: any = await wixClientServer();

    const category = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");

    return (
        <div className="">
            <div className="">
                <div className=""></div>
                <div className="relative min-h-80">
                    <Image src="/banner1.avif" alt="" fill className="object-cover"/>
                </div>
            </div>

            <div className="mx-auto container flex flex-col">
                <Filter/>
                <Suspense fallback={<CustomSpinner/>}>
                    <ProductList
                        categoryId={category.collection?._id || "00000000-000000-000000-000000000001"}
                        searchParams={searchParams}
                    />
                </Suspense>
            </div>

        </div>
    );
}
