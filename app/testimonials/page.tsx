import React from "react";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials";

export default function TestimonialsPage() {
    return (
        <div className="bg-neutral-950 min-h-screen text-white overflow-hidden pt-28">
            <section className="relative z-10 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Endorsements</h1>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        What colleagues, clients, and collaborators have said about working with me.
                    </p>
                </div>
                <AnimatedTestimonialsDemo />
            </section>
        </div>
    );
}
