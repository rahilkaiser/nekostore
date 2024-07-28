"use client";

import {useRef, useState} from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

interface ImageData {
    id: number;
    url: string;
}

export const ProductImage = ({images}:{images: any}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);
    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className="w-full p-4">
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                navigation
                pagination={{clickable: false}}
                modules={[Navigation, Pagination]}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                initialSlide={currentIndex}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image._id}>
                        <div className="relative aspect-square w-full">
                            <Image
                                src={images[index].image?.url}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex space-x-4 mt-4 justify-center">
                {images.map((image, index) => (
                    <div
                        key={image._id}
                        className={`w-14 h-14 cursor-pointer transition-transform transform ${
                            currentIndex === index ? 'border-4 rounded-lg border-accent scale-110' : 'border-4 border-transparent'
                        }`}
                        onClick={() => handleSlideChange(index)}
                    >
                        <div className=" w-full h-full aspect-square rounded-lg">
                            <Image
                                src={images[index].image?.url}
                                alt={``}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
