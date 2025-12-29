import Image from "next/image";
import whyToyotaImage from "../../../../public/home/whychooseus.jpg";

export default function WhyEspiritToyota() {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="why-choose-espirit"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={whyToyotaImage}
            alt="Why Choose Espirit Toyota – Authorized Toyota Dealer Bhubaneswar"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2
            id="why-choose-espirit"
            className="text-4xl font-bold mb-5 text-gray-900"
          >
            Why Choose Espirit Toyota – Authorized Toyota Dealer in Bhubaneswar
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota Bhubaneswar is a trusted <strong>Toyota dealership</strong>
            offering transparent pricing, premium customer service, and a hassle-free car buying experience.
            Our trained Toyota experts assist you at every step — from selecting the right model, explaining <strong>Toyota safety features</strong>,
            comparing variants, to providing the best <strong>finance and insurance options</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We follow Toyota’s global service standards to ensure accurate vehicle information, timely updates, and <strong>100% genuine Toyota parts</strong> in every service.
            Our priority is delivering a customer-first experience with complete transparency and zero hidden charges.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Espirit Toyota, we redefine car buying and ownership with professionalism, modern facilities, and a friendly environment — reflecting the trust, reliability, and quality Toyota is known for worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}
