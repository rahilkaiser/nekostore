"use client"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {useWixClient} from "@/hooks/useWixClient";
import {useCartStore} from "@/hooks/useCartStore";
import {media as wixMedia} from "@wix/sdk"
import CustomSpinner from "@/components/CustomSpinner";
import {ScrollArea} from "@/components/ui/scroll-area";
import {SheetFooter} from "@/components/ui/sheet";
import {FaX} from "react-icons/fa6";
import {CgMathMinus, CgMathPlus} from "react-icons/cg";


export const CartModal = () => {




    const router = useRouter();
    const wixClient: any = useWixClient();

    const {cart, isLoading, removeItem, addItem, decreaseItem} = useCartStore();

    return (
        <>
            {!isLoading ? ((!cart.lineItems) ? <div>Cart is Empty</div> : <>{/*Product View*/}
                    <div className="flex flex-col justify-between gap-4 relative">
                        {/*    Shopping Items*/}

                        <ScrollArea className="h-[70vh] xl:-[74vh] pr-4 mb-4">
                            {cart.lineItems?.map((item) => {
                            return (
                                <div key={item._id}>
                                    <div className="flex justify-between gap-2">
                                        {item.image && <Image
                                            key={item._id}
                                            className="object-contain rounded-md"
                                            src={wixMedia.getScaledToFillImageUrl(item.image, 110, 110, {})}
                                            alt="" width={110} height={110}/>}

                                        <div className="flex flex-col justify-between items-start w-full">
                                            <div className="flex flex-col items-stretch w-full">
                                                <div className="font-bold flex items-center justify-between gap-2">
                                                    <span
                                                        className="flex-grow hover:text-accent duration-300 cursor-pointer">
                                                        {item.productName?.original}
                                                    </span>
                                                    <span><FaX
                                                        onClick={() => {
                                                            removeItem(wixClient, item._id!)
                                                        }}
                                                        className="text-xs cursor-pointer"
                                                    />
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-green-800 font-semibold text-sm">{item.availability?.status}</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full pb-2">

                                                <div className="flex justify-between gap-4 items-center">
                                                    <CgMathMinus className="font-bold cursor-pointer text-xl"
                                                                 onClick={() => {
                                                                     decreaseItem(wixClient, item._id!)
                                                                 }}
                                                    />
                                                    <span className="font-semibold">{item.quantity}</span>
                                                    <CgMathPlus className="font-bold cursor-pointer text-xl"
                                                                onClick={() => {
                                                                    if (item.quantity && item.quantity < item.availability?.quantityAvailable!) {
                                                                        addItem(wixClient, item.catalogReference?.catalogItemId!, item.catalogReference?.options?.variantId!, 1)
                                                                    }
                                                                }}
                                                    />
                                                </div>

                                                <span
                                                    className="flex-shrink-0 text-xl font-bold">
                                                    {
                                                        (item.quantity && item.price?.amount) &&
                                                        item.quantity! * parseInt(item.price?.amount!)

                                                    } €
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                            })}
                        </ScrollArea>
                    </div>

                    {/*Total*/}

                    <SheetFooter>
                        <div className="flex flex-col justify-center gap-2 w-full">
                            <div className="flex px-2 justify-between items-center">
                                <div><span className=" font-semibold">Subtotal</span></div>
                                <div><span className=" font-semibold">{(cart as any).subtotal.amount} €</span></div>
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
                                <Button
                                    onClick={() => {
                                        router.push("/checkout");
                                    }}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </SheetFooter>
                </>) :
                <CustomSpinner/>

            }
        </>
    );
};
