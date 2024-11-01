import { useEffect, useState } from 'react'

interface UseCustomInViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean
    onChange: (inView: boolean) => void
    shouldUpdate?: boolean
}

const useIntersectionObserver = ({
    triggerOnce = false,
    onChange,
    shouldUpdate = true,
    ...options
}: UseCustomInViewOptions) => {
    const [ref, setRef] = useState<Element | null>(null)

    useEffect(() => {
        if (!ref) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!shouldUpdate) return
                    onChange(true)
                    if (triggerOnce) {
                        observer.unobserve(entry.target)
                    }
                } else {
                    onChange(false)
                }
            })
        }, options)

        observer.observe(ref)

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, onChange, triggerOnce, options])

    return { ref: setRef }
}

export default useIntersectionObserver
