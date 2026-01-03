import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

// 1. Define the internal object structure
interface TestimonialData {
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

// 2. Define the Component props
interface TestimonialProps {
    testimonial: TestimonialData;
    accentColor?: string;
}

export const Testimonial = (
    { testimonial, accentColor = "#F97316" }: TestimonialProps // 3. Apply the interface
) => (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 text-center relative">
            <div
                style={{ backgroundColor: accentColor }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
            >
                <Quote size={24} fill="currentColor" />
            </div>

            <p className="text-gray-600 text-xl md:text-2xl italic leading-relaxed mb-12">
                &quot; {testimonial.quote}&quot;
            </p>

            <div className="flex items-center justify-center gap-4">
                {/* 4. Wrapped Image in a relative div to fix the 'fill' prop usage */}
                <div
                    className="relative w-16 h-16 rounded-full border-2 p-1 overflow-hidden"
                    style={{ borderColor: accentColor }}
                >
                    <Image
                        alt={testimonial.author}
                        src={testimonial.avatar}
                        fill
                        className="object-cover rounded-full"
                    />
                </div>

                <div className="text-left">
                    <p className="font-black text-gray-900 text-lg">
                        {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </section>
);
