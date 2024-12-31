
const LearningBox = ({ image, title, descp }) => {
    return (
        <div className='bg-background bg-opacity-15 rounded-2xl flex flex-col md:flex-row px-6 my-auto py-6 gap-5'>
            <div className='md:w-1/2'>
                <img src={image} alt="" className=' rounded-2xl w-full h-full object-cover ' />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-4xl font-medium tracking-wide'>{title}</h1>
                <p className='pt-3 text-gray-200'>{descp}</p>
            </div>
        </div>
    )
}

export default LearningBox