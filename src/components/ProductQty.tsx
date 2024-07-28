"use client"
import {Button} from "@/components/ui/button";
import {CgMathMinus, CgMathPlus, CgShoppingBag} from "react-icons/cg";
import {useEffect, useState} from "react";
import {useWixClient} from "@/hooks/useWixClient";

export const ProductQty = (
    {
        productId,
        variantId,
        stockNumber
    }: {
        productId: string,
        variantId?: string,
        stockNumber: number,
    }
) => {

    const [quantity, setQuantity] = useState(1);

    // Temp
    const stock = 4;

    function handleQty(qty: string) {
        if (qty === "decrease" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (qty === "increase" && quantity < stockNumber) {
            setQuantity(quantity + 1);
        }
    }

    const wixClient = useWixClient();

    useEffect(()=> {
       if (stockNumber<quantity && stockNumber > 0) {
           setQuantity(stockNumber)
       }
    },[stockNumber])


    return (
        <div className="flex flex-col gap-4">
            <h4>Choose a Quantity</h4>
            <div className="flex gap-4 flex-col lg:flex-row justify-between items-stretch lg:items-center">
                <div className="py-2 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Button onClick={() => handleQty("decrease")} disabled={quantity === 1}>
                            <CgMathMinus className="text-xl"/>
                        </Button>
                        <span className="text-lg font-semibold px-8">
                        {quantity}
                        </span>
                        <Button onClick={() => handleQty("increase")} disabled={quantity === stockNumber}>
                            <CgMathPlus className="text-xl"/>
                        </Button>
                        {stockNumber < 1 ? (<div className="text-xs">
                            Product is out of stock
                        </div>) : (
                            <div className="text-xs">Only <span
                                className="text-accent font-semibold">{stockNumber} items</span> left! <br/>{"Don't"} miss it
                            </div>
                        )}
                    </div>
                </div>

                <div className={`flex justify-end flex-grow ${stockNumber == 0 && "cursor-not-allowed"}`}>
                    <Button
                        disabled={stockNumber==0}
                    className="w-full lg:w-36 text-sm disabled:bg-gray-500">
                    Add to Cart
                </Button></div>
            </div>

        </div>
    );
};

