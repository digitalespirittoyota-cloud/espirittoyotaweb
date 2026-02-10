"use client";

type LegacySectionProps = {
  title: string;
  paragraphs: string[];
};

export default function LegacySection({
  title,
  paragraphs,
}: LegacySectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div
        className="
          max-w-[1400px] mx-auto px-6
          grid grid-cols-1 lg:grid-cols-3
          gap-10 lg:gap-20
        "
      >
        {/* LEFT TITLE */}
<h2
  className="
    text-4xl sm:text-5xl
    lg:text-[20px]
    xl:text-4xl
    font-light leading-tight
    max-w-sm
  "
>
  {title}
</h2>

        {/* RIGHT TEXT */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="
                text-gray-700
                text-sm sm:text-base
                leading-relaxed
              "
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}