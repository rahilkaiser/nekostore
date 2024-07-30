import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {wixClientServer} from "@/lib/wixClientServer";
import {products} from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import {MainPagination} from "@/components/MainPagination";


const PRODUCTS_PER_PAGE = 10;

export const ProductList = async ({categoryId, limit, searchParams}: {
    categoryId: string;
    limit?: number;
    searchParams?: any
}) => {

    const wixClient: any = await wixClientServer();

    const categories = await wixClient.collections.queryCollections().find()

    const getCategoryIdBySearchParams = () => {
        const catName: string = searchParams?.others;
        let resList: string[] = [];
        categories.items.forEach((category: products.Collection) => {

            if (catName == category.slug) {
                resList.push(category._id!)
            }
        })

        return resList
    }

    let queryBuilder = wixClient.products
        .queryProducts()
        .startsWith("name", searchParams?.name || "")
        .hasAll("collectionIds", [categoryId, ...getCategoryIdBySearchParams()])
        .gt("priceData.price", searchParams?.min || 0)
        .lt("priceData.price", searchParams?.max || 99999)
        .limit(limit || PRODUCTS_PER_PAGE)
        .skip(searchParams?.page ? parseInt(searchParams?.page)* (limit || PRODUCTS_PER_PAGE) : 0)

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");

        if (sortType === "asc") {
            queryBuilder = queryBuilder.ascending(sortBy);
        }
        if (sortType === "desc") {
            queryBuilder = queryBuilder.descending(sortBy);
        }
    }

    const res = await queryBuilder.find()
        // .then((r) => {
        //     console.log(r.totalPages)
        // });

    const itemsCount = res.count;

    return (
        <div className="flex flex-col justify-start items-start gap-8  ">
            <div
                className={`flex mt-12 gap-x-8 gap-y-16 justify-start flex-wrap w-full `}>
                {res.items.map((product: products.Product) => (
                    <Link key={product._id} href={"/" + product.slug}
                          className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                        <div className="relative h-80 ">
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
                            <span
                                className="font-semibold">{product.priceData?.price} {product.priceData?.currency}</span>
                        </div>
                        {product.additionalInfoSections &&
                            <div className="text-sm text-primary"
                                 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.additionalInfoSections?.find((section: any) => section.title === "shortDesc")?.description || "")}}>
                            </div>}
                        <Button
                            className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 font-semibold hover:accent-accent-hover hover:text-white bg-white hover:bg-accent">View Details
                        </Button>
                    </Link>


                ))}

            </div>
            {<div><MainPagination
                totalPages={res.totalPages}
                currentPage={res.currentPage || 0 }
                hasNextPage={res.hasNext()}
                hasPrevPage={res.hasPrev()}
            /></div>}
        </div>
    );
};
