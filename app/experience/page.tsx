"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Capgemini",
        role: "Software Engineer",
        period: "Sept 2025 – Jan 2026",
        location: "India",
        description:
            "Developing enterprise-grade full-stack solutions across client engagements. Building scalable RESTful APIs, integrating CI/CD pipelines, and delivering production code across distributed teams.",
        tags: ["Java", "Spring Boot", "React", "CI/CD", "Microservices"],
        accent: "from-blue-500/15 to-indigo-500/5",
        border: "border-blue-500/30",
        dot: "bg-blue-500",
        type: "work",
    },
    {
        company: "NRSC – ISRO",
        role: "Research Intern",
        period: "Feb 2026 – Present",
        location: "Hyderabad, India",
        description:
            "Worked on remote sensing data analysis and machine learning classification pipelines for satellite imagery. Research contributed to a paper published through Springer Conference proceedings.",
        tags: ["Python", "TensorFlow", "Remote Sensing", "ML Research", "Springer"],
        accent: "from-orange-500/15 to-amber-500/5",
        border: "border-orange-500/30",
        dot: "bg-orange-500",
        type: "work",
    },
];

const education = [
    {
        institution: "B.Tech — Computer Science & Engineering",
        school: "Amity University, Noida",
        period: "2021 – 2025",
        location: "Noida, India",
        detail: "Graduated with a CGPA of 8.3. Built a strong foundation in software engineering, data structures, algorithms, and machine learning. Active in coding clubs and research.",
        tags: ["Computer Science", "CGPA: 8.3", "Data Structures", "Algorithms", "ML"],
        accent: "from-violet-500/15 to-purple-500/5",
        border: "border-violet-500/30",
        dot: "bg-violet-500",
    },
    {
        institution: "CBSE XII — Science",
        school: "Sri Prakash Vidhyaniketan School, Visakhapatnam",
        period: "2019 – 2021",
        location: "Visakhapatnam, India",
        detail: "Completed 10+2 with 84% in the CBSE board. Focused on maths, physics, and chemistry — building the analytical base for an engineering career.",
        tags: ["CBSE", "84%", "Mathematics", "Physics", "Chemistry"],
        accent: "from-teal-500/15 to-emerald-500/5",
        border: "border-teal-500/30",
        dot: "bg-teal-500",
    },
    {
        institution: "ICSE X",
        school: "De Paul School, Visakhapatnam",
        period: "2019",
        location: "Visakhapatnam, India",
        detail: "Completed Class X under the ICSE board with 89%. Developed early interest in computers, mathematics, and science.",
        tags: ["ICSE", "89%", "Science", "Mathematics", "Computers"],
        accent: "from-pink-500/15 to-rose-500/5",
        border: "border-pink-500/30",
        dot: "bg-pink-500",
    },
];

const achievements = [
    { emoji: "📄", title: "Springer Conference Publication", desc: "Machine learning research paper published through Springer — outcome of NRSC/ISRO internship." },
    { emoji: "🏆", title: "Capgemini Rising Star", desc: "Recognised for delivery impact and quick ramp-up on enterprise client projects." },
    { emoji: "🤖", title: "ML Classification Pipeline", desc: "Achieved state-of-the-art accuracy on remote sensing imagery classification tasks." },
    { emoji: "📱", title: "Micro-Finance App — Shipped", desc: "End-to-end Flutter + Firebase fintech app serving real lenders and borrowers." },
];

const skills = [
    { label: "Full-Stack", items: ["Next.js", "React", "Node.js", "TypeScript"] },
    { label: "Machine Learning", items: ["TensorFlow", "Python", "Scikit-learn", "Data Pipelines"] },
    { label: "Cloud & Infra", items: ["Firebase", "Docker", "PostgreSQL", "REST APIs"] },
    { label: "Mobile", items: ["Flutter", "Dart", "Real-time DB"] },
];

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold text-white/90">{title}</h2>
            <div className="w-10 h-0.5 bg-white/20 rounded-full mt-2" />
        </div>
    );
}

export default function ExperiencePage() {
    return (
        <div className="bg-neutral-950 min-h-screen text-white overflow-hidden pt-24 md:pt-28">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Experience</h1>
                <div className="w-16 md:w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0" />
                <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                    My journey — from classrooms to enterprise engineering and published ML research.
                </p>
            </motion.div>

            {/* ── Work History ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
                <SectionTitle title="Work History" />
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
                    <div className="space-y-4 md:space-y-6">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                                className="relative md:pl-14"
                            >
                                <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-neutral-950 ${exp.dot} hidden md:block ring-4 ring-white/5`} />
                                <div className={`bg-gradient-to-br ${exp.accent} border ${exp.border} rounded-2xl p-6 md:p-7 hover:border-white/25 transition-all duration-300`}>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                                            <p className="text-zinc-300 text-xs md:text-sm font-medium mt-0.5">{exp.role}</p>
                                        </div>
                                        <div className="sm:text-right shrink-0">
                                            <span className="text-[10px] md:text-xs text-zinc-400 font-semibold block">{exp.period}</span>
                                            <span className="text-[10px] md:text-xs text-zinc-500">{exp.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-[10px] md:text-xs bg-white/5 border border-white/10 text-zinc-300 px-3 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Education ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
                <SectionTitle title="Education" />
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
                    <div className="space-y-4 md:space-y-6">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.school}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                                className="relative md:pl-14"
                            >
                                <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-neutral-950 ${edu.dot} hidden md:block ring-4 ring-white/5`} />
                                <div className={`bg-gradient-to-br ${edu.accent} border ${edu.border} rounded-2xl p-6 md:p-7 hover:border-white/25 transition-all duration-300`}>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-sm md:text-base font-bold text-white leading-snug">{edu.institution}</h3>
                                            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-0.5">{edu.school}</p>
                                        </div>
                                        <div className="sm:text-right shrink-0">
                                            <span className="text-[10px] md:text-xs text-zinc-400 font-semibold block">{edu.period}</span>
                                            <span className="text-[10px] md:text-xs text-zinc-500">{edu.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">{edu.detail}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.tags.map(tag => (
                                            <span key={tag} className="text-[10px] md:text-xs bg-white/5 border border-white/10 text-zinc-300 px-3 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Achievements & Publications ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
                <SectionTitle title="Achievements & Publications" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex items-start gap-4"
                        >
                            <span className="text-xl md:text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                            <div>
                                <h3 className="text-white font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Technical Skills ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-28">
                <SectionTitle title="Technical Skills" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {skills.map((group, i) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300"
                        >
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/70 mb-4">{group.label}</p>
                            <ul className="space-y-2 md:space-y-2.5">
                                {group.items.map(item => (
                                    <li key={item} className="text-xs md:text-sm text-zinc-300 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
