import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ items, autoplay = true, autoplayDelay = 5000 }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection) => {
        let newIndex = index + newDirection;
        if (newIndex < 0) {
            newIndex = items.length - 1;
        } else if (newIndex >= items.length) {
            newIndex = 0;
        }
        setDirection(newDirection);
        setIndex(newIndex);
    };

    useEffect(() => {
        if (autoplay) {
            const timer = setInterval(() => {
                paginate(1);
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, index]);

    const variants = {
        enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={index}
                    src={items[index]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    // --- THIS LINE IS UPDATED ---
                    className="absolute w-full h-full object-contain rounded-xl"
                />
            </AnimatePresence>
            <button onClick={() => paginate(-1)} className="absolute top-1/2 left-2 z-20 bg-black/30 text-white p-2 rounded-full transform -translate-y-1/2">
                <FaChevronLeft />
            </button>
            <button onClick={() => paginate(1)} className="absolute top-1/2 right-2 z-20 bg-black/30 text-white p-2 rounded-full transform -translate-y-1/2">
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Carousel;