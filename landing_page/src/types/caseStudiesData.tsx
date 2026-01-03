// import React from "react";
// import {
//     Layout,
//     Palette,
//     Megaphone,
//     Search,
//     Users,
//     // PieChart,
//     MousePointer2,
//     Briefcase,
// } from "lucide-react";
// export interface CaseStudyProps {
//     companyName: string;
//     logo: string;
//     description: string;
//     challenges: string[];
//     services: {
//         title: string;
//         description: string;
//         icon: React.ReactNode;
//         date?: string;
//     }[];
//     metrics: { label: string; value: string }[];
//     testimonial: {
//         quote: string;
//         author: string;
//         role: string;
//         avatar: string;
//     };
//     finalOutcome: string;
//     beforeImage: string;
//     afterImage: string;
//     transformationPoints: {
//         before: string[];
//         after: string[];
//     };
//     contentSamples: {
//         title: string;
//         desc: string;
//         img: string;
//     }[];
//     tools: string[];
// }

// export const PAGE_DATA: Record<string, CaseStudyProps> = {
//     skillbridge: {
//         companyName: "Skillbridge Institute of Technology",
//         logo: "/assets/images/skillbridge-logo.png",
//         description:
//             "Skillbridge Institute of Technology is an educational institution dedicated to providing practical, skill-based learning in technology and relevant fields...",
//         challenges: [
//             "Limited brand visibility on academic platforms",
//             "Inconsistent visual branding and messaging",
//             "Low audience engagement on social media",
//             "Lack of cohesive content strategy for different platforms",
//         ],
//         services: [
//             {
//                 title: "Website design and development",
//                 description:
//                     "Professional website focused on UX and lead generation.",
//                 icon: <Layout />,
//                 date: "May 2023 - Present",
//             },
//             {
//                 title: "Visual Content Design",
//                 description: "Designing high-quality social media assets.",
//                 icon: <Palette />,
//                 date: "May 2023 - Present",
//             },
//             {
//                 title: "Engagement Optimization",
//                 description: "Strategy to increase student interactions.",
//                 icon: <Users />,
//                 date: "May 2023 - Present",
//             },
//         ],
//         metrics: [
//             { label: "Increase Social Engagement", value: "300%" },
//             { label: "Follower growth", value: "4.8%" },
//             { label: "Inquiry increase", value: "85%" },
//             { label: "Reach Improvement", value: "250%" },
//         ],
//         testimonial: {
//             quote: "Eyoha Digitals helped us transform our online presence with clear branding...",
//             author: "Skillbridge Institute",
//             role: "Founder",
//             avatar: "/assets/images/user-skill.png",
//         },
//         finalOutcome:
//             "Skillbridge has gained a stronger brand presence and increased student inquiries.",
//         beforeImage: "/assets/images/skill-before.png",
//         afterImage: "/assets/images/skill-after.png",
//         transformationPoints: {
//             before: ["Vague brand identity", "Low quality visuals"],
//             after: [
//                 "Professional visual storytelling",
//                 "Consistent academic branding",
//             ],
//         },
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         tools: ["/assets/icons/figma.png", "/assets/icons/nextjs.png"],
//     },

//     galaxyFurniture: {
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         companyName: "Galaxy Furniture",
//         logo: "/assets/images/galaxy-logo.png",
//         description:
//             "Galaxy Furniture is a modern interior brand delivering stylish, durable, and functional furniture solutions...",
//         challenges: [
//             "Low social engagement",
//             "Lack of consistent brand identity",
//         ],
//         services: [
//             {
//                 title: "Social Media Strategy",
//                 description: "Focused on brand awareness.",
//                 icon: <Megaphone />,
//             },
//             {
//                 title: "Visual Design",
//                 description: "High-quality lifestyle photography.",
//                 icon: <Palette />,
//             },
//             {
//                 title: "Brand Identity",
//                 description: "Modernized brand logo and color palette.",
//                 icon: <Search />,
//             },
//         ],
//         metrics: [
//             { label: "Engagement Increase", value: "300%" },
//             { label: "Follower growth", value: "4.8%" },
//             { label: "Inquiry boost", value: "85%" },
//             { label: "Market Strength", value: "250%" },
//         ],
//         testimonial: {
//             quote: "Their work significantly improved how our products are presented.",
//             author: "Galaxy Furniture",
//             role: "CEO",
//             avatar: "/assets/images/user-galaxy.png",
//         },
//         finalOutcome:
//             "Galaxy Furniture gained a stronger presence and increased inquiries.",
//         beforeImage: "/assets/images/galaxy-before.png",
//         afterImage: "/assets/images/galaxy-after.png",
//         transformationPoints: {
//             before: ["Dull photos", "Low trust"],
//             after: ["Vibrant lifestyle visuals", "High conversion"],
//         },
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         tools: ["/assets/icons/ps.png", "/assets/icons/ai.png"],
//     },

