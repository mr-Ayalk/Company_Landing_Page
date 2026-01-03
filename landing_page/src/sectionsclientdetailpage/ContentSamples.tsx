import Image from "next/image";
import React from "react";

// 1. Define the Interface for TypeScript
interface ContentSampleItem {
    title: string;
    desc: string;
    img: string;
}

interface ContentSamplesProps {
    contentSamples: ContentSampleItem[];
    accentColor: string;
}

// 2. Update the component to accept { contentSamples, accentColor }
export const ContentSamples = ({
    contentSamples,
    accentColor,
}: ContentSamplesProps) => {
    // If no samples are provided for a project, don't render the section
    if (!contentSamples || contentSamples.length === 0) return null;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#111827] mb-12">
                Content Samples
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {contentSamples.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        {/* Image Container */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-lg mb-6 bg-gray-100 aspect-[16/10] border border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={item.img}
                                alt={item.title}
                              fill
                                className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-90"
                            />
                            {/* Dynamic Hover Overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                style={{ backgroundColor: accentColor }}
                            />
                        </div>

                        {/* Title */}
                        <h4 className="font-extrabold text-xl mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                            {item.title}
                        </h4>

                        {/* Dynamic Accent Line */}
                        <div
                            className="w-8 h-1 rounded-full mb-3 transition-all duration-500 group-hover:w-16"
                            style={{ backgroundColor: accentColor }}
                        />

                        {/* Description */}
                        <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
