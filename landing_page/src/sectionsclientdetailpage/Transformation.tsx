import React from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";

// 1. Define the Interface
interface TransformationProps {
    beforeImage: string;
    afterImage: string;
    transformationPoints: {
        before: string[];
        after: string[];
    };
    companyName: string;
    accentColor?: string;
}

export const Transformation = (
    {
        beforeImage,
        afterImage,
        transformationPoints,
        companyName,
        accentColor = "#7C3AED",
    }: TransformationProps // 2. Use the interface instead of 'any'
) => (
    <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16">
                Before & After Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Before Column */}
                <div>
                    <h3 className="text-center font-bold text-xl mb-6 text-gray-800">
                        Before Eyoha
                    </h3>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-200 aspect-[4/3] mb-8 border-4 border-white">
                        <Image
                            src={beforeImage}
                            // 3. Use companyName here to resolve the 'unused variable' error
                            alt={`${companyName} branding before transformation`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <ul className="space-y-4 px-6">
                        {transformationPoints.before.map(
                            (t: string, i: number) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-sm text-gray-500 items-center"
                                >
                                    <X
                                        size={16}
                                        className="text-red-500"
                                        strokeWidth={3}
                                    />
                                    {t}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* After Column */}
                <div>
                    <h3 className="text-center font-bold text-xl mb-6 text-gray-800">
                        After Eyoha
                    </h3>
                    <div
                        style={{ borderColor: accentColor }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] mb-8 border-4"
                    >
                        {/* 4. Swapped <img> for optimized <Image /> */}
                        <Image
                            src={afterImage}
                            alt={`${companyName} branding after Eyoha transformation`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <ul className="space-y-4 px-6">
                        {transformationPoints.after.map(
                            (t: string, i: number) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-sm text-gray-900 font-bold items-center"
                                >
                                    <Check
                                        size={16}
                                        className="text-green-500"
                                        strokeWidth={3}
                                    />
                                    {t}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
