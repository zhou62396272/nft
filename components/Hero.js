import Image from "next/image";
import React from "react";
var nft1 = require("/public/nft1.jpg");
//https://preview.redd.it/oo7lkd16rhl61.jpg?width=900&format=pjpg&auto=webp&s=e23103480e5e598b7f94b4b1b8c8564d4696f267
const Hero = () => {
  return (
    <div className="">
      <div className="w-[1900px] h-[500px]">
        <Image
          className="object-cover max-h-44 brightness-40 grayscale-60"
          src={nft1}
          width=""
          objectFit="fill"
        />
      </div>
      <div className="relative z-10">
        <div className="px-6 text-gray-100 lg:px-10 -mt-96">
          {/* Hero */}
          <h1 className="-mb-2 font-serif text-5xl leading-tight md:text-7xl">
            Discover
          </h1>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            rare digital art
          </h1>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            and collect NFTs
          </h1>
          <button className="px-3 py-2 font-sans font-light bg-transparent rounded-md cursor-pointer hover:bg-white hover:text-gray-900 mt-7 text-md ring-1 ring-white">
            View marketplace
          </button>
          <h1 className="mt-5 font-sans font-light text-md">
            Genesis Estate by Beeple
          </h1>
        </div>
        <div className="h-screen bg-gray-100 mt-52">
          <div className="px-5 text-gray-800 ">
            <h1 className="font-serif text-2xl">Latest artwork</h1>
            {/* full card */}
            <section className="mt-3">
              {/* img */}
              <div className="w-full bg-gray-500 h-[450px]" />
              <div className="bg-white">
                {/* top */}
                <div className=""></div>
                {/* bot */}
                <div></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
