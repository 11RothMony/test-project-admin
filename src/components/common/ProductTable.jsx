import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Select from "./Select";
import { Link } from "react-router-dom";

const ProductTable = () => {
  return (
    <div>
      <div className="bg-base-100 p-5 mt-5 shadow-gray-300 shadow-lg rounded-xl">
        <h1 className="text-black font-bold text-xl">Best selling products</h1>
        <div className=" flex justify-between mt-3">
          <Select title={"Show By"} />
          <Select title={"Category By"} />
          <Select title={"Brand By"} />
          <Select title={"Search By"} />
        </div>
      <div className="overflow-x-auto mt-5 rounded-lg ">
        <table className="table table-xs rounded-lg">
          <thead className="bg-blue-800 text-white h-14">
            <tr className="">
              <th>ID</th>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>RATING</th>
              <th>ORDER</th>
              <th>SALES</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask h-14 w-14 rounded-lg">
                      <img
                        className="object-cover"
                        src="https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <Link to="/product-detail">
                    <button className="btn bg-violet-300 p-2">
                      <FaEye className="w-4 h-4" />
                    </button>
                  </Link>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="h-24">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="object-cover"
                        src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-surfing-short-sleeve-anti-uv-water-t-shirt-white.jpg?format=auto&quality=70&f=768x768"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">T-Shirt</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Men</td>
              <td>ZARA</td>
              <td>
                <del>$30.00</del>
                <br />
                <span className="text-red-500">$20.00</span>
              </td>
              <td>30</td>
              <td>4.5</td>
              <td>304</td>
              <td>$30K</td>
              <td>
                <div className=" flex gap-1">
                  <button className="btn bg-violet-300 p-2">
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button className="btn bg-blue-300 p-2">
                    <FaPen className="w-4 h-4" />
                  </button>
                  <button className="btn bg-red-300 p-2">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="h-14">
            <tr>
              <th>ID</th>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>PRICE</th>
              <th> STOCK</th>
              <th> RATING</th>
              <th> ORDER</th>
              <th> SALES</th>
              <th> ACTION</th>
            </tr>
          </tfoot>
        </table>
        <div className="join flex justify-center mt-5">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    
      </div>
    </div>
  );
};
export default ProductTable;
