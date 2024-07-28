import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {wixClientServer} from "@/lib/wixClientServer";
import {products} from "@wix/stores";
import DOMPurify, {DOMPurifyI} from "isomorphic-dompurify";

const PRODUCTS_PER_PAGE = 20;

export const ProductList = async ({categoryId, limit}: { categoryId: string; limit?: number; }) => {

    const wixClient: any = await wixClientServer();
    const res = await wixClient.products
        .queryProducts()
        .eq("collectionIds", categoryId)
        .limit(limit || PRODUCTS_PER_PAGE)
        .find();

    console.log(res);
    const itemsCount = res.count;

    return (
        <div className={`flex mt-12 gap-x-8 gap-y-16 ${(res.items.length < 4) ? 'justify-start' : 'justify-between'} flex-wrap`}>
            {res.items.map((product: products.Product) => (
                <Link key={product._id} href={"/" + product.slug}
                      className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                    <div className="relative w-full h-80">
                        <Image
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                            src={product.media?.mainMedia?.image?.url || ""}
                            alt="" fill sizes="25vw"/>

                        {product.media?.items && <Image
                            className="absolute object-cover rounded-md"

                            src={product.media?.items[1]?.image?.url || ""}
                            alt="" fill sizes="25vw"/>}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">{product.priceData?.price} {product.priceData?.currency}</span>
                    </div>
                    {product.additionalInfoSections &&
                        <div className="text-sm text-primary"
                             dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.additionalInfoSections?.find((section: any) => section.title === "shortDesc")?.description || "")}}>
                        </div>}
                    <Button
                        className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 font-semibold hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">Add
                        to Cart
                    </Button>
                </Link>


            ))}


        </div>
    );
};
