import Image from "next/image";
import {RadioGroup} from "@/components/ui/radio-group";
import {ProductList} from "@/components/ProductList";
import {Filter} from "@/components/Filter";


export default function ListPage() {
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
                    <h3 className="mt-12 ">Shoes for you</h3>
                    <ProductList/>


                {/*    Products*/}


            </div>

        </div>
    );
}
