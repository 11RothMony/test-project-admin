import { FaShoppingCart, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { BiTrendingUp } from "react-icons/bi";
const  BoxDashboard=({title, gradient, number, percentage, icon})=>{

    // Define your Tailwind gradient classes based on the props
    const gradientClass = {
        blueToPurple: 'bg-gradient-to-r from-blue-400 to-purple-600',
        redToYellow: 'bg-gradient-to-r from-red-400 to-yellow-600',
        greenToTeal: 'bg-gradient-to-r from-green-400 to-teal-600',
    };

    // Use the gradient prop to select the appropriate class
    const selectedGradientClass = gradientClass[gradient] || gradientClass.blueToPurple;

    const iconMap = {
        user: <FaUserAlt className="h-6 w-6 text-blue-500" />,
        cart: <FaShoppingCart className="h-6 w-6 text-green-500" />,
        bag: <FaShoppingBag className="h-6 w-6 text-red-500" />,
        star: <GiStarsStack  className="h-6 w-6 text-blue-500" />,
    };

      const SelectedIcon = iconMap[icon] || iconMap[' '];

    return(
        <div className={` ${selectedGradientClass} rounded-xl  p-4 w-[350px] h-44 relative`}>
            <h3 className="font-medium text-lg text-white">{title}</h3>
            <h1 className="font-bold text-2xl text-white">{number}</h1>
            <div className="absolute left-20 top-6 p-6 ">
                {/* <FaShoppingCart className="w-6 h-6" /> */}
                <BiTrendingUp className="w-32 h-32 text-black text-opacity-5 "/>
            </div>
            <div className=" flex items-center gap-1 absolute bottom-3 ">     
                <p className="bg-gray-500 text-white bg-opacity-30 rounded-lg text-sm p-1">++{percentage}%</p>
                <p className="text-white text-sm">Last Month</p>
            </div>
            <div className="absolute right-5 top-5 p-2 rounded-lg opacity-40 bg-slate-300">
                {/* <FaShoppingCart className="w-6 h-6" /> */}
                {SelectedIcon}
            </div>
            <div className="dropdown dropdown-bottom absolute right-5 bottom-5 ">
                <CiMenuKebab tabIndex={0} className="w-5 h-5 cursor-pointer"/>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Last Day</a></li>
                    <li><a>Last week</a></li>
                    <li><a>Last Month</a></li>
                    <li><a>Last Year</a></li>
                </ul>
            </div>
        </div>
    )
}
export default BoxDashboard;