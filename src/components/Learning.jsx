import React from 'react'
import LearningBox from './LearningBox'
import genai from "../assets/genai.png"
import mern from "../assets/mern.webp"
import mernn from "../assets/mernn.png"

const Learning = () => {
    return (
        <div id='learning' className='px-10 sm:px-14 md:px-16 pb-16 pt-10 bg-bluee text-white  '>

            <div className="relative flex items-center gap-2  pt-14">
                <div className="w-5 h-1 bg-pair"></div>
                <div className="text-xl font-medium ">Learnings</div>
                <div className="absolute -left-10 top-0 opacity-5 text-[4.5rem] font-bold tracking-wider">Current Learnings</div>
            </div>

            <h1 className='text-5xl tracking-wide pt-2'>My <span className='text-pair font-medium'>Current Learnings</span></h1>

            <div className='flex flex-col pt-10 gap-10'>

                {/* <LearningBox image={genai} title={"Exploring GenAI - Generative AI"} descp={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aspernatur animi dolor dicta? Facilis adipisci laborum itaque dolorum eaque. Inventore, doloribus? Quia inventore quidem, porro, cum voluptatum maxime, eaque nisi magnam quaerat perferendis corrupti necessitatibus autem hic aspernatur deserunt tenetur suscipit. Possimus sed perferendis, voluptatem soluta iste itaque aliquam. Ex!"} /> */}

                <LearningBox image={mern} title={"Making Full Stack Projects"} descp={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aspernatur animi dolor dicta? Facilis adipisci laborum itaque dolorum eaque. Inventore, doloribus? Quia inventore quidem, porro, cum voluptatum maxime, eaque nisi magnam quaerat perferendis corrupti necessitatibus autem hic aspernatur deserunt tenetur suscipit. Possimus sed perferendis, voluptatem soluta iste itaque aliquam. Ex!"} />

            </div>

        </div>
    )
}

export default Learning