import awardsImage from "../../../../public/home/award.jpg";
export default function EspiritToyotaAwards() {
  return (
    <section className="py-16 bg-white px-4 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={awardsImage.src}
            alt="Espirit Toyota Awards"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Espirit Toyota – Awards & Achievements
          </h2>

          <p className="text-lg text-gray-700">
            Over the years, Espirit Toyota has earned multiple recognitions
            for exceptional customer satisfaction, service excellence, and
            outstanding sales performance.
          </p>

          <p className="mt-4 text-lg text-gray-700">
            Our dedication to quality, transparency, and customer-first
            approach has positioned us among the top Toyota dealerships
            in the region. These awards reflect our commitment to delivering
            a world-class Toyota experience.
          </p>

          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>• Toyota Sales Excellence Award</li>
            <li>• Best Customer Satisfaction Dealership</li>
            <li>• Toyota Certified Service Quality Award</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
