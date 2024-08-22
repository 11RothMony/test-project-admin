import { FaShoppingCart, FaUserAlt, FaShoppingBag } from "react-icons/fa";

const BoxProduct = ({ title, number, gradient, icon }) => {
  // Define your Tailwind gradient classes based on the props
  const gradientClass = {
    blueToPurple: "bg-gradient-to-r from-blue-400 to-purple-600",
    redToYellow: "bg-gradient-to-r from-red-400 to-yellow-600",
    greenToTeal: "bg-gradient-to-r from-green-400 to-teal-600",
  };

  // Use the gradient prop to select the appropriate class
  const selectedGradientClass =
    gradientClass[gradient] || gradientClass.blueToPurple;

  const iconMap = {
    user: <FaUserAlt className="h-6 w-6 text-blue-500" />,
    cart: <FaShoppingCart className="h-6 w-6 text-green-500" />,
    bag: <FaShoppingBag className="h-6 w-6 text-red-500" />,
  };

  const SelectedIcon = iconMap[icon] || iconMap[" "];
  return (
    <div>
      <div
        className={` ${selectedGradientClass} rounded-xl flex items-center mt-8 justify-between p-4 w-[340px] h-32 relative`}
      >
        <div>
          <h3 className="font-medium text-lg text-white">{title}</h3>
          <h1 className="font-bold text-2xl text-white">{number}</h1>
        </div>
        <div className=" p-2 rounded-lg opacity-40 bg-slate-300">
          {/* <FaShoppingCart className="w-6 h-6" /> */}
          {SelectedIcon}
        </div>
      </div>
    </div>
  );
};
export default BoxProduct;
