import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import mernn from "../assets/mernn.png"
import gsap from "../assets/gsap.png"
import dsa from "../assets/dsa.png"
import python from "../assets/python.png"

const cards = [
    {
        id: 1,
        title: 'GSAP, Advanced Frontend',
        content: 'I want to learn about how to make advanced Frontend projects. how to add advanced animations in a website.',
        image: gsap
    },
    {
        id: 2,
        title: 'Python , AI, GenAI',
        content: 'My plan is to learn about GenAI so that i can add latest features like ai suggestions, chat bot ,and other ai related features in any website.',
        image: python
    },
    {
        id: 3,
        title: 'Data Structures and Algorithm',
        content: 'I will also make sure to learn DSA this year so that i can improve my logic building skills and also try to crack an internship.',
        image: dsa
    },
    {
        id: 4,
        title: 'MERN Stack Projects',
        content: 'As said earlier , this year i want to deep dive into MERN stack and will try to practice and apply all the concepts to solve real world problems.',
        image: mernn
    },
];

const Goals = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // Large screens
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const goToNext = () => {
        sliderRef.current.slickNext();
    };
    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };


    return (
        <div id="goals" className="pt-10 bg-background px-10 sm:px-14 md:px-16 pb-16 dark:bg-gray-950">
            <div className="relative flex items-center justify-center gap-2 pt-14">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium dark:text-gray-100">Goals</div>
                <div className="absolute opacity-10 -top-2 text-[3.5rem] md:text-[4.5rem] font-bold tracking-wider  dark:text-gray-100 dark:opacity-5">My Goals</div>
            </div>

            <h1 className="text-5xl font-semibold text-center tracking-wider pt-2 dark:text-gray-100">
                My <span className="text-bluee font-medium ">Goals</span>
            </h1>

            <div className="relative px-1 md:px-4 py-8 pb-20  overflow-hidden  ">
                <Slider ref={sliderRef} {...settings}>
                    {cards.map((card) => (
                        <div key={card.id} className="md:px-4 ">
                            <div className=" rounded-lg  border border-gray-500 border-opacity-30 bg-bluee h-[30rem] md:h-fit text-white  flex flex-col md:flex-row  items-center justify-center px-3 py-5 gap-5 sax">
                                <div className=' '>
                                    <img src={card.image} className='md:w-52 w-[17rem] rounded-xl' />
                                </div>
                                <div className='md:w-1/2 px-2'>
                                    <h2 className="text-3xl sm:text-4xl font-medium  mb-2 sm:mb-4">{card.title}</h2>
                                    <p className=''>{card.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="absolute inset-x-0 -bottom-1.5 flex justify-center items-center py-2 space-x-2 ">
                    <button
                        onClick={goToPrev}
                        className="p-2.5 rounded-full  z-10 border border-gray-500 border-opacity-50"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="p-2.5 rounded-full  z-10 border border-gray-500 border-opacity-50"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Goals;
