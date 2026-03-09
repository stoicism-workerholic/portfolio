"use client";

import React, { useEffect } from "react";
import { HeroSection } from "@/components/blocks/hero-section-5";
import { GlobeDemo } from "@/components/ui/globe";
import { motion } from "framer-motion";

const highlights = [
    {
        emoji: "🏢",
        title: "Capgemini",
        subtitle: "Software Engineer · 2023–Present",
        desc: "Delivering enterprise full-stack solutions across high-impact client engagements. Microservices, CI/CD, and production-scale APIs.",
    },
    {
        emoji: "🛰️",
        title: "NRSC · ISRO",
        subtitle: "Research Intern · 2022",
        desc: "Built ML classification pipelines for satellite imagery. Work published as a Springer Conference research paper.",
    },
    {
        emoji: "🧠",
        title: "ML & AI",
        subtitle: "TensorFlow · Python · Scikit-learn",
        desc: "End-to-end model development, data pipelines, and real-world deployment. From research to production.",
    },
    {
        emoji: "📱",
        title: "Full-Stack & Mobile",
        subtitle: "Next.js · Flutter · Firebase",
        desc: "Building pixel-perfect, performant apps across web and mobile — from fintech to e-commerce platforms.",
    },
];

export default function Home() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const glow = document.querySelector(".cursor-glow") as HTMLElement;
            if (glow) {
                glow.style.left = `${e.clientX}px`;
                glow.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="bg-neutral-950 min-h-screen text-white overflow-hidden">
            <div className="cursor-glow pointer-events-none" />

            {/* Hero Section — with 3D robot built in */}
            <HeroSection />

            {/* ── About Me ── */}
            <section id="about" className="relative z-10 bg-neutral-950 py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">About Me</h2>
                        <div className="w-16 md:w-20 h-1 bg-primary rounded-full mb-8 mx-auto md:mx-0" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start text-center md:text-left">
                            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                                I'm <span className="text-white font-semibold">Balaadithya Pilla</span>, a software engineer based in India with a passion for building things that work <em>and</em> look exceptional. Currently at <span className="text-white font-semibold">Capgemini</span>, previously researched at <span className="text-white font-semibold">NRSC · ISRO</span> where my ML work got published in a Springer conference.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                I specialise in full-stack development (Next.js, React, Node.js), machine learning pipelines, and mobile apps using Flutter. I care deeply about clean architecture, great UX, and shipping things that matter.
                            </p>
                        </div>
                    </motion.div>

                    {/* Highlight cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                            >
                                <span className="text-2xl md:text-3xl mb-4 block">{item.emoji}</span>
                                <h3 className="text-white font-bold text-base md:text-lg mb-0.5">{item.title}</h3>
                                <p className="text-[10px] md:text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">{item.subtitle}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Globe & Global Reach */}
            <section id="contact" className="relative z-10 bg-neutral-950 py-24 overflow-visible border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Global Reach</h2>
                    <div className="w-16 md:w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
                        Open to remote collaboration worldwide. Based in India, available for international opportunities and partnerships.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 mt-10">
                        <a href="mailto:balaadithyapilla@gmail.com" className="w-full sm:w-auto text-xs md:text-sm bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white px-6 py-4 rounded-full transition-all duration-200">
                            ✉ balaadithyapilla@gmail.com
                        </a>
                        <div className="flex gap-3 w-full sm:w-auto justify-center">
                            <a href="https://github.com/balaadithya" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center text-xs md:text-sm bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 px-6 py-4 rounded-full transition-all duration-200">
                                GitHub ↗
                            </a>
                            <a href="https://linkedin.com/in/balaadithya" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center text-xs md:text-sm bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 px-6 py-4 rounded-full transition-all duration-200">
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </div>
                <GlobeDemo />
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 text-center border-t border-white/10 text-zinc-600 text-sm relative z-10 bg-neutral-950">
                <p>&copy; 2026 Balaadithya Pilla. Built with Next.js, Framer Motion, Spline &amp; Tailwind V4.</p>
            </footer>
        </div>
    );
}
