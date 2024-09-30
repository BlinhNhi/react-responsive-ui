import React from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";

import Img1 from '../../assets/women/women1.png';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';


const ProductData = [
    {
        id: 1,
        title: 'Women Ethnic',
        rate: 5.0,
        color: 'White',
        aosDelay: "0",
        img: Img1
    },
    {
        id: 2,
        title: 'Women western',
        rate: 4.5,
        color: 'Red',
        aosDelay: "200",
        img: Img2
    },
    {
        id: 3,
        title: 'Goggles',
        rate: 4.7,
        color: 'brown',
        aosDelay: "400",
        img: Img3
    },
    {
        id: 4,
        title: 'Printed T-Shirt',
        rate: 4.4,
        color: 'Yellow',
        aosDelay: "600",
        img: Img4
    },
    {
        id: 5,
        title: 'Fashin T-Shirt',
        rate: 4.5,
        color: 'Pink',
        aosDelay: "800",
        img: Img2
    },
]
function Products() {
    return (
        <div className="mt-14 mb-12 ">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-base text-yellow-500">Top Selling Products For You</p>
                    <h1 className="text-3xl font-bold">
                        Products
                    </h1>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                {/* Body */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {ProductData.map((data) => (
                            <div
                                key={data.id}
                                data-aos="fade-up"
                                data-aos-delay={data?.aosDelay}
                                className="space-y-3">
                                <img src={data.img} alt={data?.title} className="h-[220px] w-[150px] object-cover rounded-md"></img>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold">{data?.title}</h3>
                                    <p className="text-sm text-gray-600">{data?.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span className="">{data?.rate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-orange-400 text-white py-2 px-3 rounded-md">
                            View All Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;