"use client"

import React, { useMemo, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function ModernBackground() {
    const { scrollYProgress } = useScroll()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Background color transition: Very Dark Navy to Dark Slate
    const bgColor = useTransform(
        smoothProgress,
        [0, 0.4],
        ["hsl(222, 47%, 4%)", "hsl(222, 47%, 12%)"]
    )

    // Opacity of the animated blobs
    const blobOpacity = useTransform(smoothProgress, [0, 0.4], [0.8, 0.3])
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.2])

    // Adaptive blur amounts for performance
    const blur1 = isMobile ? "blur-[60px]" : "blur-[100px]"
    const blur2 = isMobile ? "blur-[80px]" : "blur-[120px]"
    const blur3 = isMobile ? "blur-[70px]" : "blur-[100px]"
    const blur4 = isMobile ? "blur-[90px]" : "blur-[140px]"

    return (
        <motion.div
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            style={{ backgroundColor: bgColor }}
        >
            {/* Mesh Gradient Blobs */}
            <motion.div
                className="absolute inset-0 transition-all duration-1000"
                style={{ opacity: blobOpacity, scale }}
            >
                {/* Deep Blue Blob */}
                <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/30 ${blur1} ${!isMobile && 'animate-pulse'}`} />

                {/* Surface Accent Blob */}
                <div className={`absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/20 ${blur2} ${!isMobile && 'animate-bounce-slow'}`} />

                {/* Soft Violet/Indigo Blob for sophistication */}
                {!isMobile && (
                    <div className={`absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#6366f1]/10 ${blur3}`} />
                )}

                {/* Bottom Right Highlight */}
                <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/20 ${blur4}`} />
            </motion.div>

            {/* Subtle Noise Texture for a premium feel */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        </motion.div>
    )
}
