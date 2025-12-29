import Image from "next/image";
import serviceImage from "../../../../public/home/ToyotaService.jpg";

export default function EspiritToyotaService() {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="toyota-service-espirit"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={serviceImage}
            alt="Toyota Service Center Espirit Toyota Bhubaneswar"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2
            id="toyota-service-espirit"
            className="text-4xl font-bold mb-5 text-gray-900"
          >
            Toyota Service Center – Expert Care at Espirit Toyota Bhubaneswar
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota Bhubaneswar provides professional <strong>Toyota car servicing</strong> with
            modern diagnostic tools, express service bays, and <strong>Toyota-certified technicians</strong>.
            We ensure every vehicle is maintained to Toyota’s global standards for optimal performance, safety, and long-term durability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our services include transparent estimates, regular status updates, genuine Toyota parts, and multi-level quality checks.
            From routine maintenance, accident repairs, wheel alignment, to major mechanical work — your Toyota is handled with expert care.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With fast turnaround, friendly staff, and digital service records, Espirit Toyota guarantees a seamless ownership experience, delivering peace of mind to every Toyota owner in Bhubaneswar.
          </p>
        </div>

      </div>
    </section>
  );
}
