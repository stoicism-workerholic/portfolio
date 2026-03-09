"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Endorsements", path: "/testimonials" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                    BALAADITHYA
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-white" : "text-zinc-400"
                                }`}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="h-px bg-primary mt-0.5"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col gap-4 p-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-xl font-semibold transition-all ${pathname === item.path ? "text-primary translate-x-2" : "text-zinc-400 hover:text-white hover:translate-x-1"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Connect</p>
                                    <div className="flex gap-4">
                                        <a href="mailto:balaadithyapilla@gmail.com" className="text-zinc-400 hover:text-white transition-colors">Email</a>
                                        <a href="https://linkedin.com/in/balaadithya" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                                        <a href="https://github.com/balaadithya" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
