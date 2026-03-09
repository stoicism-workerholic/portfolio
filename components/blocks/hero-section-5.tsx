'use client'
import React, { Suspense, lazy } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ChevronRight } from 'lucide-react'
import { GooeyText } from '@/components/ui/gooey-text-morphing'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden pt-20">
                {/* ── Two-column Hero ── */}
                <section className="relative min-h-[85vh] flex items-center">
                    {/* Ambient gradient blob */}
                    <div className="absolute top-10 right-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-violet-600/15 via-indigo-500/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

                    <div className="w-full mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left — text content */}
                        <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 select-none">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Available for opportunities
                            </span>

                            <h1 className="max-w-2xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold dark:text-white leading-[1.2] tracking-tight">
                                Engineering Future{' '}
                                <span className="text-primary mt-2 flex lg:inline-flex h-16 sm:h-20 items-center justify-center lg:justify-start">
                                    <GooeyText
                                        texts={["Architecture.", "Algorithms.", "Scalability."]}
                                        morphTime={1.2}
                                        cooldownTime={0.4}
                                        className="text-center lg:text-left w-full sm:w-[380px]"
                                        textClassName="text-4xl sm:text-5xl xl:text-6xl text-primary"
                                    />
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
                                Full-Stack Engineer &amp; ML Specialist —
                                <span className="text-white/80"> Capgemini</span> &amp;
                                <span className="text-white/80"> NRSC/ISRO</span> alumni,
                                architecting resilient systems and beautifully crafted digital experiences.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start w-full sm:w-auto px-6 sm:px-0">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 w-full sm:w-auto rounded-full pl-5 pr-3 text-base dark:bg-white dark:text-black hover:dark:bg-zinc-200">
                                    <Link href="/projects" className="flex items-center justify-center">
                                        <span className="text-nowrap">Explore Projects</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-12 w-full sm:w-auto rounded-full px-5 text-base border-zinc-200 dark:border-white/10 hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <Link href="#contact" className="flex items-center justify-center">
                                        <span className="text-nowrap">Contact Me</span>
                                    </Link>
                                </Button>
                            </div>

                            {/* Quick stats */}
                            <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 select-none">
                                {[
                                    { value: "NRSC", label: "Current Role · ISRO" },
                                    { value: "1", label: "Springer Publication" },
                                    { value: "4+", label: "Projects Shipped" },
                                ].map(stat => (
                                    <div key={stat.label} className="text-center lg:text-left">
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 uppercase tracking-wider font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Spline 3D robot */}
                        <div className="relative h-[350px] sm:h-[480px] lg:h-[600px] w-full flex items-center justify-center mt-8 lg:mt-0">
                            {/* Glow behind robot */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-white/60 animate-spin" />
                                </div>
                            }>
                                <Spline
                                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                    className="w-full h-full"
                                />
                            </Suspense>
                        </div>
                    </div>
                </section>

                {/* ── Tech stack slider ── */}
                <section className="bg-background pb-10">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6 mb-4 md:mb-0 w-full md:w-auto">
                                <p className="text-center md:text-end text-sm text-muted-foreground whitespace-nowrap">My tech stack</p>
                            </div>
                            <div className="relative py-6 w-full md:w-[calc(100%-11rem)]">
                                <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                        <span className="text-sm text-muted-foreground font-medium">React</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                        <span className="text-sm text-muted-foreground font-medium">Python</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                                        <span className="text-sm text-muted-foreground font-medium">Next.js</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                                        <span className="text-sm text-muted-foreground font-medium">TensorFlow</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                        <span className="text-sm text-muted-foreground font-medium">TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                                        <span className="text-sm text-muted-foreground font-medium">Firebase</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                                        <span className="text-sm text-muted-foreground font-medium">Docker</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="h-6 w-fit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                                        <span className="text-sm text-muted-foreground font-medium">PostgreSQL</span>
                                    </div>
                                </InfiniteSlider>
                                <div className="bg-gradient-to-r from-background to-transparent absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" />
                                <div className="bg-gradient-to-l from-background to-transparent absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
