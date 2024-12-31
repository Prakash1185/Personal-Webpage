import { Link } from "react-router-dom"

const Socials = () => {
  return (
    <div id="socials" className="pt-10 bg-background px-10 sm:px-14 md:px-16 pb-16 border-b border-gray-500 border-opacity-30 dark:bg-gray-950">
      <div className="relative flex items-center justify-center gap-2  pt-14">
        <div className="w-5 h-1 bg-bluee"></div>
        <div className="text-xl font-medium dark:text-gray-100 ">Socials</div>
        <div className="absolute  opacity-10 -top-2 text-[3.5rem] md:text-[4.5rem] font-bold tracking-wider whitespace-nowrap dark:text-gray-100 dark:opacity-5">Connect With Me</div>
      </div>

      <h1 className='text-5xl font-semibold text-center tracking-wider pt-2 dark:text-gray-100'>Contact <span className='text-bluee font-medium'>Me</span></h1>

      <div className="flex flex-wrap justify-center pt-8 gap-5">

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={"https://github.com/Prakash1185"}>
            <i className="fa-brands fa-github text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={"https://www.linkedin.com/in/prakash-kumar-b26183330/"}>
            <i className="fa-brands fa-linkedin text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={"https://prakashh-portfolio.vercel.app/"}>
            <i className="fa-solid fa-envelope text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={"#"}>
            <i className="fa-brands fa-instagram text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={'#'}>
            <i className="fa-brands fa-telegram text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>


        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link to={"#"}>
            <i className="fa-brands fa-twitter text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Socials