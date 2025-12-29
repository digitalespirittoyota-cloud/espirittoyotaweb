// components/seo/Faq.tsx

export default function Faq() {
  const faqs = [
    {
      q: "Which Toyota cars are available at Espirit Toyota showroom?",
      a: "Espirit Toyota offers the complete Toyota car lineup including Innova Hycross, Urban Cruiser Hyryder, Fortuner, Fortuner Legender, Glanza, Hilux, and other latest Toyota models available in India.",
    },
    {
      q: "How can I book a Toyota test drive at Espirit Toyota?",
      a: "You can easily book a Toyota test drive online through our website or visit the nearest Espirit Toyota showroom. Doorstep test drive options are also available for select models.",
    },
    {
      q: "Are Toyota hybrid cars self-charging or plug-in?",
      a: "Toyota hybrid cars use self-charging hybrid technology. They do not require external charging and automatically recharge while driving, offering excellent mileage and convenience.",
    },
    {
      q: "Does Espirit Toyota provide car finance and EMI options?",
      a: "Yes, Espirit Toyota provides flexible car loan options, competitive EMI plans, fast approvals, and support through Toyota Financial Services and leading banks.",
    },
    {
      q: "Is Toyota car service affordable in the long term?",
      a: "Yes, Toyota vehicles are known for low maintenance costs, high durability, and long-term reliability. Espirit Toyota service centers ensure transparent pricing and genuine Toyota parts.",
    },
  ];

  return (
    <section
      className="py-16 bg-gray-50 px-4 text-gray-800"
      aria-labelledby="faq-espirit-toyota"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          id="faq-espirit-toyota"
          className="text-3xl font-bold mb-8 text-center text-gray-900"
        >
          Frequently Asked Questions – Espirit Toyota
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow-md rounded-xl border border-gray-100"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {item.q}
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
