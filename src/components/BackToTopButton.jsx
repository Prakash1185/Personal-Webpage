import React, { useState, useEffect } from 'react';

// Back to Top Button Component
const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-bluee text-white px-3.5 py-2 rounded-full shadow-lg transform transition-opacity duration-300 border  border-gray-200 border-opacity-30
          ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} hover:bg-bluee focus:outline-none`}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
};

export default BackToTopButton;
