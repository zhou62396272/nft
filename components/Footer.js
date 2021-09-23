import React from "react";

const Footer = () => {
  return (
    <div className="pl-4 text-white pt-14 pb-80 bg-slate md:flex lg:pl-40">
      <div className="md:w-1/2">
        <div className="flex items-center pl-1 space-x-1">
          <div className="w-3.5 h-3.5 rotate-45 bg-white" />
          <div className="w-5 h-5 bg-white rounded-full" />
        </div>
        <h1 className="mt-2 font-serif text-2xl">KnownOrigin.</h1>
        <h1 className="text-gray-400 font-extralight text-md">
          Discover and collect rare digital artwork
        </h1>
        <h1 className="font-bold mt-9">
          Stay in the picture, join our newsletter
        </h1>
        <div className="pt-3">
          <input
            className="px-3.5 py-2 text-gray-900 placeholder-gray-400 bg-gray-100 outline-none rounded-l-lg border-r border-gray-300"
            placeholder="art@knownorigin.io"
          />
          <button className="px-4 py-2 bg-gray-100 rounded-r-lg text-slate">
            Subscribe
          </button>
          <h1 className="mt-12 mb-20 font-mono font-thin leading-tight tracking-widest text-gray-400 text-tiny">
            KNOWNORIGIN LABS LIMITED (COMPANY NO. 13047869)
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 md:flex md:space-x-20">
        <div className="space-y-2 font-extralight text-md">
          <h1 className="font-bold">Follow Us</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Twitter</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Reddit</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Instagram</h1>
          <h1 className="cursor-pointer hover:text-gray-300">YouTube</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Discord</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Telegram</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Medium</h1>
          <h1 className="cursor-pointer hover:text-gray-300">Linktree</h1>
        </div>
        <div className="mt-5 space-y-2 md:mt-0 font-extralight text-md">
          <h1 className="font-bold">Help</h1>
          <h1 className="cursor-pointer hover:text-gray-300">
            Documentation / Press kit
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300">
            Terms of Service
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300">Privacy</h1>
          <h1 className="cursor-pointer hover:text-gray-300">
            Code of Conduct
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300">Support</h1>
          <h1 className="cursor-pointer hover:text-gray-300">
            Report infringement
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300">
            Partnership enquiry
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
