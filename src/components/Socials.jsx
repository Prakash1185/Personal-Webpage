import { Link } from "react-router-dom"

const Socials = () => {
  return (
    <div id="socials" className="pt-10 bg-background px-16 pb-16 border-b border-gray-500 border-opacity-30">
      <div className="relative flex items-center justify-center gap-2  pt-14">
        <div className="w-5 h-1 bg-bluee"></div>
        <div className="text-xl font-medium ">Socials</div>
        <div className="absolute  opacity-10 -top-2 text-[4.5rem] font-bold tracking-wider">Connect With Me</div>
      </div>

      <h1 className='text-5xl font-semibold text-center tracking-wider pt-2 '>Contact <span className='text-bluee font-medium'>Me</span></h1>

      <div className="flex justify-center pt-8 gap-5">

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-brands fa-github text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-brands fa-linkedin text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-solid fa-envelope text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-brands fa-instagram text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-brands fa-telegram text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>


        <div className="bg-white border-gray-500 border-opacity-50 border h-20 w-20 rounded-xl  flex items-center justify-center flex-col gap-2 hover:bg-bluee transition-all duration-300 group" >
          <Link>
            <i className="fa-brands fa-twitter text-[3rem] cursor-pointer group-hover:text-white"></i>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Socials