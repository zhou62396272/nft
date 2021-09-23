import { useRouter } from "next/router";
import React from "react";

const Filler = () => {
  const router = useRouter();
  return (
    <div>
      <section className="text-gray-100 py-36 md:py-40 bg-dark">
        <div className="flex flex-col px-7 md:flex-row md:items-center">
          <h1 className="font-serif text-4.5xl md:w-1/2">
            Become an Artist on KnownOrigin
          </h1>
          <div className="pt-14 md:w-1/2 md:pt-0">
            <h1 className="font-light text-md">
              Join our community of creatives, showcase and sell your digital
              artworks. Digitally sign your work by creating a tokenized
              certificate.
            </h1>
            <button
              onClick={() => router.push("/create-item")}
              className="px-4 mt-4 py-1.5 font-light hover:bg-gray-100 hover:text-dark rounded-md text-md ring-1 ring-white"
            >
              Sell Art Now
            </button>
          </div>
        </div>
      </section>

      <section className="text-gray-700 bg-gray-100 py-36 md:py-40">
        <div className="flex flex-col px-7 md:flex-row md:items-center">
          <h1 className="font-serif text-4.5xl md:w-1/2">Join Our Community</h1>
          <div className="pt-14 md:w-1/2 md:pt-0">
            <h1 className="font-light text-md">
              Meet the KnownOrigin team, artists and collectors for platform
              updates, announcements, and more...
            </h1>
            <button
              onClick={() => router.push("/create-item")}
              className="px-4 mt-4 py-1.5 font-light hover:bg-gray-700 hover:text-white rounded-md text-md ring-1 ring-gray-700"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filler;
