import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import Image from "next/image";


export const CartModal = () => {
    const router = useRouter();

    return (
        <>
            {/*Product View*/}
            <div className="flex justify-between gap-4">
                {/*    Shopping Items*/}
                <Image
                    className="object-cover rounded-md"
                    src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61GPVnjyt8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png"
                    alt="" width={60} height={60}/>

                <div className="flex flex-col justify-between items-start flex-grow w-full">
                    <div className="flex flex-col">
                        <div className="font-semibold flex items-center justify-between gap-2">
                            <span className="hover:text-accent duration-300 cursor-pointer">Akatsuki Shirt</span>
                            <span className="flex-shrink-0">40 €</span>
                        </div>
                        <span className="text-green-800 font-semibold text-sm">
                            Available
                        </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span>Qty 1</span>
                        <span
                            onClick={() => {
                                //     Remove Item
                            }}
                            className="text-accent font-semibold cursor-pointer">Remove</span>
                    </div>
                </div>
            </div>

            {/*Total*/}
            <DropdownMenuSeparator/>
            <div className="flex px-2 justify-between items-center">
                <div><span className=" font-semibold">Subtotal</span></div>
                <div><span className=" font-semibold">0 €</span></div>
            </div>
            <div className="px-2 text-primary/80 text-sm">
                <p>Shipping and taxes calculated at checkout</p>
            </div>
            <div className="flex justify-between items-center p-2">
                <Button
                    onClick={() => {
                        router.push("/cart");
                    }}
                    className="bg-white text-black border border-primary hover:bg-gray-200">
                    View Cart
                </Button>
                <Button onClick={() => {
                    router.push("/checkout");
                }}>
                    Checkout
                </Button>
            </div>
        </>
    );
};
