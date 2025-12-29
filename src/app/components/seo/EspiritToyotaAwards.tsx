import Image from "next/image";
import awardsImage from "../../../../public/home/award.jpg";

export default function EspiritToyotaAwards() {
  return (
    <section
      className="py-16 bg-white px-4 text-gray-800"
      aria-labelledby="espirit-toyota-awards"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={awardsImage}
            alt="Awards and achievements of Espirit Toyota authorized dealership"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2
            id="espirit-toyota-awards"
            className="text-3xl font-bold mb-4"
          >
            Espirit Toyota Awards & Achievements | Authorized Toyota Dealer
          </h2>

          <p className="text-lg text-gray-700">
            Espirit Toyota is a trusted and authorized Toyota dealership known
            for excellence in car sales, customer satisfaction, and after-sales
            service. Over the years, we have received multiple Toyota awards that
            highlight our commitment to quality, transparency, and customer-first
            service.
          </p>

          <p className="mt-4 text-lg text-gray-700">
            These recognitions reflect our consistent performance in delivering
            a premium Toyota ownership experience through expert guidance,
            certified service standards, and genuine Toyota customer care.
          </p>

          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>• Toyota Sales Excellence Award</li>
            <li>• Best Toyota Dealership for Customer Satisfaction</li>
            <li>• Toyota Certified Service Quality Award</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
