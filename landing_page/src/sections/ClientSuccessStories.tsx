import skillBridgeLogo from "../assets/images/skillBridgelogo.png";
import beltech from "../assets/images/beltechlogo.png";
import sofiFurnitureImage from "../assets/images/sofiFerniture.png";
import FinanceImage from "../assets/images/aminhospitallogo.png";
import galaxyFurniture from "../assets/images/galaxyfurniture.png";
import makiImage from "../assets/images/maki.png";
import sebenImage from "../assets/images/sebenlogo.png";
import Image from "next/image";

const clientLogos = [
    {
        src: skillBridgeLogo,
        alt: "Flintstone",
        radius: 245,
        angle: -140,
        size: 110, // Added custom size
    },
    {
        src: sebenImage,
        alt: "Seben",
        radius: 100,
        angle: -100,
        size: 70, // Smaller size
    },
    {
        src: FinanceImage,
        alt: "Real Estate",
        radius: 245,
        angle: -90,
        size: 120, // Larger size
    },
    {
        src: makiImage,
        alt: "Ethio Telecom",
        radius: 245,
        angle: -40,
        size: 90,
    },
    {
        src: galaxyFurniture,
        alt: "Meta",
        radius: 245,
        angle: 90,
        size: 100,
    },
    {
        src: sofiFurnitureImage,
        alt: "Help",
        radius: 170,
        angle: 150,
        size: 85,
    },
    {
        src: beltech,
        alt: "Finance",
        radius: 170,
        angle: 10,
        size: 95,
    },
];

