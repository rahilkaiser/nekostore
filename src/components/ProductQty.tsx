"use client"
import {Button} from "@/components/ui/button";
import {CgMathMinus, CgMathPlus, CgShoppingBag} from "react-icons/cg";
import {useState} from "react";

export const ProductQty = () => {

    const [quantity, setQuantity] = useState(1);

    // Temp
    const stock = 4;

    function handleQty(qty:string) {
        if (qty === "decrease" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if(qty === "increase" && quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h4>Choose a Quantity</h4>
            <div className="flex gap-4 flex-col lg:flex-row justify-between items-stretch lg:items-center">
                <div className="py-2 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Button onClick={()=> handleQty("decrease")}>
                            <CgMathMinus className="text-xl"/>

                        </Button>
                        <span className="text-lg font-semibold px-8">
                        {quantity}
                        </span>
                        <Button onClick={() => handleQty("increase")}>
                            <CgMathPlus className="text-xl"/>
                        </Button>
                        <div className="text-xs">Only <span
                            className="text-accent font-semibold">4 items</span> left! <br/>{"Don't"} miss it
                        </div>
                    </div>
                </div>

                <div className="flex justify-end flex-grow"><Button
                    className=" w-full lg:w-36 text-sm disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                    Add to Cart
                </Button></div>
            </div>

        </div>
    );
};

