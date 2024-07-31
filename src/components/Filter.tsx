"use client"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {valueOf} from "clsx";

export const Filter = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const catOthersList = ["new-arrival", "popular", "best-sellers", "recommended"]
    const catList = ["t-shirt", "hoodies", "jacket", "pants", "all-products"]

    function handleFilterChange(value: string, type: string) {
        const params = new URLSearchParams(searchParams);
        params.set(type, value);
        replace(`${pathName}?${params.toString()}`)
    }

    function clearFilters() {
        replace(`${pathName}`)
    }

    function getInitalSearchParams(type: string) {
        const params = new URLSearchParams(searchParams);
        console.log(params.get(type))

        switch (type) {
            case "cat":
                if (params.get(type)) {
                    const valCat = params.get(type)
                    if (catList.includes(valCat)) {
                        return valCat;
                    }
                }
                return "all-products";
            case "others":
                if (params.get("cat") || params.get(type)) {
                    const valOther = params.get("cat") || params.get(type);
                    if (catOthersList.includes(valOther)) {
                        console.log(valOther)
                        return valOther;
                    }
                }
                return "recommended";
            case "min":
                if (params.get(type)) {
                    return params.get(type)
                }
                return "";
            case "max":
                if (params.get(type)) {
                    return params.get(type)
                }
                return "";

            default:

        }
    }

    return (
        <div className="mt-12 flex flex-col gap-4 ">
            <div className="flex justify-between">
                <div className="flex gap-6 flex-col lg:flex-row justify-center items-center w-full">
                    <Input
                        defaultValue={getInitalSearchParams("min")}
                        onChange={(e) => {
                            handleFilterChange(e.target.value, "min")
                        }}
                        type="text"
                        name="min"
                        placeholder="min price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />
                    <Input
                        defaultValue={getInitalSearchParams("max")}
                        onChange={(e) => {
                            handleFilterChange(e.target.value, "max")
                        }}
                        type="text"
                        name="max"
                        placeholder="max price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />

                    <Select
                        name={"cat"}
                        onValueChange={(value) => {
                            handleFilterChange(value, "cat")
                        }}
                        defaultValue={getInitalSearchParams("cat")}>
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="t-shirt">T-Shirt</SelectItem>
                            <SelectItem value="hoodies">Hoodies</SelectItem>
                            <SelectItem value="jacket">Jacket</SelectItem>
                            <SelectItem value="pants">Pants</SelectItem>
                            <SelectItem value="all-products">All Categories</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        name={"others"}
                        onValueChange={(value) => {
                            handleFilterChange(value, "others")
                        }}
                        defaultValue={getInitalSearchParams("others")}>
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Others"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new-arrival">New Arrival</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                            <SelectItem value="best-sellers">Best Sellers</SelectItem>
                            <SelectItem value="recommended">Recommended</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="lg:ml-24">
                        <Select
                            name={"sort"}
                            onValueChange={(value) => {
                                handleFilterChange(value, "sort")
                            }}
                        >
                            <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                                <SelectValue placeholder="Sort by"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="asc price">Price (low to high)</SelectItem>
                                <SelectItem value="desc price">Price (high to low)</SelectItem>
                                <SelectItem value="asc lastUpdated">Newest</SelectItem>
                                <SelectItem value="desc lastUpdated">Oldest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>


            </div>
            <div className="flex justify-center lg:justify-start">
                <Button onClick={clearFilters}>
                    Clear All Filters
                </Button>
            </div>
        </div>
    );
};