export default function ClientSuccessStories() {
    const purpleAccent = "text-[#6A0DAD]";
    const contentMaxWidth = "max-w-[1233px]";

    const getLogoPosition = (radius: number, angle: number) => {
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return {
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        };
    };

    // return (
    //     <section className="py-24 md:py-32 bg-white overflow-hidden">
    //         <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
    //             <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
    //                 {/* Left Column (Remains the same as your working code) */}
    //                 <div className="mb-12 md:mb-0">
    //                     <div
    //                         className="inline-block px-4 py-1.5 rounded-full mb-6"
    //                         style={{ backgroundColor: "#F9F4FF" }}
    //                     >
    //                         <span
    //                             className={`text-xs font-semibold ${purpleAccent} uppercase tracking-widest`}
    //                         >
    //                             Trusted Worldwide
    //                         </span>
    //                     </div>
    //                     <h2
    //                         className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
    //                     >
    //                         Client success{" "}
    //                         <span className={purpleAccent}>stories</span>
    //                     </h2>
    //                     <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
    //                         Join over 500+ companies that trust us to deliver
    //                         exceptional results.
    //                     </p>
    //                     <div className="flex flex-col sm:flex-row gap-4 mb-16">
    //                         <button
    //                             className="text-white px-8 h-12 rounded-lg font-semibold shadow-xl"
    //                             style={{
    //                                 background:
    //                                     "linear-gradient(to right, #FF8C00, #F06A35)",
    //                             }}
    //                         >
    //                             View All Clients
    //                         </button>
    //                         <button className="text-gray-900 px-8 h-12 rounded-lg font-semibold border border-gray-300 bg-white">
    //                             Case Studies
    //                         </button>
    //                     </div>
    //                     <div className="flex space-x-12 pt-4">
    //                         <div className="flex flex-col">
    //                             <span
    //                                 className={`text-4xl font-extrabold ${purpleAccent}`}
    //                             >
    //                                 500+
    //                             </span>
    //                             <span className="text-sm text-gray-500">
    //                                 Happy Clients
    //                             </span>
    //                         </div>
    //                         <div className="flex flex-col">
    //                             <span
    //                                 className={`text-4xl font-extrabold ${purpleAccent}`}
    //                             >
    //                                 98%
    //                             </span>
    //                             <span className="text-sm text-gray-500">
    //                                 Satisfaction Rate
    //                             </span>
    //                         </div>
    //                         <div className="flex flex-col">
    //                             <span
    //                                 className={`text-4xl font-extrabold ${purpleAccent}`}
    //                             >
    //                                 24/7
    //                             </span>
    //                             <span className="text-sm text-gray-500">
    //                                 Support
    //                             </span>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* Right Column: Updated Orbit Logic */}
    //                 <div className="relative h-[500px] w-full flex items-center justify-center">
    //                     <div className="relative w-[500px] h-[500px]">
    //                         {/* Orbit Rings - Solid lines as per second image */}
    //                         <div className="absolute inset-0 border border-[#6A0DAD] rounded-full" />
    //                         <div className="absolute inset-[75px] border border-[#6A0DAD] rounded-full" />
    //                         <div className="absolute inset-[150px] border border-[#6A0DAD] rounded-full" />

    //                         {/* Central Hub */}
    //                         <div
    //                             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-20"
    //                             style={{
    //                                 background:
    //                                     "linear-gradient(135deg, #6A0DAD, #9370DB)",
    //                             }}
    //                         >
    //                             <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
    //                                 <svg
    //                                     width="28"
    //                                     height="28"
    //                                     viewBox="0 0 24 24"
    //                                     fill="none"
    //                                     stroke="white"
    //                                     strokeWidth="2"
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                 >
    //                                     <path d="m2 4 3 12h14l3-12-6 2-4-8-4 8-6-2z" />
    //                                     <path d="M7 21h10" />
    //                                 </svg>
    //                             </div>
    //                         </div>

    //                         {/* Manually Positioned Logos */}
    //                         {clientLogos.map((logo, index) => (
    //                             <div
    //                                 key={index}
    //                                 className="absolute w-[108px]  h-[106px] bg-white rounded-full shadow-lg flex items-center justify-center p-2 z-10 hover:scale-110 transition-transform duration-300"
    //                                 style={getLogoPosition(
    //                                     logo.radius,
    //                                     logo.angle
    //                                 )}
    //                             >
    //                                 <div className="relative w-full h-full">
    //                                     {/* Replace with your actual <Image /> tag */}
    //                                     <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
    //                                         <span className="text-[10px] font-bold text-gray-400">
    //                                             <Image
    //                                                 src={logo.src}
    //                                                 width={180}
    //                                                 height={180}
    //                                                 alt={logo.alt}
    //                                                 className="object-contain rounded-full"
    //                                             />
    //                                         </span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Column (Unchanged) */}
                    <div className="mb-12 md:mb-0">
                        <div
                            className="inline-block px-4 py-1.5 rounded-full mb-6"
                            style={{ backgroundColor: "#F9F4FF" }}
                        >
                            <span
                                className={`text-xs font-semibold ${purpleAccent} uppercase tracking-widest`}
                            >
                                Trusted Worldwide
                            </span>
                        </div>
                        <h2
                            className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
                        >
                            Client success{" "}
                            <span className={purpleAccent}>stories</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
                            Join over 500+ companies that trust us to deliver
                            exceptional results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button
                                className="text-white px-8 h-12 rounded-lg font-semibold shadow-xl"
                                style={{
                                    background:
                                        "linear-gradient(to right, #FF8C00, #F06A35)",
                                }}
                            >
                                View All Clients
                            </button>
                            <button className="text-gray-900 px-8 h-12 rounded-lg font-semibold border border-gray-300 bg-white">
                                Case Studies
                            </button>
                        </div>
                        <div className="flex space-x-12 pt-4">
                            <div className="flex flex-col">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    500+
                                </span>
                                <span className="text-sm text-gray-500">
                                    Happy Clients
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    98%
                                </span>
                                <span className="text-sm text-gray-500">
                                    Satisfaction Rate
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    24/7
                                </span>
                                <span className="text-sm text-gray-500">
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Updated Orbit Logic */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        <div className="relative w-[500px] h-[500px]">
                            {/* Orbit Rings */}
                            <div className="absolute inset-0 border border-[#6A0DAD]/30 rounded-full" />
                            <div className="absolute inset-[75px] border border-[#6A0DAD]/30 rounded-full" />
                            <div className="absolute inset-[150px] border border-[#6A0DAD]/30 rounded-full" />

                            {/* Central Hub */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-20 bg-gradient-to-br from-[#6A0DAD] to-[#9370DB]">
                                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m2 4 3 12h14l3-12-6 2-4-8-4 8-6-2z" />
                                        <path d="M7 21h10" />
                                    </svg>
                                </div>
                            </div>

                            {/* Dynamically Sized Logos */}
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="absolute bg-white rounded-full shadow-lg flex items-center justify-center p-2 z-10 hover:scale-110 transition-transform duration-300"
                                    style={{
                                        ...getLogoPosition(
                                            logo.radius,
                                            logo.angle
                                        ),
                                        width: `${logo.size}px`, // Dynamic width
                                        height: `${logo.size}px`, // Dynamic height
                                    }}
                                >
                                    <div className="relative w-full h-full bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill // Uses the container's size
                                            className="object-contain rounded-full"
                                            sizes={`${logo.size}px`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
