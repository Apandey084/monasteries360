// import React from 'react'

// const virtualtour = () => {
//   return (


//     <>
//     <div className="relative top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">


//           <div className='bg-black text-white font-bold'>virtualtour</div>
//     </div>
    
//     </>

//   )
// }

// export default virtualtour

"use client";

import React from "react";
import Image from "next/image";

const VirtualTour = () => {
  const monasteries = [
    { name: "Monastery A", location: "Kathmandu, Nepal" },
    { name: "Monastery B", location: "Lhasa, Tibet" },
    { name: "Monastery C", location: "Bhutan" },
    { name: "Monastery D", location: "India" },
    { name: "Monastery E", location: "Sri Lanka" },
    { name: "Monastery F", location: "Mongolia" },
  ];

  // External image URL
  const base64Image =
    "https://assets.zeezest.com/images/PROD_4_1667192700528_thumb_500.jpeg";

  return (
    <div className="relative min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] p-8">
      {/* Header */}
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        Virtual Tour
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {monasteries.map((monastery, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={base64Image}
                alt={monastery.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg">
                  View Tour
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">
                {monastery.name}
              </h2>
              <p className="text-gray-300 text-sm">{monastery.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTour;
