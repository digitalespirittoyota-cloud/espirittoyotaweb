import { MapPin } from "lucide-react";

export default function EspiritToyotaLocations() {
  const locations = [
    {
      city: "Cuttack",
      address: "2514, NH-5, Telengapentha, Cuttack, Odisha – 754001",
    },
    {
      city: "Bhubaneswar",
      address:
        "Jaydev Vihar – Nandan Kanan Road, Plot No. 370/2119, Patia, Khurda District, Bhubaneswar, Odisha – 751024",
    },
    {
      city: "Sambalpur",
      address:
        "Plot No. 225/226, RMC Road (NH-6), AT/PO Bareipali, PS Ainthapali, Sambalpur, Odisha – 768006",
    },
    {
      city: "Angul",
      address: "Panchamahalla Chhak, Karadagadia, Angul, Odisha – 759132",
    },
    {
      city: "Rourkela",
      address:
        "Plot No. B/12 & 13, Kalunga Industrial Estate, Kalunga, Rourkela, Odisha – 770031",
    },
  ];

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="espirit-toyota-locations"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-sm tracking-widest text-red-600 font-semibold uppercase">
            Espirit Toyota Showroom Network
          </span>

          <h2
            id="espirit-toyota-locations"
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Espirit Toyota Showroom Locations in Odisha
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Espirit Toyota is an authorized Toyota dealer in Odisha with showrooms
            across Bhubaneswar, Cuttack, Sambalpur, Angul, and Rourkela. Visit your
            nearest Toyota showroom for new car sales, test drive booking, and
            certified Toyota service support.
          </p>
        </div>

        {/* LOCATIONS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-500 transition-all duration-300"
            >
              {/* ACCENT BAR */}
              <div className="absolute left-0 top-8 h-12 w-1.5 bg-red-600 rounded-r-full" />

              {/* CONTENT */}
              <div className="pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-red-600 w-5 h-5" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Espirit Toyota {loc.city} Showroom
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {loc.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Each Espirit Toyota showroom is equipped with Toyota-trained
            professionals, modern service infrastructure, and customer-centric
            support to deliver a premium Toyota ownership experience across Odisha.
          </p>
        </div>

      </div>
    </section>
  );
}
