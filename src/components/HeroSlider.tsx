"use client"

import {useRef, useState} from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Pagination} from "swiper/modules";

const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/5822652/pexels-photo-5822652.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/15225721/pexels-photo-15225721/free-photo-of-brunette-woman-posing-in-a-winter-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        url: "/",
        bg: "bg-gradient-to-r from-green-50 to-red-50",
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

export const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const swiperRef = useRef(null);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };


    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden relative">
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:5000,
                    disableOnInteraction: false

                }}
                speed={1000}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                className="h-full"
                modules={[Autoplay]}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}
                    >
                        <div className={`${slide.bg} w-full h-full flex flex-col gap-16 lg:flex-row`}>
                            {/* Text Container */}
                            <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center items-center text-center gap-8">
                                <h2>{slide.description}</h2>
                                <h1>{slide.title}</h1>
                                <Link href={slide.url}>
                                    <Button className="bg-accent hover:bg-accent-hover duration-300 font-bold text-xl">
                                        Shop Now
                                    </Button>
                                </Link>
                            </div>
                            {/* Image Container */}
                            <div className="h-1/2 lg:w-1/2 lg:h-full relative">
                                <Image src={slide.img} alt={slide.title} fill sizes="100%" className="object-cover"/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute mx-auto left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2 z-40">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`w-3 h-3 rounded-full ring-1 ring-accent cursor-pointer flex items-center justify-center ${currentSlide === index ? "scale-150" : ""}`}
                        onClick={() => handleSlideChange(index)}
                    >
                        {currentSlide === index && (
                            <div className="w-[6px] h-[6px] bg-accent/60 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
