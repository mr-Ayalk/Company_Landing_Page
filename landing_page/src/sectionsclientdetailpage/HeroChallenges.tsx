import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 1. Define the Interface
interface HeroChallengesProps {
    companyName: string;
    logo: string;
    description: string;
    challenges: string[];
    accentColor?: string;
}

export const HeroChallenges = ({
    companyName,
    logo,
    description,
    challenges,
    accentColor = "#7C3AED",
}: HeroChallengesProps) => ( // 2. Replace 'any' with the interface
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-16 pt-6">
            <Link href="/" className="inline-block">
                <button
                    style={{ color: accentColor }}
                    className="flex items-center gap-2 font-bold text-sm mb-2 uppercase tracking-tight"
                >
                    <ArrowLeft size={16} strokeWidth={3} /> Back to Projects
                </button>
            </Link>

            <div
                style={{ backgroundColor: accentColor }}
                className="w-16 h-1 rounded-full"
            />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* 3. Added 'relative' here so the 'fill' Image works correctly */}
            <div className="relative w-24 h-24 shrink-0 bg-white shadow-sm rounded-xl p-2 flex items-center justify-center border border-gray-100">
                <Image
                    src={logo}
                    alt={`${companyName} logo`}
                    fill
                    className="object-contain p-2"
                />
            </div>
            <h1
                style={{ color: accentColor }}
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight"
            >
                {companyName}
            </h1>
        </div>

        <div className="mb-20 max-w-5xl">
            <p className="text-gray-500 text-lg leading-relaxed font-medium whitespace-pre-line">
                {description}
            </p>
        </div>

        <div>
            <h2 className="text-3xl font-black text-[#111827] mb-10">
                Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">
                {challenges.map((text: string, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                        <div
                            style={{ backgroundColor: accentColor }}
                            className="w-2 h-2 rounded-full mt-[10px] shrink-0"
                        />
                        <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);