
const LearningBox = ({ image, title, descp }) => {
    return (
        <div className='bg-background bg-opacity-15 rounded-2xl flex px-6 my-auto py-6 gap-5'>
            <div className='w-1/2'>
                <img src={image} alt="" className=' rounded-2xl w-full h-full object-cover ' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-4xl font-medium tracking-wide'>{title}</h1>
                <p className='pt-3 text-gray-300'>{descp}</p>
            </div>
        </div>
    )
}

export default LearningBox