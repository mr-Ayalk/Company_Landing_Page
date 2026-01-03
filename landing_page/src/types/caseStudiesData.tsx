import React from "react";
import { StaticImageData } from "next/image";
import {
    // Layout,
    Palette,
    // Megaphone,
    // Search,
    Users,
    // MousePointer2,
    // Briefcase,
    Database,
    CodeXml,
    TrendingUp,
} from "lucide-react";
// images import //
import skillbridgeLogo from "../assets/images/skillbridgenewlogo.png";
import aminlogo from "../assets/images/aminlogonew.png";
import galaxylogo from "../assets/images/galaxyfurniture.png";
import makilogo from "../assets/images/maki.png";
import safelogo from "../assets/images/sofiFerniture.png";
import beltechlogo from "../assets/images/beltechlogo.png";
import websitehomepage from "../assets/images/websitehomepage.png";
import telegramaccount from "../assets/images/telegramaccount.png";
import linkedinaccount from "../assets/images/linkedinaccount.png";

import homepageskill from "../assets/images/homepageskill.png";
import telegramskill from "../assets/images/telegramskill.png";
import paidaddkill from "../assets/images/paidaddskill.png";
import amin2 from "../assets/images/amintiktok2.png";
import amin1 from "../assets/images/amintiktok1.png";
import galaxyhome from "../assets/images/galaxyhome.png";
import galaxybrochure from "../assets/images/galaxybrochure.png";
import galaxymobile from "../assets/images/galaxymobile.png";
import beforegalaxy from "../assets/images/beforegalaxy.png";
import aftergalaxy from "../assets/images/aftergalaxy.png";
import sofibefore from "../assets/images/sofibefore.png";
import sofiafter from "../assets/images/sofiafter.png";
import makibefore from "../assets/images/makibefore.png";
import makiafter from "../assets/images/makiafter.png";
import aminbefore from "../assets/images/aminbefore.png";
import aminafter from "../assets/images/aminafter.png";
import skillbefore from "../assets/images/skillbefore.png";
import skillafter from "../assets/images/skillafter.png";
///////////////////
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
    beforeImage: string | StaticImageData;
    afterImage: string | StaticImageData;
    transformationPoints: {
        before: string[];
        after: string[];
    };
    contentSamples: {
        title: string;
        desc: string;
        img: string | StaticImageData;
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
        beforeImage: skillbefore,
        afterImage: skillafter,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: homepageskill,
            },
            {
                title: "Telegram Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: telegramskill,
            },
            {
                title: "Paid Ad",
                desc: "Optimizing ad visuals and copy for a seamless transition from click to community.",
                img: paidaddkill,
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
        beforeImage: beforegalaxy,
        afterImage: aftergalaxy,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: galaxyhome,
            },
            {
                title: "Marketing Brochure",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: galaxybrochure,
            },
            {
                title: "Mobile App Interface",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: galaxymobile,
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
        beforeImage: aminbefore,
        afterImage: aminafter,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "TikTok video sample",
                desc: "Creating a rhythmic visual flow that captures attention and builds brand recognition.",
                img: amin2,
            },
            {
                title: "TikTok video sample",
                desc: "Creating a rhythmic visual flow that captures attention and builds brand recognition.",
                img: amin1,
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
        beforeImage: beforegalaxy,
        afterImage: linkedinaccount,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: websitehomepage,
            },
            {
                title: "Telegram Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: telegramaccount,
            },
            {
                title: "Linkedin Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: linkedinaccount,
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
        beforeImage: sofibefore,
        afterImage: sofiafter,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: websitehomepage,
            },
            {
                title: "Telegram Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: telegramaccount,
            },
            {
                title: "Linkedin Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: linkedinaccount,
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
        beforeImage: makibefore,
        afterImage: makiafter,
        transformationPoints: {
            before: [
                "Inconsistent post designs and color usage",
                "Product images without clear messaging",
                "Inconsistent post designs and color usage",
            ],
            after: [
                "Consistent brand colors, typography, and layout",
                "High-quality visuals with clear product highlights",
                "Improved storytelling that connects products to lifestyle needs",
                "Engaging captions with strong call to actions",
            ],
        },
        contentSamples: [
            {
                title: "Paid Ad",
                desc: "Optimizing ad visuals and copy for a seamless transition from click to community.",
                img: paidaddkill,
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
