"use client";

import { models } from "../utils/data";
import { ModelCard } from "./ModelCard";

export default function Range() {
    return (
        <section className="max-w-7xl mx-auto my-10 px-4 sm:px-8">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
                Discover the Toyota range
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white">
                {models.map((model) => (
                    <ModelCard key={model.name} {...model} />
                ))}
            </div>
        </section>
    );
}
