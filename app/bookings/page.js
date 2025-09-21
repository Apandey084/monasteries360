// import React from 'react'

// const booking = () => {
//   return (
   
//     <>
    
//     <div className="relative top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

    
//     </div>
    
//     </>
//   )
// }

// export default booking


import React from "react";

const Booking = () => {
  const cards = [
    { title: "Membership Ticket", description: "Book your membership tickets easily." },
    { title: "Festival", description: "Register for upcoming festivals." },
    { title: "Donation / Contribution", description: "Support us with your contributions." },
    { title: "Stickers / Products", description: "Buy exclusive merchandise and products." },
  ];

  return (

    <>
   

     
   
  <div className="relative z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white px-4 py-8">
      
   {/* Page Headers */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center pt-[50px]   ">
        Bookings
      </h1>
               
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mt-[20px]  container mx-auto ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 text-center text-white hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>

     </>
  );
};

export default Booking;
