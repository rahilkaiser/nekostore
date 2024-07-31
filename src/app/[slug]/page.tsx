import {ProductImage} from "@/components/ProductImage";
import {Separator} from "@/components/ui/separator";
import {ProductCustomizer} from "@/components/ProductCustomizer";
import {ProductQty} from "@/components/ProductQty";
import {wixClientServer} from "@/lib/wixClientServer";
import {notFound} from "next/navigation";

export default async function SinglePage({params}: { params: any }) {

    const wixClient: any = await wixClientServer();

    const products = await wixClient.products.queryProducts().eq("slug", params.slug).find();

    if (!products.items[0]) {
        return notFound();
    }

    const product = products.items[0];


    return (
        <div className="container mx-auto relative flex flex-col lg:flex-row gap-16 pt-12">

            {/*    IMAGE*/}
            <div className="w-3/4 lg:w-1/3 mx-auto">
                <ProductImage images={product.media?.items}/>
            </div>
            {/*    TEXT*/}
            <div className="flex flex-col">
                <h2 className="">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <Separator className="my-8"/>
                <div className="mt-12 flex gap-4 items-center">
                    {

                        (product.price?.price == product.price?.discountedPrice) ?
                            <h3 className="font-bold ">
                                {product.price?.price} {product.price?.currency}
                            </h3> :
                            <>
                                <h4 className="text-xl text-gray-500 line-through">
                                    {product.price?.price} {product.price?.currency}
                                </h4>
                                <h3 className="font-bold ">
                                    {product.price?.discountedPrice} {product.price?.currency}
                                </h3>
                            </>
                    }
                </div>
                <Separator className="my-8"/>
                <div>
                    { product.variants && product.productOptions ?
                        (<ProductCustomizer
                        productId={product._id}
                        variants={product.variants}
                        productOptions={product.productOptions}
                    />) : <ProductQty
                            productId={product._id}
                            variantId={"00000000-000000-000000-000000000000"}
                            stockNumber={product.stock?.quantity || 0}

                        />
                    }
                </div>
                {/*<Separator className="my-8"/>*/}
                {/*<div>*/}
                {/*    <ProductQty/>*/}
                {/*</div>*/}
                <Separator className="my-8"/>
                <div className="flex flex-col gap-8">
                    {product.additionalInfoSections?.map((section: any) => {
                            return <div key={section._id}>
                                <h4 className="">{section.title}</h4>
                                <p className="text-gray-500">{section.description}
                                </p>
                            </div>
                        })
                    }
                </div>
                {/*    ProductCustomizer*/}

            </div>
            {/*    Reviews*/}
        </div>
    );
}
