import {HeroSlider} from "@/components/HeroSlider";
import {ProductList} from "@/components/ProductList";
import {CategoryList} from "@/components/CategoryList";
import {wixClientServer} from "@/lib/wixClientServer";
import {Suspense} from "react";
import CustomSpinner from "@/components/CustomSpinner";


export default async function Home() {

    // const wixClient:any = await wixClientServer();
    // const res = await wixClient.products.queryProducts().find();
    //
    // console.log(res);

    return (
        <div>
            <section>
                <HeroSlider/>
            </section>
            <section className="container mx-auto">
                <h2 className="pt-14">Popular Products</h2>
                <Suspense fallback={<CustomSpinner/>}>
                    <ProductList
                        categoryId={process.env.NEXT_PUBLIC_POPULAR_PRODUCTS_CATEGORY_ID}
                        limit={4}
                    />
                </Suspense>

            </section>
            <section className="container mx-auto">
                <h2 className="py-14">Categories</h2>
                <Suspense fallback={"Loading"}>
                    <CategoryList/>
                </Suspense>
            </section>
            {/*<section className="container mx-auto">*/}
            {/*    <h2 className="p-14">New Products</h2>*/}
            {/*    <ProductList />*/}
            {/*</section>*/}
        </div>
    );
}
