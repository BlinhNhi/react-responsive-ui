import React from "react";
import BannerImage from "../../assets/website/orange-pattern.jpg";

// const banner = 'https://shopsy-tcj.netlify.app/assets/orange-pattern-w2kUn2Xh.jpg';
const bannerImg = {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "200px",
    width: "100%",
}

function SubsCribe() {
    return (
        <div data-aos="zoom-in" className="bg-gray-100 dark:bg-gray-800 text-white mb-10" style={bannerImg}>
            <div className="container backdrop-blur-sm py-10 ">
                <div className=" sm:text-left flex flex-col gap-4 items-center">
                    <h1 className="text-2xl sm:text-4xl font-semibold">Get Notified About New Products</h1>
                    <input type="text" placeholder="Enter Your Emial" className="w-1/2 p-3 rounded-md text-black outline-none" data-aos="fade-up"></input>
                </div>
            </div>
        </div>
    );
}

export default SubsCribe;