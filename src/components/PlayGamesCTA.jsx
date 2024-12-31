import React from 'react'

const PlayGamesCTA = () => {
    return (
        <div id="quote" className="bg-bluee text-white py-8 px-16 pb-20">

            <div className="relative flex items-center gap-2  pt-14">
                <div className="w-5 h-1 bg-pair"></div>
                <div className="text-xl font-medium ">Games</div>
                <div className="absolute -left-10 top-0 opacity-5 text-[4.5rem] font-bold tracking-wider">Play Games</div>
            </div>

            <div className="pt-5 flex items-center justify-between">
                <p className="text-5xl font-medium tracking-wide">Explore some fun activities and enjoy</p>

                <button
                    type="submit"
                    class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto bg-white text-gray-950 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-pair hover:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
                >
                    Explore Now
                    <svg
                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-bluee text-gray-20 0 ease-linear duration-300 rounded-full group-hover:border-none border border-gray-700  p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        ></path>
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default PlayGamesCTA