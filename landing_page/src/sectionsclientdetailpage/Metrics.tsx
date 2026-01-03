import React from "react";

// 1. Define the structure of an individual metric
interface MetricItem {
    label: string;
    value: string;
}

// 2. Define the Component props
interface MetricsProps {
    metrics: MetricItem[];
    accentColor?: string;
}

export const Metrics = (
    { metrics, accentColor = "#7C3AED" }: MetricsProps // 3. Use the interface instead of 'any'
) => (
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-16">Results & Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map(
                (
                    m: MetricItem,
                    i: number // 4. Type the individual metric 'm'
                ) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-center"
                    >
                        <span
                            style={{ color: accentColor }}
                            className="text-5xl md:text-6xl font-black mb-4"
                        >
                            {m.value}
                        </span>
                        <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-[0.2em] leading-tight max-w-[150px]">
                            {m.label}
                        </p>
                    </div>
                )
            )}
        </div>
    </section>
);
