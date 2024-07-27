import {Button} from "@/components/ui/button";

export const ProductCustomizer = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="">Choose a color</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div
                        className="absolute w-10 h-10 rounded-full ring-2 ring-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </li>

                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">

                </li>

                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative bg-gray-300 cursor-not-allowed">
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </li>
            </ul>
            <h4 className="">Choose a Size</h4>
            <ul className="flex items-center gap-3">
                <Button className="bg-white text-accent border-accent border hover:bg-pink-50">
                    Small
                </Button>

                <Button className="bg-accent-hover text-white border-accent border hover:bg-accent-hover">
                    Medium
                </Button>

                <Button className="text-gray-600 border-accent border hover:bg-pink-200 cursor-not-allowed bg-pink-200 relative">
                    <div
                        className="absolute w-full h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    Large
                </Button>
            </ul>
        </div>
    );
};
