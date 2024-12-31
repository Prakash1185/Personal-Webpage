import image2 from "../assets/image2.png"
import image from "../assets/image.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import InfinteRoleSlider from "./InfinteRoleSlider"

const HeroSection = () => {
    return (
        <div id="hero" className="dark:bg-gray-950">
            <div className="flex items-center gap-2 justify-center pt-9">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium dark:text-gray-100">Hello</div>
            </div>

            <div className="text-center -space-y-5  sm:-space-y-9 ">
                <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] tracking-wide font-medium dark:text-red-100">I'm <span className="text-bluee underline ">Prakash,</span></h1>
                <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] sm:tracking-wide md:tracking-wider font-medium dark:text-gray-100">Web Developer</h1>
            </div>

            <div className="-mt-8  md:-mt-14">
                <div className="relative">
                    <img src={image} alt="image" className="w-72 sm:w-80 mx-auto scale-95" />

                    <div className="absolute bg-bluee dark:bg-bluee h-80 w-52 sm:w-56 left-[40%] sm:left-[43%]  md:left-[45%] -bottom-1 transform -translate-x-1/2 rounded-tl-[50px] -rotate-[8deg] -z-10"></div>

                    <div className="absolute bg-gray-200 dark:bg-gray-500 h-72 w-40 right-[38%]   md:right-[44%] bottom-1 transform translate-x-1/2 rounded-tr-[50px] rotate-[8deg] -z-10"></div>
                </div>
            </div>

            <InfinteRoleSlider />
        </div>
    )
}

export default HeroSection