'use client'

import { Suspense, lazy } from 'react'
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader text-zinc-400 animate-pulse text-sm">Loading 3D scene...</span>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}

export function SplineSceneBasic() {
    return (
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center select-none">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">
                        Full-Stack & ML Engineer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                        Balaadithya Pilla
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-xs text-sm leading-relaxed">
                        Architecting resilient systems at scale — from ML pipelines published in Springer to real-time fintech mobile apps.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Next.js", "Python", "TensorFlow", "Firebase"].map(tag => (
                            <span key={tag} className="text-xs bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right content — 3D scene */}
                <div className="flex-1 relative">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}
