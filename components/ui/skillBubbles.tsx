'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SkillBubbleProps {
    name: string;
    icon: React.ReactNode;
    hoverColor: string; 
    boldIcon?: boolean;
    iconScale?: number;
}

export default function SkillBubble({ name, icon, hoverColor, boldIcon = false, iconScale = 1 }: SkillBubbleProps) {
    
    const bubbleVariants = {
        initial: { scale: 1, zIndex: 10 },
        hover: { 
            scale: 1.15,
            zIndex: 30,
            transition: { type: 'spring', stiffness: 350, damping: 20 }
        }
    };

    const glowVariants = {
        initial: { opacity: 0 },
        hover: { opacity: 0.35 }
    };

    const borderVariants = {
        initial: { opacity: 0 },
        hover: { opacity: 1, transition: { duration: 0.2 } }
    };

    const iconVariants = {
        initial: { color: '#a1a1aa' },
        hover: { color: hoverColor, transition: { duration: 0.2 } } 
    };

    const baseIconSize = 24;

    return (
        <motion.div
            initial="initial"
            whileHover="hover" 
            whileTap={{ scale: 0.96 }}
            variants={bubbleVariants}
            className="relative h-24 w-24 aspect-square flex flex-col items-center justify-center text-center rounded-full bg-gray-900/90 text-[#F2F2F2] backdrop-blur-md cursor-pointer select-none p-2 shrink-0 group gap-1"
        >
            <motion.div 
                variants={glowVariants}
                className="absolute inset-0 rounded-full bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] blur-xl pointer-events-none" 
            />

            <div className="absolute inset-0 rounded-full border border-white/10" />

            <motion.div 
                variants={borderVariants}
                className="absolute inset-0 rounded-full p-[1.5px] bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1]"
            >
                <div className="w-full h-full rounded-full bg-[#0A0F0D]" />
            </motion.div>

            <motion.div 
                variants={iconVariants}
                style={{ width: `${baseIconSize * iconScale}px`, height: `${baseIconSize * iconScale}px` }}
                className={`h-6 w-6 relative z-20 flex items-center justify-center 
                           [&>svg]:w-full [&>svg]:h-full 
                           [&_path]:fill-current! 
                           [&_circle]:fill-current! 
                           [&_polygon]:fill-current! 
                           [&_rect]:fill-transparent!
                           ${boldIcon ? '[&_path]:stroke-current! [&_path]:stroke-[0.8px]! [&_circle]:stroke-current! [&_circle]:stroke-[0.8px]! [&_polygon]:stroke-current! [&_polygon]:stroke-[0.8px]!' : '[&_path]:stroke-none! [&_circle]:stroke-none! [&_polygon]:stroke-none!'}`}
            >
                {icon}
            </motion.div>

            <span className="relative z-20 text-[10px] md:text-xs text-zinc-400 group-hover:text-white font-medium transition-colors duration-300 break-words max-w-full px-1 leading-tight">
                {name}
            </span>
        </motion.div>
    );
}