import React from "react";
import { StaticImageData } from "next/image";
import {
    Layout,
    Palette,
    Megaphone,
    Search,
    Users,
    MousePointer2,
    Briefcase,
    Database,
    CodeXml,
    TrendingUp,
} from "lucide-react";

import skillbridgeLogo from "../assets/images/skillbridgenewlogo.png";
import aminlogo from "../assets/images/aminlogonew.png";
import galaxylogo from "../assets/images/galaxyfurniture.png";
import makilogo from "../assets/images/maki.png";
import safelogo from "../assets/images/sofiFerniture.png";
import beltechlogo from "../assets/images/beltechlogo.png";
export interface CaseStudyProps {
    companyName: string;
    logo: string | StaticImageData;
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
        logo: skillbridgeLogo,
        description: `Skillbridge Institute of Technology is an education-focused institution dedicated to providing practical, skill-based learning in technology and related fields. The institute aims to prepare students with industry-relevant knowledge and hands-on experience for real-world careers.\n\nEyoha Digitals partnered with Skillbridge Institute of Technology to strengthen its digital presence, build a consistent academic brand, and improve student engagement through strategic branding and educational content marketing.`,
        challenges: [
            "Limited brand visibility on academic platforms",
            "Difficulty communicating programs and courses clearly to prospective students",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with enrolment goals",
            "Low audience engagement on social media",
            "Limited differentiation from other technology and training institutes",
        ],
        services: [
            {
                title: "Website design and development",
                description:
                    "Planned structured content to increase reach, awareness, and student interest",
                icon: <CodeXml />,
                date: " Sep 2025 - Present",
            },
            {
                title: "Visual Content Design",
                description: "Designing high-quality social media assets.",
                icon: <TrendingUp />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Brand building logo and branding",
                description:
                    "Improved brand consistency across all digital platforms",
                icon: <Palette />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Product Focused Content Development",
                description: "Showcased products clearly and professionally.",
                icon: <Database />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Engagement Optimization Strategy",
                description:
                    "Boosted student interaction, inquiries, and enrollment interest",
                icon: <Users />,
                date: "Sep 2025 - Present",
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
        beforeImage: "",
        afterImage: "",
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
        logo: galaxylogo,
        description: `Galaxy Furniture is a modern interior and furniture brand focused on delivering stylish, durable, and functional furniture solutions for residential and commercial spaces. Eyoha Digitals partnered with Galaxy Furniture to enhance their digital presence, strengthen brand consistency, and improve customer engagement through strategic content and marketing solutions.`,
        challenges: [
            "Limited brand visibility on social media platforms",
            "Difficulty converting online viewers into potential customers",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with business goals",
            "Low audience engagement and interaction",
            "Limited differentiation from competitors in the furniture market",
        ],
        services: [
            {
                title: "Website design and development",
                description:
                    "Planned structured content to increase reach, awareness, and student interest",
                icon: <CodeXml />,
                date: " Sep 2025 - Present",
            },
            {
                title: "Visual Content Design",
                description: "Designing high-quality social media assets.",
                icon: <TrendingUp />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Brand building logo and branding",
                description:
                    "Improved brand consistency across all digital platforms",
                icon: <Palette />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Product Focused Content Development",
                description: "Showcased products clearly and professionally.",
                icon: <Database />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Engagement Optimization Strategy",
                description:
                    "Boosted student interaction, inquiries, and enrollment interest",
                icon: <Users />,
                date: "Sep 2025 - Present",
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
        logo: aminlogo,
        description: `Amin General Hospital is a trusted healthcare provider dedicated to delivering quality medical services with a patient-centered approach. The hospital offers comprehensive care through modern facilities, skilled professionals, and a commitment to community wellbeing.
\n\n
Eyoha Digitals partnered with Amin General Hospital to strengthen its digital presence, improve brand consistency, and enhance patient engagement through strategic content and digital marketing solutions.`,
        challenges: [
            "Limited brand visibility on academic platforms",
            "Difficulty communicating programs and courses clearly to prospective students",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with enrolment goals",
            "Low audience engagement on social media",
            "Limited differentiation from other technology and training institutes",
        ],
        services: [
            {
                title: "Content Development",
                description:
                    "Developed a clear content plan aligned with healthcare communication goals",
                icon: <CodeXml />,
                date: "July 2025 -November 2025",
            },
            {
                title: "Engagement Optimization Strategy",
                description: "Boosted interactions and customer inquiries.",
                icon: <Users />,
                date: "July 2025 -November 2025",
            },
            {
                title: "Service-Focused Content Development",
                description:
                    "Clearly showcased hospital departments, services, and facilities",
                icon: <Database />,
                date: "July 2025 -November 2025",
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
        logo: beltechlogo,
        description: `Beltech is an education-focused institution committed to delivering practical, skill-based learning in technology and related fields. The institution focuses on equipping students with industry-relevant knowledge and hands-on experience to prepare them for real-world careers.\n\n
Eyoha Digitals partnered with Beltech to enhance its digital presence, establish a strong and consistent academic brand, and increase student engagement through strategic branding and targeted educational content marketing.`,
        challenges: [
            "Limited brand visibility on academic platforms",
            "Difficulty communicating programs and courses clearly to prospective students",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with enrolment goals",
            "Low audience engagement on social media",
            "Limited differentiation from other technology and training institutes",
        ],
        services: [
            {
                title: "Website design and development",
                description:
                    "Planned structured content to increase reach, awareness, and student interest",
                icon: <CodeXml />,
                date: " Sep 2025 - Present",
            },
            {
                title: "Visual Content Design",
                description: "Designing high-quality social media assets.",
                icon: <TrendingUp />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Brand building logo and branding",
                description:
                    "Improved brand consistency across all digital platforms",
                icon: <Palette />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Product Focused Content Development",
                description: "Showcased products clearly and professionally.",
                icon: <Database />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Engagement Optimization Strategy",
                description:
                    "Boosted student interaction, inquiries, and enrollment interest",
                icon: <Users />,
                date: "Sep 2025 - Present",
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
        logo: safelogo,
        description: `Safe Furniture is a modern interior and furniture brand focused on delivering stylish, durable, and functional furniture solutions for residential and commercial spaces. Eyoha Digitals partnered with Galaxy Furniture to enhance their digital presence, strengthen brand consistency, and improve customer engagement through strategic content and marketing solutions.`,
        challenges: [
            "Limited brand visibility on social media platforms",
            "Difficulty converting online viewers into potential customers",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with business goals",
            "Low audience engagement and interaction",
            "Limited differentiation from competitors in the furniture market",
        ],
        services: [
            {
                title: "Website design and development",
                description:
                    "Planned structured content to increase reach, awareness, and student interest",
                icon: <CodeXml />,
                date: " Sep 2025 - Present",
            },
            {
                title: "Visual Content Design",
                description: "Designing high-quality social media assets.",
                icon: <TrendingUp />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Brand building logo and branding",
                description:
                    "Improved brand consistency across all digital platforms",
                icon: <Palette />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Product Focused Content Development",
                description: "Showcased products clearly and professionally.",
                icon: <Database />,
                date: "Sep 2025 - Present",
            },
            {
                title: "Engagement Optimization Strategy",
                description:
                    "Boosted student interaction, inquiries, and enrollment interest",
                icon: <Users />,
                date: "Sep 2025 - Present",
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
        logo: makilogo,
        description:
            "Maki Furniture is a modern interior and furniture brand focused on delivering stylish, durable, and functional furniture solutions for residential and commercial spaces. Eyoha Digitals partnered with Galaxy Furniture to enhance their digital presence, strengthen brand consistency, and improve customer engagement through strategic content and marketing solutions.",
        challenges: [
            "Limited brand visibility on social media platforms",
            "Difficulty converting online viewers into potential customers",
            "Inconsistent visual branding and messaging",
            "Lack of a clear content strategy aligned with business goals",
            "Low audience engagement and interaction",
            "Limited differentiation from competitors in the furniture market",
        ],
        services: [
            {
                title: "Paid Ads",
                description: "Showcased products clearly and professionally.",
                icon: <Database />,
                date: "May 2024 - Jul 2024",
            },
            {
                title: "Engagement Optimization Strategy",
                description: "Boosted interactions and customer inquiries.",
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
