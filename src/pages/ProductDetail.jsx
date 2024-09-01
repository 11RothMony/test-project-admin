import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import AvatarInfor from "../components/common/AvatarInfor";
import Progress from "../components/common/Progress";
import SlidViews from "../components/common/SlidViews";
import StarRating from "../components/common/StarRating";

function ProductDetail({ productList }) {
  const { productId } = useParams();
  const product = productList.find((p) => p.id === parseInt(productId));

  return (
    <div>
      <div className="flex justify-between w-full rounded-lg  items-center p-5 bg-base-100">
        <h1 className="text-xl font-semibold">Product Detail</h1>
        <div className="flex gap-2 items-center">
          <Link>
            <div className="rounded-lg px-4 py-2 gap-2 flex bg-gray-100">
              <IoMdHome className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </div>
          </Link>
          <span className="font-bold text-xl"> ~ </span>
          <Link>
            <div className="rounded-lg px-4 py-2 flex bg-gray-100">
              <span className="font-medium">productList</span>
            </div>
          </Link>
          <span className="font-bold text-xl"> ~ </span>
          <Link>
            <div className="rounded-lg px-4 py-2 flex bg-gray-100">
              <span className="font-medium">Product Detail</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="p-5 bg-base-100 rounded-lg w-full mt-4">
        <div className="flex gap-8">
          <div className="w-3/6 rounded-lg">
            <h1 className="text-xl font-medium ">Product Gallery</h1>
            <SlidViews images={product.photos} />
          </div>
          <div className="w-3/6">
            <h1 className="text-xl font-medium ">
              Product Detail {product.title}
            </h1>
            <h2 className="text-lg font-medium text-gray-500 mt-2">
              {product.paragraph}
            </h2>
            <div className="p-5">
              <div className=" flex items-center gap-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal text-sm md:text-base lg:text-lg">
                    Brand :
                  </label>
                </div>
                <div className="w-4/5 ">
                  <span className="font-medium text-lg text-gray-500 ">
                    {product.brand}
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Category :
                  </label>
                </div>
                <div className="w-4/5 flex gap-2 ">
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Tags :
                  </label>
                </div>
                <div className="w-4/5 flex gap-2 ">
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    MAN
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    STYLES
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    PARTY
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    SMART
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Color :
                  </label>
                </div>
                <div className="w-4/5 flex gap-2">
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    Blue
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    Blue
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    Blue
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Size :
                  </label>
                </div>
                <div className="w-4/5 flex gap-2">
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    S
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    M
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    L
                  </span>
                  <span className="rounded-lg px-2 py-1 flex bg-gray-100">
                    XL
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Price :
                  </label>
                </div>
                <div className="w-4/5 ">
                  <span className="font-medium text-gray-500 text-lg ">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 md:gap-4 ">
                <div className="w-1/5">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Review :
                  </label>
                </div>
                <div className="w-4/5 mt-2">
                  <span className="font-medium text-lg text-gray-500">
                    {product.rating} reviews
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Stock :
                  </label>
                </div>
                <div className="w-4/5 mt-2">
                  <span className="font-medium text-lg text-gray-500">
                    50 items
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2 md:gap-4 ">
                <div className="w-1/5 ">
                  <label className="lg:font-medium text-gray-500 md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                    Date :
                  </label>
                </div>
                <div className="w-4/5 mt-2">
                  <span className="font-medium text-lg text-gray-500">
                    {" "}
                    02 Feb 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="font-bold text-lg">Product Description</h1>
          <p className="py-5 text-gray-500">
            Lorem ipsum is typically a corrupted version of De finibus bonorum
            et malorum, a 1st-century BC text by the Roman statesman and
            philosopher Cicero, with words altered, added, and removed to make
            it nonsensical and improper Latin. The first two words themselves
            are a truncation of dolorem ipsum ("pain itself") Lorem ipsum was
            introduced to the digital world in the mid-1980s, when Aldus
            employed it in graphic and word-processing templates for its desktop
            publishing program PageMaker.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-lg">Ratting Analytics</h1>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-around">
          <div className="py-5">
            <Progress numStar={"1"} value={1} num={"22"} />
            <Progress numStar={"6"} value={6} num={"22"} />
            <Progress numStar={"5"} value={5} num={"22"} />
            <Progress numStar={"3"} value={3} num={"22"} />
            <Progress numStar={"1"} value={10} num={"22"} />
          </div>
          <div className="items-center py-6">
            <h1 className="font-bold text-2xl text-gray-600">
              Total Review(38)
            </h1>
            <h1 className="font-bold text-8xl text-gray-600 text-center">
              3.8
            </h1>
            <StarRating rating={product.rating} className="w-10 h-10" />
            <p className="text-sm text-center py-3 font-medium text-gray-600">
              Your Average Rating Star
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-lg">Customer Reviews</h1>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="bg-gray-100 shadow-md shadow-gray-400 w-full p-8 mt-10 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <AvatarInfor
                nameProfile={"Rothmony"}
                timePost={"22 minuted ago"}
                photosProfile={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
              <StarRating rating={4} className="w-5 h-5" />
            </div>
            <div>
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
          <div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 shadow-md shadow-gray-400 w-[80%] ml-auto p-8 mt-10 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <AvatarInfor
                nameProfile={"Rothmony"}
                timePost={"22 minuted ago"}
                photosProfile={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
              <StarRating rating={4} className="w-5 h-5" />
            </div>
            <div>
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
          <div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 shadow-md shadow-gray-400 w-full p-8 mt-10 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <AvatarInfor
                nameProfile={"Rothmony"}
                timePost={"22 minuted ago"}
                photosProfile={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
              <StarRating rating={4} className="w-5 h-5" />
            </div>
            <div>
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
          <div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-10">
          <h1 className="font-bold text-lg">Review Reply Form</h1>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <textarea
          placeholder="Write here"
          className="textarea textarea-bordered mt-10 w-full h-48"
        ></textarea>
        <button className="btn btn-lg btn-primary w-full mt-4">
          DROP YOUR REPLY
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
