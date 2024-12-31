import React from 'react'

const AboutAndEducation = () => {
    return (
        <div id='aboutAndEducation' className='bg-bluee text-white px-10 sm:px-14 md:px-16 pb-16'>

            <div className="relative flex items-center gap-2  pt-14">
                <div className="w-5 h-1 bg-pair"></div>
                <div className="text-xl font-medium ">About & Education</div>
                <div className="absolute -left-10 top-0 opacity-5 text-[3.5rem] md:text-[4.5rem] font-bold tracking-wider">About & Education</div>
            </div>


            <div className='flex flex-col md:flex-row md:gap-8 gap-10'>
                <div id='left' className='md:w-1/2'>
                    <h1 className='text-5xl tracking-wide pt-2'>Who is <span className='text-pair font-medium'>Prakash?</span></h1>
                    <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae laudantium repellat dignissimos laborum iure deleniti, maiores quod itaque et, modi eveniet illo aperiam dolores! Incidunt earum harum inventore ut est consequatur? Voluptate doloribus hic ipsam non odio accusantium recusandae adipisci. Rerum, laborum fuga hic amet eligendi harum, similique delectus nostrum odio, corrupti a illo vitae voluptate! Aliquam distinctio libero, consectetur vel accusantium quod ipsam quasi ullam quae quam dignissimos inventore iste maxime optio a. Ea, velit nam? Iusto, sit.</p>
                </div>

                <div id="right" className='md:w-1/2 '>
                    <h1 className='text-5xl tracking-wide font-medium'>Education</h1>
                    <div className='flex flex-col gap-5 md:gap-3 pt-3'>
                        <div className='w-full bg-background bg-opacity-10  rounded-xl px-5 py-2 flex items-center justify-between'>
                            <div className='py-1.5'>
                                <h1 className='font-bold text-gray-950 tracking-tight lg:tracking-normal'>B.Tech in Electronics and Communication Engineering</h1>
                                <h1 className='tracking-tight lg:tracking-normal'>Galgotias College of Engineering and Technology</h1>
                            </div>
                            <div className='bg-white text-gray-950 font-semibold rounded-md p-1 whitespace-nowrap md:whitespace-normal'>
                                2024-2028
                            </div>
                        </div>
                        <div className='w-full bg-background bg-opacity-10  rounded-xl px-5 py-2 flex  items-center justify-between'>
                            <div>
                                <h1 className='font-bold text-gray-950'>CBSE XII</h1>
                                <h1>Foundation School</h1>
                                <h1 className='font-bold '>81%</h1>
                            </div>
                            <div className='bg-white text-gray-950 font-semibold rounded-md p-1'>
                                2021-2023
                            </div>
                        </div>
                        <div className='w-full bg-background bg-opacity-10  rounded-xl px-5 py-2 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold text-gray-950'>CBSE X</h1>
                                <h1>DAV Public School</h1>
                                <h1 className='font-bold '>89.6%</h1>
                            </div>
                            <div className='bg-white text-gray-950 font-semibold rounded-md p-1'>
                                2020-2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAndEducation