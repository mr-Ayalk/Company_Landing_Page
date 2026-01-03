import React from "react";

// 1. Define the structure for a single service
interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    date?: string; // Optional field
}

// 2. Define the Component props
interface ServicesGridProps {
    services: Service[];
    accentColor?: string;
}

export const ServicesGrid = (
    { services, accentColor = "#F97316" }: ServicesGridProps // 3. Apply the interface
) => (
    <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Services Provided
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            {services.map(
                (
                    s: Service,
                    i: number // 4. Type the individual service
                ) => (
                    <div
                        key={i}
                        className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div
                            style={{ backgroundColor: accentColor }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6"
                        >
                            {s.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 capitalize leading-tight">
                            {s.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {s.description}
                        </p>
                        {s.date && (
                            <p className="text-[10px] font-bold text-black uppercase tracking-tighter">
                                {s.date}
                            </p>
                        )}
                    </div>
                )
            )}
        </div>
    </section>
);
