'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutoTextRoll() {
    // Define your core skill sets
    const trackingRoles = ['Software Developer', 'Data Engineer', 'AI Engineer', 'Web Developer', 'UX Designer', 'Motion Designer'];
    const [index, setIndex] = useState(0);

    // Automatically cycle the index every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % trackingRoles.length);
        }, 3000); 

        return () => clearInterval(timer);
    }, [trackingRoles.length]);

    const variants = {
        enter: { y: 20, opacity: 0 },
        center: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }
    };

    return (
        /* The container serves as a tight letterbox window for the text loop */
        <div className="relative h-20 w-full overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index} // Changing the key forces Framer Motion to animate the exit/entry phases
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute text-7xl font-bold uppercase tracking-wider text-center bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent"
                >
                    {trackingRoles[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}