import React from "react";
import Image from "next/image";

// 1. Define the Interface
interface FinalOutcomeProps {
    tools: string[];
    finalOutcome: string;
    accentColor?: string; // Optional because it has a default value
}

export const FinalOutcome = (
    { tools, finalOutcome, accentColor = "#7C3AED" }: FinalOutcomeProps // 2. Apply the Interface here
) => (
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
            <h2 className="text-[28px] font-bold text-gray-900 mb-12">
                Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                {tools?.map((toolPath: string, i: number) => (
                    // 3. Added relative container for Next.js Image "fill"
                    <div key={i} className="relative h-10 w-24">
                        <Image
                            src={toolPath}
                            fill
                            className="object-contain"
                            alt={`Tool icon ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>

        <div
            style={{ backgroundColor: accentColor }}
            className="rounded-[3.5rem] px-8 py-20 md:py-28 text-center text-white shadow-2xl relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
                Final Outcome
            </h2>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium relative z-10">
                {finalOutcome}
            </p>
            <button
                className="relative z-10 bg-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{ color: accentColor }}
            >
                Start Your Project
            </button>
        </div>
    </section>
);