//     aminHospital: {
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         companyName: "Amin General Hospital",
//         logo: "/assets/images/amin-logo.png",
//         description:
//             "Trusted healthcare provider dedicated to high-quality medical services...",
//         challenges: [
//             "Difficulty reaching local community",
//             "Medical services not communicated",
//         ],
//         services: [
//             {
//                 title: "Content Development",
//                 description: "Strategy on medical expertise.",
//                 icon: <Briefcase />,
//                 date: "June 2023 - Nov 2023",
//             },
//             {
//                 title: "Service-Focused Content",
//                 description: "Informative specialty content.",
//                 icon: <Users />,
//                 date: "June 2023 - Nov 2023",
//             },
//         ],
//         metrics: [
//             { label: "Community Engagement", value: "200%" },
//             { label: "Follower base growth", value: "3.8%" },
//             { label: "Patient inquiry increase", value: "75%" },
//             { label: "Trust Index", value: "90%" },
//         ],
//         testimonial: {
//             quote: "They improved how our healthcare services are presented.",
//             author: "Amin Hospital",
//             role: "Director",
//             avatar: "/assets/images/user-amin.png",
//         },
//         finalOutcome: "Amin Hospital improved patient trust and communication.",
//         beforeImage: "/assets/images/amin-before.png",
//         afterImage: "/assets/images/amin-after.png",
//         transformationPoints: {
//             before: ["Technical jargon", "Limited social reach"],
//             after: [
//                 "Patient-first communication",
//                 "Easy-to-understand health tips",
//             ],
//         },
//     },

//     beltechSolutions: {
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         companyName: "Beltech Solutions",
//         logo: "/assets/images/beltech-logo.png",
//         description:
//             "Beltech is an education-focused institution providing precision learning in technology...",
//         challenges: [
//             "Inconsistent visual messaging",
//             "Difficulty connecting with industry partners",
//         ],
//         services: [
//             {
//                 title: "Website Design",
//                 description: "Modern technical interface.",
//                 icon: <Layout />,
//                 date: "Dec 2023 - Present",
//             },
//             {
//                 title: "Brand Building",
//                 description: "Identity for technical education.",
//                 icon: <Briefcase />,
//                 date: "Dec 2023 - Present",
//             },
//         ],
//         metrics: [
//             { label: "Increased engagement", value: "300%" },
//             { label: "Student growth", value: "4.8%" },
//             { label: "Lead inquiry increase", value: "85%" },
//             { label: "Brand Strength", value: "250%" },
//         ],
//         testimonial: {
//             quote: "They helped us transform our online presence with clear branding.",
//             author: "Beltech Solutions",
//             role: "Founder",
//             avatar: "/assets/images/user-beltech.png",
//         },
//         finalOutcome:
//             "Beltech gained a stronger presence and increased enrollment queries.",
//         beforeImage: "/assets/images/beltech-before.png",
//         afterImage: "/assets/images/beltech-after.png",
//         transformationPoints: {
//             before: ["Nothing Before Eyoha", "Fragmented brand"],
//             after: ["Clean UI/UX", "Industry-aligned branding"],
//         },
//     },

