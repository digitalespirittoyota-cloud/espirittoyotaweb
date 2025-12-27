



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

