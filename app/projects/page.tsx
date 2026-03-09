"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Micro-Finance Loan Management",
        description:
            "Full-stack mobile app (Flutter + Firebase) for managing micro-loans with real-time repayment tracking, lender/borrower authentication, and automated daily payment cycles. Handles concurrent updates safely with transactional writes.",
        tags: ["Flutter", "Firebase", "Dart", "Real-time DB"],
        type: "Mobile App",
        status: "Shipped",
        accent: "from-violet-500/20 via-purple-500/10 to-transparent",
        glow: "shadow-violet-500/10",
        border: "border-violet-500/20 hover:border-violet-500/40",
        dot: "bg-violet-500",
        icon: "📱",
    },
    {
        title: "ML Pipeline — Springer Research",
        description:
            "End-to-end machine learning classification pipeline achieving state-of-the-art accuracy on complex datasets. Published as a conference paper through Springer — part of research work at NRSC/ISRO.",
        tags: ["Python", "TensorFlow", "Scikit-learn", "Data Processing"],
        type: "ML Research",
        status: "Published",
        accent: "from-orange-500/20 via-amber-500/10 to-transparent",
        glow: "shadow-orange-500/10",
        border: "border-orange-500/20 hover:border-orange-500/40",
        dot: "bg-orange-500",
        icon: "🧠",
    },
    {
        title: "PS Value Mart — E-Commerce Admin",
        description:
            "Full-stack e-commerce admin panel with product management, inventory tracking, dynamic pricing, and image handling. Built with React and a Node.js backend with a focus on clean UX and responsive layout.",
        tags: ["React", "Node.js", "PostgreSQL", "REST API"],
        type: "Web App",
        status: "Deployed",
        accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
        glow: "shadow-emerald-500/10",
        border: "border-emerald-500/20 hover:border-emerald-500/40",
        dot: "bg-emerald-500",
        icon: "🛒",
    },
    {
        title: "Portfolio — This Site",
        description:
            "Highly animated personal portfolio built with Next.js, Framer Motion, Spline 3D, and Aceternity UI. Features a cinema-quality scroll experience, interactive 3D scenes, and a multi-page routing architecture.",
        tags: ["Next.js", "Framer Motion", "Spline", "TypeScript"],
        type: "Web Design",
        status: "Live",
        accent: "from-sky-500/20 via-blue-500/10 to-transparent",
        glow: "shadow-sky-500/10",
        border: "border-sky-500/20 hover:border-sky-500/40",
        dot: "bg-sky-500",
        icon: "✨",
    },
];

export default function ProjectsPage() {
    return (
        <div className="bg-neutral-950 min-h-screen text-white overflow-hidden pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Projects</h1>
                    <div className="w-16 md:w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0"></div>
                    <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                        A collection of things I've built — from mobile-first fintech apps to published ML research.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`group relative bg-gradient-to-br ${project.accent} border ${project.border} rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl ${project.glow} overflow-hidden`}
                        >
                            {/* Background shimmer on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.02] group-hover:to-white/0 transition-all duration-500 rounded-2xl pointer-events-none" />

                            <div className="flex flex-col sm:flex-row items-start justify-between mb-5 gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl md:text-2xl">{project.icon}</span>
                                    <div>
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-0.5 block">
                                            {project.type}
                                        </span>
                                        <h2 className="text-lg md:text-xl font-bold text-white leading-tight">{project.title}</h2>
                                    </div>
                                </div>
                                <span className={`text-[10px] px-3 py-1.5 rounded-full font-semibold whitespace-nowrap bg-white/5 border border-white/10 text-zinc-300 self-start sm:self-auto`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Accent line */}
                            <div className={`w-full h-px ${project.dot} opacity-20 mb-5 rounded-full`} />

                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] md:text-xs bg-white/5 border border-white/8 text-zinc-400 px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 md:mt-20 pb-20 text-center"
                >
                    <p className="text-zinc-600 text-sm">More work available on request —</p>
                    <a href="mailto:balaadithyapilla@gmail.com" className="text-zinc-400 hover:text-white text-sm transition-colors">
                        balaadithyapilla@gmail.com
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
