import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InputForm from "../components/common/InputForm";
import Textarea from "../components/common/TextareaForm";
import SelectForm from "../components/common/SelectForm";
import StarRating from "../components/common/StarRating";
import UpdateImageForm from "../components/common/UpdateImageForm";
import { FaCloudUploadAlt } from "react-icons/fa";

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by ID when the component loads
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
      <h1 className="text-xl font-semibold">Edit Information</h1>
      <form action="">
      <InputForm
        className="w-full"
        title="TITLE"
        value={product.title} // Use value here
        onChange={(e) => setProduct({ ...product, title: e.target.value })} // Handle the change
      />
        <Textarea
          className="w-full h-48"
          title="DESCRIPTION"
          value={product.paragraph}
          onChange={(e) =>
            setProduct({ ...product, paragraph: e.target.value })
          }
        />
        <div className="grid grid-rows-3 grid-flow-col gap-3">
          <InputForm
            title="PRICE"
            className="w-full"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <InputForm
            title="OLD PRICE"
            className="w-full"
            defaultValue={(product.price * 1.1).toFixed(2)}
          />
          <SelectForm
            title="CATEGORY"
            className="w-full"
            defaultValue={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <InputForm
            title="PRODUCT STOCK"
            className="w-full"
            defaultValue={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />
          <InputForm
            title="BRAND"
            className="w-full"
            defaultValue={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Ratings</h1>
          <StarRating
            rating={product.rating}
            className="w-5 h-5"
            onChange={(rating) => setProduct({ ...product, rating })}
          />
        </div>
        <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
          <UpdateImageForm
            defaultPhotos={product.photos}
            onChange={(photos) => setProduct({ ...product, photos })}
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 w-full flex items-center justify-center gap-2 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FaCloudUploadAlt className="w-7 h-7" />
          <h1>Update Images</h1>
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
