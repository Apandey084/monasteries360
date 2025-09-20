// import React from 'react'

// const admin = () => {
//   return (

//     <>
    
//     <div className="relative top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

 
      


// <div className=' text-white font-bold'>admin</div>


//     </div>
    
    
//     </>
    
//   )
// }

// export default admin


"use client";
import React, { useState } from "react";

const adminpanel = () => {
  const sections = [
    { title: "Featured Monuments" },
    { title: "Virtual Tours" },
    { title: "Digital Archives" },
    { title: "Upcoming Events" },
  ];

  const [openModal, setOpenModal] = useState(null);

  return (
    <>
     <div className="relative top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

      <div className="min-h-screen w-full text-white px-4 py-8">


       <h1 className="text-white text-3xl font-bold text-center"> Explore our Feature </h1>
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>

      {/* Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            onClick={() => setOpenModal(section.title)}
            className="bg-[#111827] border border-gray-700 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-sm text-gray-400 mt-2">
              Manage and update {section.title.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#111827] border border-gray-700 rounded-xl shadow-lg p-6 w-full max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{openModal}</h2>
              <button
                onClick={() => setOpenModal(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Modal Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Upload Image</label>
                <input
                  type="file"
                  className="w-full border border-gray-600 rounded-lg p-2 bg-[#1f2937] text-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Heading</label>
                <input
                  type="text"
                  placeholder="Enter heading"
                  className="w-full border border-gray-600 rounded-lg p-2 bg-[#1f2937] text-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Paragraph</label>
                <textarea
                  placeholder="Enter description"
                  rows={4}
                  className="w-full border border-gray-600 rounded-lg p-2 bg-[#1f2937] text-white"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 font-semibold">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default adminpanel;
