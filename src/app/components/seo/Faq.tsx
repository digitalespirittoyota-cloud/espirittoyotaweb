// components/seo/Faq.tsx
export default function Faq() {
  const faqs = [
    {
      q: "Which Toyota cars are available at Espirit Toyota?",
      a: "We offer the full Toyota lineup including Innova Hycross, Hyryder, Fortuner, Glanza, Hilux, Legender, and more.",
    },
    {
      q: "Can I book a test drive at Espirit Toyota?",
      a: "Yes, customers can easily book a test drive online or visit our showroom for an instant slot.",
    },
    {
      q: "Do hybrid Toyotas require external charging?",
      a: "No. Toyota Hybrids are self-charging—they charge automatically as you drive.",
    },
    {
      q: "Does Espirit Toyota provide finance and EMI options?",
      a: "Yes, we offer flexible loan plans, quick approvals, and Toyota Finance support.",
    },
    {
      q: "Is Toyota service expensive?",
      a: "Toyota service is known for low maintenance costs and long-term reliability.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions – Espirit Toyota</h2>

        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="p-5 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-lg">{item.q}</h3>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
