import {ProductImage} from "@/components/ProductImage";
import {Separator} from "@/components/ui/separator";

export default function SinglePage() {
    return (
        <div className="container mx-auto relative flex flex-col lg:flex-row gap-16 pt-12">

            {/*    IMAGE*/}
            <div className="w-3/4 lg:w-1/3 mx-auto">
                <ProductImage/>
            </div>
            {/*    TEXT*/}
            <div className="flex flex-col">
                <h2 className="">Akatsuki T-shirt</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                </p>
                <Separator />
                <div className="mt-12 flex gap-4 items-center">
                    <h4 className="text-xl text-gray-500 line-through">
                        45€
                    </h4>
                    <h3 className="font-bold ">
                        40.50€
                    </h3>
                </div>
            {/*    ProductCustomizer*/}

            </div>
            {/*    Reviews*/}
        </div>
    );
}
