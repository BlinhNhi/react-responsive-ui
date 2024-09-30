import { FaStar } from "react-icons/fa";

import Image1 from '../../assets/top_product/shirt.png'
import Image2 from '../../assets/top_product/shirt2.png'
import Image3 from '../../assets/top_product/shirt3.png'

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: 'Casual Wear',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        img: Image2,
        title: 'Printed shirt',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        img: Image3,
        title: 'Women shirt',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]
function TopProduct() {
    return (
        <div>
            <div className="container ">
                <div className="text-left mb-28 ">
                    <p className="text-base text-yellow-500" data-aos="fade-up">Top Rated Products for you</p>
                    <h1 className="text-3xl font-bold" data-aos="fade-up">
                        Best Products
                    </h1>
                    <p className="text-sm text-gray-400" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                {/* Body */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data) => (
                        <div
                            data-aos="zoom-in"
                            className="rounded-2xl  dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                            <div className="h-[100px]">
                                <img
                                    src={data?.img}
                                    alt={data?.description}
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                ></img>
                            </div>
                            {/* detail section */}
                            <div className="p-4">
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                </div>
                                <h1 className="text-xl font-bold">
                                    {data?.title}
                                </h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-base line-clamp-2">{data?.description}</p>
                                <button className="bg-orange-400 hover:scale-105 duration-300 text-gray-100 py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400">Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopProduct;