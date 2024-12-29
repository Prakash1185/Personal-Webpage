
const SkillBox = ({ image, skill="skill" }) => {
    return (
        <div className="bg-white border-gray-500 border-opacity-20 border h-36 w-36 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
            <img src={image} alt="" className="w-20"/>
            <h1 className="text-lg font-bold group-hover:text-white">{skill}</h1>
        </div>
    )
}

export default SkillBox