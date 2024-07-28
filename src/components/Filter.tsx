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


    function handleFilterChange(value: string, type: string) {
        console.log(value, type)
        const params = new URLSearchParams(searchParams);
        params.set(type, value);
        replace(`${pathName}?${params.toString()}`)
    }

    function clearFilters() {
        replace(`${pathName}`)
    }

    return (
        <div className="mt-12 flex flex-col gap-4 ">
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <Input
                        onChange={(e) => {handleFilterChange(e.target.value, "min")}}
                        type="text"
                        name="min"
                        placeholder="min price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />
                    <Input
                        onChange={(e) => {handleFilterChange(e.target.value, "max")}}
                        type="text"
                        name="max"
                        placeholder="max price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />

                    {/*<Select*/}
                    {/*    name={"sizes"}*/}
                    {/*    onValueChange={(value) => {handleFilterChange(value, "sizes")}}*/}
                    {/*    defaultValue="all sizes">*/}
                    {/*    <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">*/}
                    {/*        <SelectValue placeholder="Size"/>*/}
                    {/*    </SelectTrigger>*/}
                    {/*    <SelectContent>*/}
                    {/*        <SelectItem value="s">S</SelectItem>*/}
                    {/*        <SelectItem value="m">M</SelectItem>*/}
                    {/*        <SelectItem value="l">L</SelectItem>*/}
                    {/*        <SelectItem value="xl">XL</SelectItem>*/}
                    {/*        <SelectItem value="all sizes">All Sizes</SelectItem>*/}
                    {/*    </SelectContent>*/}
                    {/*</Select>*/}

                    {/*<Select*/}
                    {/*    name={"colors"}*/}
                    {/*    onValueChange={(value) => {handleFilterChange(value, "colors")}}*/}
                    {/*    defaultValue="all colors">*/}
                    {/*    <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">*/}
                    {/*        <SelectValue placeholder="Color"/>*/}
                    {/*    </SelectTrigger>*/}
                    {/*    <SelectContent>*/}
                    {/*        <SelectItem value="red">Red</SelectItem>*/}
                    {/*        <SelectItem value="green">Green</SelectItem>*/}
                    {/*        <SelectItem value="blue">Blue</SelectItem>*/}
                    {/*        <SelectItem value="all colors">All Colors</SelectItem>*/}
                    {/*    </SelectContent>*/}
                    {/*</Select>*/}

                    <Select
                        name={"cat"}
                        onValueChange={(value) => {handleFilterChange(value, "cat")}}
                        defaultValue="all-products">
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
                        onValueChange={(value) => {handleFilterChange(value, "others")}}
                        defaultValue="recommended">
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
                </div>
                <div className="ml-24">
                    <Select
                        name={"sort"}
                        onValueChange={(value) => {handleFilterChange(value, "sort")}}
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
            <div className="flex">
                <Button onClick={clearFilters}>
                    Clear All Filters
                </Button>
            </div>
        </div>
    );
};
