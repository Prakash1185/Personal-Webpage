import image2 from "../assets/image2.png"
import image from "../assets/image.png"
import InfinteRoleSlider from "./InfinteRoleSlider"

const HeroSection = () => {
    return (
        <div id="hero">
            <div className="flex items-center gap-2 justify-center pt-9">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium">Hello</div>
            </div>

            <div className="text-center -space-y-9 ">
                <h1 className="text-[6rem] tracking-wide font-medium ">I'm <span className="text-bluee underline ">Prakash,</span></h1>
                <h1 className="text-[6rem] tracking-wider font-medium">Web Developer</h1>
            </div>

            <div className=" -mt-14">
                <div className="relative">
                    <img src={image} alt="image" className="w-80 mx-auto scale-95" />

                    <div className="absolute bg-bluee h-80 w-56 left-[46%] -bottom-1 transform -translate-x-1/2 rounded-tl-[50px] -rotate-[8deg] -z-10"></div>

                    <div className="absolute bg-gray-200 h-72 w-40 right-[44%] bottom-1 transform translate-x-1/2 rounded-tr-[50px] rotate-[8deg] -z-10"></div>
                </div>
            </div>
            
            <InfinteRoleSlider/>
        </div>
    )
}

export default HeroSection