import Image from "next/image";
import whyToyotaImage from "../../../../public/home/whychooseus.jpg";
export default function WhyEspiritToyota() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={whyToyotaImage.src}
            alt="Why Choose Espirit Toyota"
            width={650}
            height={420}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Why Choose Espirit Toyota?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota has built a reputation for excellence by offering
            transparent pricing, premium customer service, and a completely
            hassle-free car buying experience. From the moment you enter our
            showroom, our trained Toyota experts guide you at every step —
            helping you choose the right model, explaining safety features,
            comparing variants, and offering the best finance & insurance options.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We follow Toyota’s global service standards, ensuring accurate
            vehicle information, timely updates, and 100% genuine parts in every
            service. Our priority is to deliver a customer-first experience with
            complete transparency and zero hidden charges.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Espirit Toyota, we redefine the car buying and ownership journey
            with professionalism, advanced facilities, and a friendly environment
            that reflects the trust Toyota is known for worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}
