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

const AdminPanel = () => {
  const sections = [
    { title: "Featured Monuments" },
    { title: "Virtual Tours" },
    { title: "Digital Archives" },
    { title: "Upcoming Events" },
  ];

  const [openModal, setOpenModal] = useState(null); // ✅ fixed

  return (
    <div className="relative z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white px-4 py-8">
      
      {/* Page Headers */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center pt-[50px]  ">
        Admin Panel
      </h1>
   

      {/* Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[20px]">
        {sections.map((section, idx) => (
          <div
            key={idx}
            onClick={() => setOpenModal(section.title)}
            className="bg-[#111827] border border-gray-700 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{section.title}</h3>
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
  );
};

export default AdminPanel;
