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

const images: ImageData[] = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
];

export const ProductImage = () => {
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
                    <SwiperSlide key={image.id}>
                        <div className="relative aspect-square w-full">
                            <Image
                                src={image.url}
                                alt={`Image ${image.id}`}
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
                        key={image.id}
                        className={` w-14 h-14 cursor-pointer transition-transform transform ${
                            currentIndex === index ? 'border-4 rounded-lg border-accent scale-110' : 'border-4 border-transparent'
                        }`}
                        onClick={() => handleSlideChange(index)}
                    >
                        <div className=" w-full h-full aspect-square rounded-lg">
                            <Image
                                src={image.url}
                                alt={`Thumbnail ${image.id}`}
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
