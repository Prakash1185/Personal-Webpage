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
        content: 'lorem khfksdhf fdskfhsd fksdjf dkfhsdkf dskfhdksjf dskfdkjfsdkjfsdkfsd fksd fksfhksfhkjdsfh skdjfh skjdfhdskf',
        image: gsap
    },
    {
        id: 2,
        title: 'Python , AI, GenAI',
        content: 'lorem khfksdhf fdskfhsd fksdjf dkfhsdkf dskfhdksjf dskfdkjfsdkjfsdkfsd fksd fksfhksfhkjdsfh skdjfh skjdfhdskf',
        image: python
    },
    {
        id: 3,
        title: 'Data Structures and Algorithm',
        content: 'lorem khfksdhf fdskfhsd fksdjf dkfhsdkf dskfhdksjf dskfdkjfsdkjfsdkfsd fksd fksfhksfhkjdsfh skdjfh skjdfhdskf',
        image: dsa
    },
    {
        id: 4,
        title: 'MERN Stack Projects',
        content: 'lorem khfksdhf fdskfhsd fksdjf dkfhsdkf dskfhdksjf dskfdkjfsdkjfsdkfsd fksd fksfhksfhkjdsfh skdjfh skjdfhdskf',
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
        <div id="goals" className="pt-10 bg-background px-16 pb-16">
            <div className="relative flex items-center justify-center gap-2  pt-14">
                <div className="relative flex items-center justify-center gap-2 pt-14">
                    <div className="w-5 h-1 bg-bluee"></div>
                    <div className="text-xl font-medium ">Goals</div>
                    <div className="absolute  opacity-10 -top-2 text-[4.5rem] font-bold tracking-wider">My Goals</div>
                    <div className="text-xl font-medium">Goals</div>
                    <div className="absolute opacity-10 -top-2 text-[4.5rem] font-bold tracking-wider">My Goals</div>
                </div>

                <h1 className='text-5xl font-semibold text-center tracking-wider pt-2 '>My <span className='text-bluee font-medium'>Goals</span></h1>
                <h1 className="text-5xl font-semibold text-center tracking-wider pt-2">
                    My <span className="text-bluee font-medium">Goals</span>
                </h1>

                <div className="relative px-4 py-8 pb-20  overflow-hidden  ">
                    <Slider ref={sliderRef} {...settings}>
                        {cards.map((card) => (
                            <div key={card.id} className="px-4 ">
                                <div className=" rounded-lg  border border-gray-500 border-opacity-30 bg-bluee text-white  flex  justify-center px-3 py-5 gap-5">
                                    <div className=' '>
                                        <img src={card.image} className='w-52 rounded-xl' />
                                    </div>
                                    <div className='w-1/2 '>
                                        <h2 className="text-4xl font-medium mb-4">{card.title}</h2>
                                        <p>{card.content}</p>
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
        </div>
    )
}
export default Goals;