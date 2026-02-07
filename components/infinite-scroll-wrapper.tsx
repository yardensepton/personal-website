"use client"

import { useEffect, useRef, ReactNode } from "react"

interface InfiniteScrollWrapperProps {
    children: ReactNode
}

export function InfiniteScrollWrapper({ children }: InfiniteScrollWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const isResettingRef = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            if (isResettingRef.current || !containerRef.current) return

            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight
            const singleContentHeight = containerRef.current.scrollHeight / 2 // Since we duplicate

            // When we've scrolled past the first set of content
            if (scrollPosition + windowHeight >= singleContentHeight + 200) {
                isResettingRef.current = true

                // Instantly jump back to the equivalent position in the first set
                const offset = scrollPosition - singleContentHeight
                window.scrollTo({
                    top: offset,
                    behavior: "auto" as ScrollBehavior
                })

                // Reset the flag
                requestAnimationFrame(() => {
                    isResettingRef.current = false
                })
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div ref={containerRef}>
            {children}
            {/* Duplicate content for seamless loop */}
            {children}
        </div>
    )
}
