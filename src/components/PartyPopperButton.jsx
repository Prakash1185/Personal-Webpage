import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Party Popper Button Component
const PartyPopperButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const triggerConfetti = () => {
        // Randomize the confetti launch positions
        const randomX = Math.random(); // Random X position (0 to 1)
        const randomY = Math.random(); // Random Y position (0 to 1)

        // Trigger the confetti animation from random positions
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { x: randomX, y: randomY },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
        });
    };

    return (
        <div className={`fixed ${isScrolled ? 'bottom-20' : 'bottom-5'} right-5 transform transition-all`}>
            <button
                onClick={triggerConfetti}
                className="bg-bluee  border  border-gray-200 text-white p-4 flex items-center justify-center rounded-full text-xl shadow-lg  focus:outline-none transition border-opacity-30"
            >
                🎉
            </button>
        </div>
    );
};


export default PartyPopperButton