//     safeFurniture: {
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         companyName: "Safe Furniture",
//         logo: "/assets/images/safe-logo.png",
//         description:
//             "Premium brand for residential and commercial furniture solutions...",
//         challenges: [
//             "Low audience engagement",
//             "Product details not showcased well",
//         ],
//         services: [
//             {
//                 title: "Visual Content Design",
//                 description: "High-end product rendering.",
//                 icon: <Palette />,
//             },
//             {
//                 title: "Brand Identity",
//                 description: "Logo and color system.",
//                 icon: <Search />,
//             },
//         ],
//         metrics: [
//             { label: "Social engagement", value: "300%" },
//             { label: "Reach increase", value: "85%" },
//             { label: "Market awareness", value: "250%" },
//             { label: "Growth", value: "4.8%" },
//         ],
//         testimonial: {
//             quote: "Improved how our products are presented.",
//             author: "Safe Furniture",
//             role: "Manager",
//             avatar: "/assets/images/user-safe.png",
//         },
//         finalOutcome: "Safe Furniture built a premium digital presence.",
//         beforeImage: "/assets/images/safe-before.png",
//         afterImage: "/assets/images/safe-after.png",
//         transformationPoints: {
//             before: ["Generic photos", "Minimal engagement"],
//             after: ["Luxury lifestyle assets", "High inquiry rate"],
//         },
//     },

//     makiInterior: {
//         contentSamples: [
//             {
//                 title: "Website Homepage",
//                 desc: "Creating a cohesive visual language through unified layouts.",
//                 img: "/samples/skill-web.jpg",
//             },
//             {
//                 title: "Telegram Account",
//                 desc: "Streamlining our content design for a cleaner reading experience.",
//                 img: "/samples/skill-tele.jpg",
//             },
//             {
//                 title: "Paid Ad",
//                 desc: "Optimizing ad visuals and copy for a seamless transition.",
//                 img: "/samples/skill-ad.jpg",
//             },
//         ],
//         companyName: "Maki Interior Design",
//         logo: "/assets/images/maki-logo.png",
//         description:
//             "Modern interior brand focused on digital-first furniture solutions...",
//         challenges: ["Low traffic to portfolio", "Paid ads underperforming"],
//         services: [
//             {
//                 title: "Paid Ads",
//                 description: "Strategic product targeting.",
//                 icon: <MousePointer2 />,
//                 date: "May 2024 - Jul 2024",
//             },
//             {
//                 title: "Engagement Strategy",
//                 description: "Optimizing social conversion.",
//                 icon: <Users />,
//                 date: "May 2024 - Jul 2024",
//             },
//         ],
//         metrics: [
//             { label: "Paid Reach", value: "300%" },
//             { label: "Lead quality", value: "85%" },
//             { label: "Brand trust", value: "250%" },
//             { label: "Inquiry boost", value: "4.8%" },
//         ],
//         testimonial: {
//             quote: "Significantly improved how customers interact with us.",
//             author: "Maki Interior",
//             role: "Designer",
//             avatar: "/assets/images/user-maki.png",
//         },
//         finalOutcome: "Maki Interior reached new levels of brand awareness.",
//         beforeImage: "/assets/images/maki-before.png",
//         afterImage: "/assets/images/maki-after.png",
//         transformationPoints: {
//             before: ["Stagnant traffic", "Low ad ROI"],
//             after: ["Optimized funnel", "High-conversion ads"],
//         },
//     },
// };
import React from "react";
import {
    Layout,
    Palette,
    Megaphone,
    Search,
    Users,
    MousePointer2,
    Briefcase,
} from "lucide-react";

export interface CaseStudyProps {
    companyName: string;
    logo: string;
    description: string;
    challenges: string[];
    services: {
        title: string;
        description: string;
        icon: React.ReactNode;
        date?: string;
    }[];
    metrics: { label: string; value: string }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        avatar: string;
    };
    finalOutcome: string;
    beforeImage: string;
    afterImage: string;
    transformationPoints: {
        before: string[];
        after: string[];
    };
    contentSamples: {
        title: string;
        desc: string;
        img: string;
    }[];
    tools: string[]; // This makes it required for all objects
}

