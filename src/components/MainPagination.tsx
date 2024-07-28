"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


export const MainPagination = (
    {
        totalPages,
        currentPage,
        hasPrevPage,
        hasNextPage,
    }: {
        totalPages: number;
        currentPage: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    }
) => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const createPageURl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString())
        replace(`${pathName}?${params.toString()}`);
    }
    console.log(pathName)

    return (
        pathName === "/list" ?
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => {
                                if (hasPrevPage) {
                                    createPageURl(currentPage - 1)
                                }
                            }}
                            className={`${!hasPrevPage ? "disabled opacity-55 text-opacity-50 cursor-not-allowed" : "bg-red-300 hover:bg-red-300 cursor-pointer"}`}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => {
                        page = page - 1

                        return <PaginationItem key={page}>
                            <PaginationLink
                                onClick={() => createPageURl(page)}
                                isActive={currentPage === (page)}
                            >
                                {page + 1}
                            </PaginationLink>
                        </PaginationItem>
                    })}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => {
                                if (hasNextPage) {
                                    createPageURl(currentPage + 1)
                                }
                            }
                            }
                            className={`${!hasNextPage ? "disabled opacity-55 text-opacity-50 cursor-not-allowed" : "bg-red-300 hover:bg-red-300 cursor-pointer"}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div> : <></>

    );
};
