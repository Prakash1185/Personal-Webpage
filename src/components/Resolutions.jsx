import React from 'react'

const Resolutions = () => {
    return (
        <div id='resolutions' className='pt-10 bg-background px-16 pb-16'>

            <div className="relative flex items-center justify-center gap-2  pt-14">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium ">Resolutions</div>
                <div className="absolute  opacity-10 -top-2 text-[4.5rem] font-bold tracking-wider">My Resolutions</div>
            </div>

            <h1 className='text-5xl font-semibold text-center tracking-wider pt-2 '>New Year <span className='text-bluee font-medium'>Resolutions</span></h1>

            <div className='flex pt-10 gap-10 pb-10'>

                <div className="bg-white border-gray-500 border-opacity-30 border  w-1/2 rounded-3xl  flex items-center  flex-col gap-2 hover:bg-bluee transition-all duration-500 group" >
                    <h1 className="text-4xl font-medium group-hover:text-white pt-5">Professional</h1>
                    <ul className='flex flex-col text-2xl gap-3 pt-5 py-8 group-hover:text-white text-start'>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Start Freelancing</li>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Read tech related books</li>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Explore cybersecurity</li>

                    </ul>
                </div>

                <div className="bg-white border-gray-500 border-opacity-30 border  w-1/2 rounded-3xl  flex items-center  flex-col gap-2 hover:bg-bluee transition-all duration-500 group" >
                    <h1 className="text-4xl font-medium group-hover:text-white pt-5">Personal</h1>
                    <ul className='flex flex-col text-2xl gap-3 pt-5 py-8 group-hover:text-white text-start'>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Work on fitness</li>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Time management skills</li>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-check py-1 px-1.5 scale-75  bg-bluee rounded-full text-white group-hover:bg-white group-hover:text-black"></i>Financial literacy  </li>

                    </ul>
                </div>



            </div>

        </div>
    )
}

export default Resolutions