export const PAGE_DATA: Record<string, CaseStudyProps> = {
    skillbridge: {
        companyName: "Skillbridge Institute of Technology",
        logo: "/assets/images/skillbridge-logo.png",
        description:
            "Skillbridge Institute of Technology is an educational institution dedicated to providing practical, skill-based learning...",
        challenges: [
            "Limited brand visibility on academic platforms",
            "Inconsistent visual branding and messaging",
            "Low audience engagement on social media",
        ],
        services: [
            {
                title: "Website design and development",
                description:
                    "Professional website focused on UX and lead generation.",
                icon: <Layout />,
                date: "May 2023 - Present",
            },
            {
                title: "Visual Content Design",
                description: "Designing high-quality social media assets.",
                icon: <Palette />,
                date: "May 2023 - Present",
            },
        ],
        metrics: [
            { label: "Increase Social Engagement", value: "300%" },
            { label: "Inquiry increase", value: "85%" },
        ],
        testimonial: {
            quote: "Eyoha Digitals helped us transform our online presence...",
            author: "Skillbridge Institute",
            role: "Founder",
            avatar: "/assets/images/user-skill.png",
        },
        finalOutcome: "Skillbridge has gained a stronger brand presence.",
        beforeImage: "/assets/images/skill-before.png",
        afterImage: "/assets/images/skill-after.png",
        transformationPoints: {
            before: ["Vague brand identity", "Low quality visuals"],
            after: [
                "Professional visual storytelling",
                "Consistent academic branding",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Unified layouts.",
                img: "/samples/skill-web.jpg",
            },
        ],
        tools: ["/assets/icons/figma.png", "/assets/icons/nextjs.png"],
    },

    galaxyFurniture: {
        companyName: "Galaxy Furniture",
        logo: "/assets/images/galaxy-logo.png",
        description: "Galaxy Furniture is a modern interior brand...",
        challenges: [
            "Low social engagement",
            "Lack of consistent brand identity",
        ],
        services: [
            {
                title: "Social Media Strategy",
                description: "Brand awareness.",
                icon: <Megaphone />,
            },
            {
                title: "Visual Design",
                description: "Lifestyle photography.",
                icon: <Palette />,
            },
        ],
        metrics: [
            { label: "Engagement Increase", value: "300%" },
            { label: "Inquiry boost", value: "85%" },
        ],
        testimonial: {
            quote: "Their work significantly improved our presentation.",
            author: "Galaxy Furniture",
            role: "CEO",
            avatar: "/assets/images/user-galaxy.png",
        },
        finalOutcome: "Stronger presence and increased inquiries.",
        beforeImage: "/assets/images/galaxy-before.png",
        afterImage: "/assets/images/galaxy-after.png",
        transformationPoints: {
            before: ["Dull photos", "Low trust"],
            after: ["Vibrant lifestyle visuals", "High conversion"],
        },
        contentSamples: [
            {
                title: "Social Catalog",
                desc: "Clean reading experience.",
                img: "/samples/skill-tele.jpg",
            },
        ],
        tools: ["/assets/icons/ps.png", "/assets/icons/ai.png"], // Added missing tools
    },

    aminHospital: {
        companyName: "Amin General Hospital",
        logo: "/assets/images/amin-logo.png",
        description: "Trusted healthcare provider...",
        challenges: [
            "Difficulty reaching local community",
            "Medical services not communicated",
        ],
        services: [
            {
                title: "Content Development",
                description: "Medical expertise.",
                icon: <Briefcase />,
                date: "June 2023",
            },
        ],
        metrics: [{ label: "Community Engagement", value: "200%" }],
        testimonial: {
            quote: "They improved how our services are presented.",
            author: "Amin Hospital",
            role: "Director",
            avatar: "/assets/images/user-amin.png",
        },
        finalOutcome: "Improved patient trust and communication.",
        beforeImage: "/assets/images/amin-before.png",
        afterImage: "/assets/images/amin-after.png",
        transformationPoints: {
            before: ["Technical jargon"],
            after: ["Patient-first communication"],
        },
        contentSamples: [
            {
                title: "Health Tips",
                desc: "Easy tips.",
                img: "/samples/skill-ad.jpg",
            },
        ],
        tools: ["/assets/icons/ps.png"], // Added missing tools
    },

    beltechSolutions: {
        companyName: "Beltech Solutions",
        logo: "/assets/images/beltech-logo.png",
        description: "Education-focused institution...",
        challenges: ["Inconsistent visual messaging"],
        services: [
            {
                title: "Website Design",
                description: "Technical interface.",
                icon: <Layout />,
            },
        ],
        metrics: [{ label: "Lead inquiry increase", value: "85%" }],
        testimonial: {
            quote: "Transformed our online presence.",
            author: "Beltech Solutions",
            role: "Founder",
            avatar: "/assets/images/user-beltech.png",
        },
        finalOutcome: "Increased enrollment queries.",
        beforeImage: "/assets/images/beltech-before.png",
        afterImage: "/assets/images/beltech-after.png",
        transformationPoints: {
            before: ["Fragmented brand"],
            after: ["Clean UI/UX"],
        },
        contentSamples: [
            {
                title: "LMS Interface",
                desc: "Clean design.",
                img: "/samples/skill-web.jpg",
            },
        ],
        tools: ["/assets/icons/figma.png", "/assets/icons/nextjs.png"], // Added missing tools
    },

    safeFurniture: {
        companyName: "Safe Furniture",
        logo: "/assets/images/safe-logo.png",
        description:
            "Premium brand for residential and commercial furniture solutions focusing on durability and aesthetic appeal.",
        challenges: [
            "Low audience engagement",
            "Product details not showcased well",
        ],
        services: [
            {
                title: "Visual Content Design",
                description:
                    "High-end product rendering and lifestyle staging.",
                icon: <Palette />,
            },
            {
                title: "Brand Identity",
                description: "Refined logo and cohesive color system.",
                icon: <Search />,
            },
        ],
        metrics: [
            { label: "Social engagement", value: "300%" },
            { label: "Reach increase", value: "85%" },
            { label: "Market awareness", value: "250%" },
            { label: "Growth", value: "4.8%" },
        ],
        testimonial: {
            quote: "Eyoha Digitals significantly improved how our products are presented to our premium clientele.",
            author: "Safe Furniture",
            role: "Manager",
            avatar: "/assets/images/user-safe.png",
        },
        finalOutcome:
            "Safe Furniture built a premium digital presence that matches their physical product quality.",
        beforeImage: "/assets/images/safe-before.png",
        afterImage: "/assets/images/safe-after.png",
        transformationPoints: {
            before: ["Generic photos", "Minimal engagement"],
            after: ["Luxury lifestyle assets", "High inquiry rate"],
        },
        contentSamples: [
            {
                title: "Product Showcase",
                desc: "High-fidelity rendering for social catalogs.",
                img: "/samples/safe-sample.jpg",
            },
        ],
        // Added tools for Safe Furniture
        tools: [
            "/assets/icons/ps.png",
            "/assets/icons/ai.png",
            "/assets/icons/figma.png",
        ],
    },

    makiInterior: {
        companyName: "Maki Interior Design",
        logo: "/assets/images/maki-logo.png",
        description:
            "Modern interior brand focused on digital-first furniture solutions and bespoke design consulting.",
        challenges: ["Low traffic to portfolio", "Paid ads underperforming"],
        services: [
            {
                title: "Paid Ads",
                description:
                    "Strategic product targeting and funnel optimization.",
                icon: <MousePointer2 />,
                date: "May 2024 - Jul 2024",
            },
            {
                title: "Engagement Strategy",
                description: "Optimizing social conversion rates.",
                icon: <Users />,
                date: "May 2024 - Jul 2024",
            },
        ],
        metrics: [
            { label: "Paid Reach", value: "300%" },
            { label: "Lead quality", value: "85%" },
            { label: "Brand trust", value: "250%" },
            { label: "Inquiry boost", value: "4.8%" },
        ],
        testimonial: {
            quote: "The strategic approach to our ads significantly improved how customers interact with us.",
            author: "Maki Interior",
            role: "Designer",
            avatar: "/assets/images/user-maki.png",
        },
        finalOutcome:
            "Maki Interior reached new levels of brand awareness and high-intent lead generation.",
        beforeImage: "/assets/images/maki-before.png",
        afterImage: "/assets/images/maki-after.png",
        transformationPoints: {
            before: ["Stagnant traffic", "Low ad ROI"],
            after: ["Optimized funnel", "High-conversion ads"],
        },
        contentSamples: [
            {
                title: "Ad Creative",
                desc: "Optimized visuals for high-conversion paid social campaigns.",
                img: "/samples/maki-ad.jpg",
            },
        ],
        // Added tools for Maki Interior (including Marketing/Ads tools)
        tools: [
            "/assets/icons/meta.png",
            "/assets/icons/google-ads.png",
            "/assets/icons/figma.png",
        ],
    },
};
