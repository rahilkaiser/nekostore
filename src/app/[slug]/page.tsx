import {ProductImage} from "@/components/ProductImage";
import {Separator} from "@/components/ui/separator";
import {ProductCustomizer} from "@/components/ProductCustomizer";
import {ProductQty} from "@/components/ProductQty";

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
                <Separator className="my-8"/>
                <div className="mt-12 flex gap-4 items-center">
                    <h4 className="text-xl text-gray-500 line-through">
                        45€
                    </h4>
                    <h3 className="font-bold ">
                        40.50€
                    </h3>
                </div>
                <Separator className="my-8"/>
                <div>
                    <ProductCustomizer/>
                </div>
                <Separator className="my-8"/>
                <div>
                    <ProductQty/>
                </div>
                <Separator className="my-8"/>
                <div className="flex flex-col gap-8">
                    <div>
                        <h4 className="">Akatsuki T-shirt</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div>
                        <h4 className="">Akatsuki T-shirt</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div>
                        <h4 className="">Akatsuki T-shirt</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos
                            et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>


                </div>
                {/*    ProductCustomizer*/}

            </div>
            {/*    Reviews*/}
        </div>
    );
}
