// export default function EspiritToyotaLocations() {
//   const locations = [
//     {
//       city: "Cuttack",
//       address: "2514, NH-5, Telengapentha, Cuttack – 754001",
//     },
//     {
//       city: "Bhubaneswar",
//       address:
//         "Jaydev Vihar – Nandan Kanan Road, Plot No. 370/2119, Patia, Khurda Dist, Bhubaneswar – 751024",
//     },
//     {
//       city: "Sambalpur",
//       address:
//         "Plot No. 225/226, RMC Road (NH-6), AT/PO – Bareipali, P.S – Ainthapali, Sambalpur – 768006",
//     },
//     {
//       city: "Angul",
//       address: "Panchamahalla Chhak, Karadagadia, Angul – 759132",
//     },
//     {
//       city: "Rourkela",
//       address:
//         "Plot No. B/12 & 13, Kalunga Industrial Estate, Kalunga, Rourkela – 770031",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50 px-4 text-gray-900">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* Content */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             Espirit Toyota Showroom Locations
//           </h2>

//           <p className="text-lg text-gray-700 mb-4">
//             Espirit Toyota has expanded its presence across major connected
//             areas of Odisha to offer easy accessibility for all Toyota customers.
//             Whether you're planning a test drive, servicing your vehicle, or
//             exploring new Toyota models, our locations are strategically placed
//             for your convenience.
//           </p>

//           {/* Locations List */}
//           <div className="mt-6 space-y-4">
//             {locations.map((loc, index) => (
//               <div
//                 key={index}
//                 className="border-l-4 border-red-600 pl-4"
//               >
//                 <h3 className="font-semibold text-lg">
//                   Espirit Toyota – {loc.city}
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   {loc.address}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="mt-6 text-lg text-gray-700">
//             Each Espirit Toyota facility is equipped with advanced automotive
//             technology, trained technicians, and customer-friendly teams to
//             ensure a seamless and trustworthy ownership experience.
//           </p>
//         </div>

//         {/* Image */}
//         <div>
//           <img
//             src="/images/espirit-toyota-location.jpg"
//             alt="Espirit Toyota Showroom Locations"
//             className="w-full rounded-lg shadow-lg object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



import { MapPin } from "lucide-react";

export default function EspiritToyotaLocations() {
  const locations = [
    {
      city: "Cuttack",
      address: "2514, NH-5, Telengapentha, Cuttack – 754001",
    },
    {
      city: "Bhubaneswar",
      address:
        "Jaydev Vihar – Nandan Kanan Road, Plot No. 370/2119, Patia, Khurda Dist, Bhubaneswar – 751024",
    },
    {
      city: "Sambalpur",
      address:
        "Plot No. 225/226, RMC Road (NH-6), AT/PO – Bareipali, P.S – Ainthapali, Sambalpur – 768006",
    },
    {
      city: "Angul",
      address: "Panchamahalla Chhak, Karadagadia, Angul – 759132",
    },
    {
      city: "Rourkela",
      address:
        "Plot No. B/12 & 13, Kalunga Industrial Estate, Kalunga, Rourkela – 770031",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-sm tracking-widest text-red-600 font-semibold uppercase">
            Espirit Toyota Network
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Showroom Locations
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Espirit Toyota operates across key cities in Odisha, offering
            premium sales, service, and ownership support. Visit the nearest
            showroom to experience Toyota reliability, innovation, and
            customer-first service.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-500 transition-all duration-300"
            >
              {/* Accent Bar */}
              <div className="absolute left-0 top-8 h-12 w-1.5 bg-red-600 rounded-r-full" />

              {/* Content */}
              <div className="pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-red-600 w-5 h-5" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Espirit Toyota – {loc.city}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {loc.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Every Espirit Toyota location is equipped with Toyota-trained
            technicians, modern service bays, and customer-focused teams to
            ensure a world-class ownership experience — from your first visit
            to every service thereafter.
          </p>
        </div>

      </div>
    </section>
  );
}

