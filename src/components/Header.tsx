import Link from "next/link";
import {Menu} from "@/components/Menu";

export const Header = () => {


    return (
        <div className="bg-white sticky top-0 py-8 z-40 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className="container mx-auto">
                <Link href="/" className="hover:text-current">
                    <h2><span className="text-accent">N</span>EKOSTORE</h2>
                </Link>
            </div>
            <div>
                <Menu/>
            </div>
        </div>
    );
};
