import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {SelectItemIndicator} from "@radix-ui/react-select";
import {Button} from "@/components/ui/button";

export const Filter = () => {
    return (
        <div className="mt-12 flex flex-col gap-4 ">
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <Select>
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Gender"/>
                        </SelectTrigger>
                        <SelectContent defaultValue="all">
                            <SelectItem value="physical">Men</SelectItem>
                            <SelectItem value="digital">Women</SelectItem>
                            <SelectItem value="all gender">All</SelectItem>
                        </SelectContent>
                    </Select>

                    <Input
                        type="text"
                        name="min"
                        placeholder="min price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />
                    <Input
                        type="text"
                        name="max"
                        placeholder="max price"
                        className="text-xs rounded transition-all duration-300 max-w-28"
                    />

                    <Select defaultValue="all sizes">
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Size"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="s">S</SelectItem>
                            <SelectItem value="m">M</SelectItem>
                            <SelectItem value="l">L</SelectItem>
                            <SelectItem value="xl">XL</SelectItem>
                            <SelectItem value="all sizes">All Sizes</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select defaultValue="all colors">
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Color"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="red">Red</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="all colors">All Colors</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select defaultValue="all categories">
                        <SelectTrigger className="w-[180px] border-black border-2 focus:border-none">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="t-shirt">T-Shirt</SelectItem>
                            <SelectItem value="hoodies">Hoodies</SelectItem>
                            <SelectItem value="jacket">Jacket</SelectItem>
                            <SelectItem value="Pants">Pants</SelectItem>
                            <SelectItem value="all categories">All Categories</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select defaultValue="recommended">
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
                    <Select>
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
                <Button>
                    Clear All Filters
                </Button>
            </div>
        </div>
    );
};
