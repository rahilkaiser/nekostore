"use client"
import {Button} from "@/components/ui/button";
import {products} from "@wix/stores";
import {useEffect, useState} from "react";
import {ProductQty} from "@/components/ProductQty";

export const ProductCustomizer = (
    {
        productId,
        variants,
        productOptions
    }: {
        productId: string;
        variants: products.Variant[];
        productOptions: products.ProductOption[];
    }) => {

    const [selectedOptions, setSelectedOptions] = useState<{
        [key: string]: string;
    }>()

    const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

    useEffect(() => {
        const variant = variants.find(v => {
            const variantChoices = v.choices;
            if (!variantChoices || !selectedOptions) return false;
            return Object.entries(selectedOptions).every(([key, value]) => variantChoices[key] === value);
        })

        setSelectedVariant(variant)
    }, [selectedOptions, variants])

    const handleOptionSelection = (optionType: string, choice: string) => {
        setSelectedOptions((prevState) => ({...prevState, [optionType]: choice}));
    }

    /** Checks whether the Variant of the Selected Option is in Stock
     *
     * @param choices
     */
    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;

            if (!variantChoices) {
                return false;
            }

            return (
                Object.entries(choices).every(
                    ([key, value]) => variantChoices[key] === value
                ) &&
                variant.stock?.inStock &&
                variant.stock?.quantity &&
                variant.stock?.quantity > 0
            );
        })
    }

    console.log(selectedOptions)

    return (
        <div className="flex flex-col gap-6">
            {productOptions.map((productOption) => {

                console.log(productOption)
                return <div key={productOption.name}>
                    {/*COLOR*/}
                    <h4 className="">Choose a {productOption.name}</h4>

                    <ul className="flex items-center gap-3">
                        {productOption.choices?.map((choice: any) => {

                                const isDisabled = !isVariantInStock({
                                    ...selectedOptions,
                                    [productOption.name!]: choice.description!,
                                });

                                let isSelected = false;
                                if (selectedOptions) {
                                    isSelected
                                        = selectedOptions[productOption.name!] === choice.description;
                                }

                                const clickHandler = isDisabled ? undefined : () => handleOptionSelection(productOption.name!, choice.description!);

                                return productOption.name == "Color" ? (
                                    <li
                                        className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                                        onClick={clickHandler}
                                        style={{
                                            backgroundColor: choice.value,
                                            cursor: isDisabled ? "not-allowed" : "pointer",
                                        }}>
                                        {
                                            isSelected && <div
                                                className="absolute w-10 h-10 rounded-full ring-2 ring-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                                            </div>
                                        }
                                        {
                                            isDisabled && <div
                                                className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        }
                                    </li>
                                ) : (
                                    !isDisabled ?
                                        (!isSelected ? <Button
                                                    onClick={clickHandler}
                                                    className="bg-white text-accent border-accent border hover:bg-pink-50">
                                                    {choice.description}
                                                </Button> :
                                                <Button
                                                    className="bg-accent-hover text-white border-accent border hover:bg-accent-hover">
                                                    Medium
                                                </Button>
                                        )
                                        : <Button
                                            onClick={clickHandler}
                                            className="text-gray-600 border-accent border hover:bg-pink-200 cursor-not-allowed bg-pink-200 relative">
                                            <div
                                                className="absolute w-full h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                            {choice.description}
                                        </Button>
                                )

                            }
                        )}
                    </ul>
                </div>
            })}
            <ProductQty productId={productId} variantId={selectedVariant?._id || "00000000-000000-000000-000000000000"}
                        stockNumber={selectedVariant?.stock?.quantity || 0}/>
        </div>
    );
};
